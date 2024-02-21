/*
 * This component is the header of the dashboard
 * @returns {JSX.Element} - The Statcomponent component
 */
function StatCard() {
  return (
    <div className="mt-2 flex w-full flex-wrap items-center justify-evenly gap-16">
      <div
        href="#"
        className="flex h-28 w-1/3 flex-col items-center justify-evenly rounded-md border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
      >
        <div className="flex flex-row text-2xl items-center justify-center gap-4">
          <span className="material-symbols-outlined">timeline</span>
          <span className="font-bold text-gray-600"> 4.6K </span>
        </div>
        <div className="mt-2 text-xl text-gray-400">XP</div>
        <div className="mt-2 text-l text-gray-400">XP</div>
      </div>
      <div
        href="#"
        className="flex h-28 w-1/3 flex-col items-center justify-evenly rounded-md border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
      >
        <div className="flex flex-row text-2xl items-center justify-center gap-4">
          <span className="material-symbols-outlined">timeline</span>
          <span className="font-bold text-gray-600"> 4.6K </span>
        </div>
        <div className="mt-2 text-xl text-gray-400">XP</div>
        <div className="mt-2 text-l text-gray-400">XP</div>
      </div>
      <div
        href="#"
        className="flex h-28 w-1/3 flex-col items-center justify-evenly rounded-md border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
      >
        <div className="flex flex-row text-2xl items-center justify-center gap-4">
          <span className="material-symbols-outlined">progress_activity</span>
          <span className="font-bold text-gray-600"> 45 </span>
        </div>
        <div className="mt-2 text-3xl text-gray-400">Level</div>
      </div>
    </div>
  );
}

export default StatCard;
