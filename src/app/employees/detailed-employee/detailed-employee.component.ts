import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '.././employee/employee.model';
import { EmployeesService } from '.././employees.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'detailed-employee',
    templateUrl: './detailed-employee.component.html',
    styleUrls: ['./detailed-employee.component.css'],
    providers: [EmployeesService]
})
export class DetailedEmployeeComponent implements OnInit, OnDestroy {

    id: number;
    employee: Employee;
    private sub: any;

    constructor(private employeeService: EmployeesService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']
        });
        this.employeeService.getEmployee(this.id).then(employee => this.employee = employee);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
