import { type Pos } from '~/types/pathfinding';
import { isNodePassable, isSamePos } from '~/utils/grid-helpers';
import type { CellData } from '~/cell-data/types';

export function initCellData(
  weightGrid: number[][],
  start?: Pos,
  goal?: Pos
): CellData[][] {
  const st = start ?? [0, 0];
  const end = goal ?? [
    weightGrid.length - 1,
    weightGrid[weightGrid.length - 1].length - 1,
  ];
  return weightGrid.map((row: number[], rowIdx: number) => {
    return row.map((weight: number, colIdx: number) => {
      const cellData: CellData = {
        pos: [rowIdx, colIdx],
        cost: weight,
        state: isNodePassable(weight)
          ? isSamePos([rowIdx, colIdx], st)
            ? 'start'
            : isSamePos([rowIdx, colIdx], end)
              ? 'goal'
              : 'empty'
          : 'wall',
      };
      return cellData;
    });
  });
}

export function copyCellData(cellData: CellData[][]): CellData[][] {
  return cellData.map((row: CellData[]) =>
    row.map((cell: CellData) => ({ ...cell }))
  );
}
