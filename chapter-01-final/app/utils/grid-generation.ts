import type { Pos } from '~/types/pathfinding';
import type { CostAndWeight, CostAndWeightFunc } from '~/utils/grid-weights';

export type CDFEntry = {
  cost: number;
  threshold: number;
};
export type CDF = CDFEntry[];

export function generateRandomCostGrid(
  size: number,
  getCostAndWeight: CostAndWeightFunc,
  st?: Pos,
  goal?: Pos
): number[][] {
  const start: Pos = st ?? [0, 0];
  const end: Pos = goal ?? [size - 1, size - 1];

  const grid: number[][] = [];
  for (let r = 0; r < size; r++) {
    const row: number[] = [];
    for (let c = 0; c < size; c++) {
      const terrainWeight = getTerrainWeight(getCostAndWeight, r, c, size);
      const isStart = r === start[0] && c === start[1];
      const isGoal = r === end[0] && c === end[1];
      if (isStart || isGoal) {
        row.push(1);
      } else {
        row.push(terrainWeight);
      }
    }
    grid.push(row);
  }

  return grid;
}

export function getTerrainWeight(
  func: CostAndWeightFunc,
  r: number,
  c: number,
  size: number
) {
  const cdf = buildCDF(func(r, c, size));
  const roll = Math.random();
  const terrainWeight = cdf.find(
    costAndThreshold => roll <= costAndThreshold.threshold
  );
  return terrainWeight ? terrainWeight.cost : 1;
}

export function buildCDF(costAndWeight: CostAndWeight): CDF {
  const entries = Object.entries(costAndWeight)
    .map(([cost, weight]) => {
      return {
        cost: Number(cost),
        weight: weight,
      };
    })
    .sort((a, b) => a.cost - b.cost);
  const total = entries.reduce((sum, entry) => sum + entry.weight, 0);
  let cumulative = 0;
  return entries.map(({ cost, weight }) => {
    cumulative += weight;
    return {
      cost: cost,
      threshold: cumulative / total,
    };
  });
}
