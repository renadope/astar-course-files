import type { Route } from './+types/home';
import Grid from '~/components/grid';
import { GridProvider, useGridContext } from '~/state/context';
import { useEffect } from 'react';
import ControlPanel from '~/components/control-panel/control-panel';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chapter 1 - Final' },
    { name: 'description', content: 'Chapter 1 - Final' },
  ];
}

export function Main() {
  const { dispatch } = useGridContext();
  useEffect(() => {
    dispatch({
      type: 'GENERATE_GRID',
      payload: 8,
    });
  }, []);
  return (
    <div className="2xs:p-0.5 mx-auto w-full max-w-[90%] pb-4 sm:p-2 md:pt-10">
      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
        <div className="3xl:flex-row 3xl:gap-6 flex flex-col gap-3 sm:gap-4">
          <div className="3xl:flex-shrink-0 3xl:w-auto min-w-0">
            <Grid />
          </div>
          <div className="3xl:flex-1 3xl:min-w-[360px]">
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <GridProvider>
      <Main />
    </GridProvider>
  );
}
