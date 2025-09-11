export default function Grid() {
  /*TODO: Get state and check if has valid data*/
  return (
    <div className={'relative'}>
      <div className="2xs:p-2 2xs:gap-y-2 flex flex-col gap-y-1 rounded-2xl sm:gap-y-3 lg:p-4">
        <div className="absolute -top-3 -right-3 rounded-full bg-white p-1 shadow-md"></div>
        {/*TODO: Before we create the actual grid, we check if its valid using the check we made on top*/}
        {1 === 1 && false && (
          <div className="2xs:gap-1.5 xs:gap-2 flex flex-col items-center justify-center gap-1 sm:gap-3">
            {/*TODO: Map through the cell data to to create our actual grid  */}
          </div>
        )}

        {1 === 1 && false && <p>{/*TODO: Add Legend Component Here*/}</p>}
      </div>
    </div>
  );
}

const cellBgColor = {};

function LegendComponent() {
  return (
    <div className="2xs:mt-3 2xs:gap-1.5 mt-2 flex flex-wrap justify-center gap-1 sm:mt-4 sm:gap-2">
      {['empty', 'wall', 'start', 'goal'].map(state => (
        <div
          key={state}
          className="2xs:px-2 2xs:py-1 flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 shadow-2xl"
        >
          <div
            className={`2xs:w-3 2xs:h-3 h-2.5 w-2.5 rounded-full ${cellBgColor[state as keyof typeof cellBgColor]}`}
          ></div>
          <span className="2xs:text-xs text-xs text-slate-700 capitalize sm:text-sm">
            {state}
          </span>
        </div>
      ))}
    </div>
  );
}
