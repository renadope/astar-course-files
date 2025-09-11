import { type ComponentPropsWithoutRef } from 'react';
import { useGridContext } from '~/state/context';
import { cn } from '~/lib/utils';
import { gridSize } from '~/components/control-panel/control-panel';

export function AlgoButtons({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  const { dispatch } = useGridContext();
  return (
    <div
      className={cn(
        '2xs:p-1 w-full min-w-0 overflow-hidden rounded-xl bg-white',
        className
      )}
      {...props}
    >
      <div className="2xs:gap-3 flex min-w-0 flex-wrap justify-start gap-2 2xl:justify-start">
        <GenerateGridButton
          onClick={() => {
            dispatch({ type: 'GENERATE_GRID', payload: gridSize });
          }}
        />
      </div>
    </div>
  );
}

export function GenerateGridButton({
  className,
  onClick,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(
        `group 2xs:px-3 2xs:py-3 2xs:gap-1.5 2xs:text-sm flex min-w-0 flex-shrink transform items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 px-2 py-2 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:from-sky-600 hover:to-sky-700 hover:shadow-xl sm:px-4 lg:px-6`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-100"></div>
      </div>
      <span className="hidden truncate sm:inline">Generate Grid</span>
      <span className="truncate sm:hidden">New Grid</span>
    </button>
  );
}
