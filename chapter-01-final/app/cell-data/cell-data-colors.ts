import type { CellData } from '~/cell-data/types';

export const cellBgColor: Record<CellData['state'], string> = {
  empty: 'bg-slate-50',
  wall: 'bg-slate-900',
  start: 'bg-sky-500',
  goal: 'bg-pink-500',
};
export const textColors: Record<CellData['state'], string> = {
  wall: 'text-white',
  start: 'text-white',
  goal: 'text-white',
  empty: 'text-slate-800',
};
