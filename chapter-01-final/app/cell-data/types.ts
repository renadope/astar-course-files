import type { Pos } from '~/types/pathfinding';

export type CellData = {
  pos: Pos;
  cost: number;
  state: 'empty' | 'start' | 'goal' | 'wall';
};
