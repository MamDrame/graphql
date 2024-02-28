/* eslint-disable react/prop-types */
/*
 * This component is the header of the dashboard
 * @returns {JSX.Element} - The Statcomponent component
 */

import { convertXP } from "../lib/utils.js";
import { Auditcomponent } from "./audit.jsx";

export function StatCard({ downRatio, upRatio, xp, level }) {
  const down = downRatio;
  const up = upRatio;
  const data = upRatio / downRatio;
  const Xp = convertXP(xp);
  return (
    <div className="mt-2 grid grid-cols-3 items-center gp-2">
      <div
        href="#"
        className="flex h-48 w-full flex-col bg-gray-900 shadow-md items-center justify-evenly rounded-md"
      >
        <div className="flex flex-row text-2xl items-center justify-between gap-4">
          <h4>XP</h4>
        </div>
        <span className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-900 to-purple-900 flex flex-col items-center justify-center font-bold text-3xl text-purple-600">
          {Xp}
        </span>
        <p className="m-0.5 text-l ">XP</p>
      </div>
      <div
        href="#"
        className="flex h-48 w-full flex-col bg-gray-900 shadow-md items-center justify-evenly rounded-md"
      >
        <div className="flex flex-row text-2xl items-center justify-center gap-4">
          <div>Level</div>
        </div>
        <span className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-900 to-purple-900 flex flex-col items-center justify-center font-bold text-3xl text-purple-600">
          {level}
        </span>
        <p className="mt-0.5 text-l">level</p>
      </div>
      <Auditcomponent up={up} down={down} data={data} />
    </div>
  );
}
