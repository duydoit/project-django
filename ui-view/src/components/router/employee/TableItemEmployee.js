export default function TableItemEmployee({employee}) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={employee.avatar} alt={employee.avatar} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{employee.name}</div>
            <div className="text-sm text-gray-500">{employee.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{employee.department}</div>
        <div className="text-sm text-gray-500">{employee.employee_type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.manager}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="bg-indigo-500 text-white px-2 py-1 font-medium rounded-md hover:text-indigo-900">
            Edit
        </button>
      </td>
    </tr>
  );
}
