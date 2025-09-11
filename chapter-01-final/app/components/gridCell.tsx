import { useGridContext } from '~/state/context';
import type { Pos } from '~/types/pathfinding';
import type { CellData } from '~/cell-data/types';
import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '~/lib/utils';
import { cellBgColor, textColors } from '~/cell-data/cell-data-colors';

type BasicCellInfoType = ComponentPropsWithoutRef<'div'> & {
  cell: CellData;
};
function BasicCellInfo({ cell, className, ...props }: BasicCellInfoType) {
  return (
    <div
      className={cn(
        'group flex h-full w-full flex-col items-center justify-center gap-0.5',
        className
      )}
      {...props}
    >
      <p
        className={`2xs:hidden text-xs sm:block md:text-sm lg:text-lg ${textColors[cell.state] ?? 'text-slate-500'} opacity-80 select-none group-hover:opacity-100`}
      >
        {cell.cost}
      </p>
    </div>
  );
}

type CellProps = {
  pos: Pos;
};

export default function GridCell({ pos }: CellProps) {
  const { state } = useGridContext();
  const { cellData } = state;

  const [r, c] = pos;
  const cell = cellData[r][c];

  const borderThickness = Math.min(3, Math.max(1, Math.log2(cell.cost + 1)));

  return (
    <div
      style={{
        transition: 'all .3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        border: `${borderThickness}px solid ${costToColor(cell.cost)}`,
      }}
      className={` ${cellBgColor[cell.state] ?? 'bg-sky-500'} 2xs:size-8 xs:size-10 relative size-6 items-center justify-center rounded-lg backdrop-blur-sm hover:scale-95 sm:size-12 md:size-16 lg:size-22 xl:size-24 2xl:size-26`}
    >
      <BasicCellInfo cell={cell} className={'select-none'} />
    </div>
  );
}

function costToColor(cost: number): string {
  const thresholds = [
    { max: 0, color: '#1e293b' }, // Wall — slate-800
    { max: 1, color: '#14b8a6' }, // Road — teal-500
    { max: 2, color: '#65a30d' }, // Plains — lime-600
    { max: 4, color: '#4d7c0f' }, // Forest — green-700
    { max: 7, color: '#ca8a04' }, // Hills — yellow-600
    { max: 12, color: '#854d0e' }, // Swamp — amber-800
    { max: 18, color: '#0ea5e9' }, // River — sky-500
    { max: 25, color: '#f59e0b' }, // Desert — amber-500
    { max: 35, color: '#1e40af' }, // Deep Sea — blue-800
    { max: 50, color: '#e11d48' }, // Lava — rose-600
    { max: 80, color: '#7dd3fc' }, // Blizzard — blue-300
    { max: Infinity, color: '#6b21a8' }, // Mountain+ — purple-800
  ];

  for (const { max, color } of thresholds) {
    if (cost <= max) return color;
  }

  return '#6b7280'; // Default: slate-500
}
