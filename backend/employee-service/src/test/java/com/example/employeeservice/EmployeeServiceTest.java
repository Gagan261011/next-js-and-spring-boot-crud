package com.example.employeeservice;

import com.example.employeeservice.model.Employee;
import com.example.employeeservice.repository.EmployeeRepository;
import com.example.employeeservice.service.EmployeeService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @InjectMocks
    private EmployeeService employeeService;

    @Mock
    private EmployeeRepository employeeRepository;

    @Test
    public void testGetAllEmployees() {
        Employee employee = new Employee("John Doe", "john.doe@example.com", "IT", 60000);
        List<Employee> employees = Collections.singletonList(employee);
        when(employeeRepository.findAll()).thenReturn(employees);

        List<Employee> result = employeeService.getAllEmployees();

        assertEquals(1, result.size());
        assertEquals("John Doe", result.get(0).getName());
    }

    @Test
    public void testGetEmployeeById() {
        Employee employee = new Employee("John Doe", "john.doe@example.com", "IT", 60000);
        when(employeeRepository.findById(1L)).thenReturn(Optional.of(employee));

        Optional<Employee> result = employeeService.getEmployeeById(1L);

        assertEquals("John Doe", result.get().getName());
    }

    @Test
    public void testCreateEmployee() {
        Employee employee = new Employee("John Doe", "john.doe@example.com", "IT", 60000);
        when(employeeRepository.save(employee)).thenReturn(employee);

        Employee result = employeeService.createEmployee(employee);

        assertEquals("John Doe", result.getName());
    }

    @Test
    public void testDeleteEmployee() {
        employeeService.deleteEmployee(1L);
        verify(employeeRepository, times(1)).deleteById(1L);
    }

    @Test
    public void testUpdateEmployee() {
        Employee existingEmployee = new Employee("John Doe", "john.doe@example.com", "IT", 60000);
        Employee updatedEmployee = new Employee("John Doe", "john.doe.updated@example.com", "IT", 65000);
        when(employeeRepository.findById(1L)).thenReturn(Optional.of(existingEmployee));
        when(employeeRepository.save(existingEmployee)).thenReturn(updatedEmployee);

        Employee result = employeeService.updateEmployee(1L, updatedEmployee);

        assertEquals("john.doe.updated@example.com", result.getEmail());
        assertEquals(65000, result.getSalary());
    }
}
