import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import {Employee} from './employee/employee.model';


@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    providers: [EmployeesService]
})
export class EmployeesComponent {

    employees: Employee[];

    constructor(private employeeService: EmployeesService) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeeService.getEmployees().then(employees => this.employees = employees);
    }
}
