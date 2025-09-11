import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chapter 1' },
    { name: 'description', content: 'Chapter 01 - Starter' },
  ];
}

export function Main() {
  /*TODO: Use an useEffect to generate a new grid when the page loads for the first time*/
  return (
    <div className="2xs:p-0.5 mx-auto w-full max-w-[90%] pb-4 sm:p-2 md:pt-10">
      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
        <div className="3xl:flex-row 3xl:gap-6 flex flex-col gap-3 sm:gap-4">
          <div className="3xl:flex-shrink-0 3xl:w-auto min-w-0">
            {/*TODO: Place our Grid Component here*/}
          </div>
          <div className="3xl:flex-1 3xl:min-w-[360px]">
            {/*TODO: Place our Control Panel component here.*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // TODO: Wrap this Main component in a GridProvider component
  return <Main />;
}
