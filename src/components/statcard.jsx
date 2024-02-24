/* eslint-disable react/prop-types */
/*
 * This component is the header of the dashboard
 * @returns {JSX.Element} - The Statcomponent component
 */

import { Auditcomponent } from "./audit.jsx";

export function StatCard({ downRatio, upRatio, xp }) {
  const data = upRatio.aggregate.sum.amount / downRatio.aggregate.sum.amount;
  const down = downRatio.aggregate.sum.amount;
  const up = upRatio.aggregate.sum.amount;
  return (
    <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-16">
      <div
        href="#"
        className="flex h-32 w-1/4 bg-[#d5d1f7] flex-col items-center justify-evenly rounded-md border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
      >
        <div className="flex flex-row text-2xl items-center justify-between gap-4">
          <h4 className="mt-2 text-xl text-gray-400">XP</h4>
          <span className="material-symbols-outlined">timeline</span>
        </div>
        <span className="font-bold text-3xl text-purple-600">{xp.amount}</span>
        <p className="mt-2 text-l text-gray-400">XP</p>
      </div>
      <div
        href="#"
        className="flex h-32 w-1/4 bg-[#d5d1f7] flex-col items-center justify-evenly rounded-md border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
      >
        <div className="flex flex-row text-2xl items-center justify-center gap-4">
          <h4 className="mt-2 text-xl text-gray-400">Level</h4>
          <span className="material-symbols-outlined">timeline</span>
        </div>
        <span className="font-bold text-3xl text-purple-600"> 4.6K </span>
        <p className="mt-2 text-l text-gray-400">XP</p>
      </div>
      <Auditcomponent up={up} down={down} data={data} />
    </div>
  );
}
