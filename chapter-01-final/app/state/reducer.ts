import type { Pos } from '~/types/pathfinding';
import { generateRandomCostGrid } from '~/utils/grid-generation';
import { predefinedWeightFuncs } from '~/utils/grid-weights';
import type { Action, AppState } from '~/state/types';
import { initCellData } from '~/cell-data/cell-data';
import { isNullOrUndefined } from '~/utils/helpers';

export const initialState: AppState = {
  weightGrid: [],
  cellData: [],
  gridSize: 10,
  weightPreset: {
    func: predefinedWeightFuncs['uniform'],
    name: 'uniform',
  },
};

function generateGrid(state: AppState, size: number): AppState {
  const startPos: Pos = [0, 0];
  const posSize = Math.abs(size) >= 2 ? Math.abs(size) : 2;
  const goalPos: Pos = [posSize - 1, posSize - 1];
  const weightGrid: number[][] = generateRandomCostGrid(
    posSize,
    state.weightPreset.func,
    startPos,
    goalPos
  );
  const cellData = initCellData(weightGrid, startPos, goalPos);
  return {
    ...state,
    weightGrid: weightGrid,
    cellData: cellData,
    gridSize: posSize,
  };
}

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'GENERATE_GRID':
      const size = action.payload ?? 5;
      return generateGrid(state, size);
    case 'SET_WEIGHT_PRESET':
      const newWeightPresetName = action.payload;
      if (
        isNullOrUndefined(newWeightPresetName) ||
        !(newWeightPresetName in predefinedWeightFuncs)
      ) {
        return generateGrid(
          {
            ...state,
            weightPreset: {
              name: 'uniform',
              func: predefinedWeightFuncs['uniform'],
            },
          },
          state.gridSize
        );
      }
      return generateGrid(
        {
          ...state,
          weightPreset: {
            name: newWeightPresetName,
            func: predefinedWeightFuncs[newWeightPresetName],
          },
        },
        state.gridSize
      );

    default:
      return state;
  }
}
