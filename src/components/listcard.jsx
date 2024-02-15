export default function ListCard() {
  
  return (
    <div className="overflow-x-auto">
  <table className="min-w-full">
    <thead className="border-b">
      <tr>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
        >
          #
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
        >
          Username
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
        >
          Projects
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
        >
          Date
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
        >
          Result
        </th>
      </tr>
    </thead>
    <tbody>
    <Trcomponent />
    </tbody>
  </table>
</div>
  )
}

function Trcomponent() {
  return (
    <tr className="border-b">
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
          1
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
          Mamdrame
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
          Forum
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
          11-12-2023
        </td>
        <td className="border-b border-gray-200 px-6 py-4">
          <span className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">
            Active
          </span>
        </td>
      </tr>
  )
}