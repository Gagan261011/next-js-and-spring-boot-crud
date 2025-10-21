import { render, screen } from '@testing-library/react'
import EmployeeList from '../src/components/EmployeeList'

describe('EmployeeList', () => {
  it('renders the employee list', () => {
    const employees = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', department: 'IT', salary: 60000 },
    ]
    render(<EmployeeList employees={employees} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
