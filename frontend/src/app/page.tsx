'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeeList from '../components/EmployeeList'

export default function Home() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    try {
      const res = await axios.get('/api/employees')
      setEmployees(res.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  const handleEmployeeAdded = () => {
    fetchEmployees()
  }

  const handleEmployeeUpdated = () => {
    fetchEmployees()
  }

  const handleEmployeeDeleted = () => {
    fetchEmployees()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <EmployeeList
        employees={employees}
        onEmployeeAdded={handleEmployeeAdded}
        onEmployeeUpdated={handleEmployeeUpdated}
        onEmployeeDeleted={handleEmployeeDeleted}
      />
    </div>
  )
}
