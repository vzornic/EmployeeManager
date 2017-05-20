import { Injectable } from '@angular/core';

import { Employee } from './employee/employee.model';
import { EMPLOYEES } from './employee/mock/mock';

@Injectable()
export class EmployeesService {

  getEmployees():  Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);
  }
}