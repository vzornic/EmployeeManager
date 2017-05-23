import { Injectable } from '@angular/core';

import { Employee } from './employee/employee.model';
import { EMPLOYEES } from './employee/mock/mock';

@Injectable()
export class EmployeesService {

  getEmployees():  Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);
  }

  getEmployee(id: number): Promise<Employee> {
    return Promise.resolve(EMPLOYEES.find(function(employee) {
      return employee.id === id;
    }));
  }
}