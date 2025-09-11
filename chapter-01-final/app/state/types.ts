import type { CellData } from '~/cell-data/types';
import type {
  CostAndWeightFunc,
  CostAndWeightKind,
} from '~/utils/grid-weights';

export type AppState = {
  weightGrid: number[][];
  cellData: CellData[][];
  gridSize: number;
  weightPreset: { func: CostAndWeightFunc; name: CostAndWeightKind };
};
export type Action =
  | { type: 'GENERATE_GRID'; payload?: number }
  | { type: 'SET_WEIGHT_PRESET'; payload: CostAndWeightKind };
