import TableEmployee from "./TableEmployee";
import TableItemEmployee from "./TableItemEmployee";
import React, {useState, useEffect} from "react";

export default function Employee() {

  let [employees,setEmployees] = useState([])

  useEffect(() => {
    getEmployees()
  },[])

  let getEmployees = async () => {
    let response = await fetch('https://my-json-server.typicode.com/duydoit/data/employee/')
    let data = await response.json()
    setEmployees(data)
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <TableEmployee>
              {employees.map((employee) => (
                <TableItemEmployee key={employee.id} employee={employee} />
              ))}
            </TableEmployee>
          </div>
        </div>
      </div>
    </div>
  );
}
