'use client'
import { useState } from 'react'
import axios from 'axios'
import EmployeeForm from './EmployeeForm'

export default function EmployeeList({ employees, onEmployeeAdded, onEmployeeUpdated, onEmployeeDeleted }) {
  const [isEditing, setIsEditing] = useState(false)
  const [employeeToEdit, setEmployeeToEdit] = useState(null)

  const handleEdit = (employee) => {
    setEmployeeToEdit(employee)
    setIsEditing(true)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/employees/${id}`)
      onEmployeeDeleted()
    } catch (error) {
      console.error('Error deleting employee:', error)
    }
  }

  const handleFormClose = () => {
    setIsEditing(false)
    setEmployeeToEdit(null)
  }

  return (
    <div>
      <button
        onClick={() => {
          setEmployeeToEdit(null)
          setIsEditing(true)
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Employee
      </button>
      {isEditing && (
        <EmployeeForm
          employee={employeeToEdit}
          onEmployeeAdded={onEmployeeAdded}
          onEmployeeUpdated={onEmployeeUpdated}
          onFormClose={handleFormClose}
        />
      )}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Department</th>
            <th className="py-2 px-4 border-b">Salary</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border-b">{employee.name}</td>
              <td className="py-2 px-4 border-b">{employee.email}</td>
              <td className="py-2 px-4 border-b">{employee.department}</td>
              <td className="py-2 px-4 border-b">{employee.salary}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(employee)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
