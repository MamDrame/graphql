import { convertFormatDate } from "../lib/utils.js";

/* eslint-disable react/prop-types */
export default function ListCard({ auditsTable }) {
  // const username = auditsTable?.group.captainLogin;
  // const project = auditsTable?.group.path;
  // const date = auditsTable?.updatedAt;
  // const result = auditsTable?.grade;
  // console.log(username);
  // console.log(project);
  // console.log(convertFormatDate(date));
  // console.log(auditsTable[0].grade >= 1);
  // console.log(auditsTable);
  return (
    <div className="overflow-x-auto">
      <div>
        <h2 className="text-2xl font-bold text-center">Audits</h2>
        <p> </p>
      </div>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium">
              Username
            </th>
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium">
              Projects
            </th>
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium">
              Date
            </th>
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {auditsTable?.map((audit) => (
            <Trcomponent key={audit.id} audit={audit} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Trcomponent({ audit }) {
  // console.log(audit.grade);
  return (
    <tr className="border-b">
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
        {audit?.group.captainLogin}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
        {audit?.group.path}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
        {convertFormatDate(audit?.updatedAt)}
      </td>
      <td className="border-b border-gray-200 px-6 py-4">
        {/* <span className="rounded-full bg-green-500 px-2 py-1 text-xs">
          Active
        </span> */}
        <Status audit={audit.grade} />
      </td>
    </tr>
  );
}

function Status(grade) {
  if (grade.audit >= 1) {
    return (
      <span className="rounded-full bg-green-500 px-2 py-1 text-xs">PASS</span>
    );
  } else {
    return (
      <span className="rounded-full bg-red-500 px-2 py-1 text-xs">FAIL</span>
    );
  }
}
