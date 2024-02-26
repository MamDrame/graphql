import { convertFormatDate } from "../lib/utils.js";

/* eslint-disable react/prop-types */
export default function ListCard({ auditsTable, invalidAudits, validAudits }) {
  return (
    <div className="overflow-x-auto">
      <div className="text-center pb-4">
        <h2 className="text-2xl font-bold text-center">Audits</h2>
        <p>
          You have audited {invalidAudits + validAudits} projects in total. And
          you failed {invalidAudits} projects and passed {validAudits} projects.
        </p>
      </div>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium">
              Username
            </th>
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium">
              Project
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
  return (
    <tr className="border-b">
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
        {audit?.group.captainLogin}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
        {audit?.group.object.name}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
        {convertFormatDate(audit?.updatedAt)}
      </td>
      <td className="border-b border-gray-200 px-6 py-4">
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
