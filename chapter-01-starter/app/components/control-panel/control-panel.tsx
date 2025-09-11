export const gridSize = 8;

export default function ControlPanel() {
  return (
    <div
      className={`2xs:gap-4 2xs:p-3 xs:p-4 2xs:border-t-4 flex flex-col gap-3 md:rounded-lg md:border md:border-t-0 md:shadow md:backdrop-blur-sm`}
    >
      <div className={'flex flex-col gap-3'}>
        {/*TODO: PLace AlgoButtons component here*/}
      </div>
      <div
        className={
          '2xs:gap-4 flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6'
        }
      >
        <div className="2xs:rounded-lg 2xs:p-3 2xs:space-y-4 space-y-3 rounded-md bg-purple-50 p-2 sm:p-4">
          <h4 className="2xs:text-sm flex items-center gap-2 text-xs font-semibold text-purple-950 sm:text-base">
            ⚙️ Algorithm Settings
          </h4>
          <div className="2xs:gap-3 grid grid-cols-1 gap-2 sm:gap-4">
            {/*TODO: Place WeightPreset Component here*/}
          </div>
        </div>
      </div>
    </div>
  );
}
