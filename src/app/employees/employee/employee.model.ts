export class Employee {
    firstName: string;
    lastName: string;
    position: string;
    description: string;
    salary: number;
    imgUrl: string;

    constructor(employeeInfo:any) {
        this.firstName = employeeInfo.firstName;
        this.lastName = employeeInfo.lastName;
        this.position = employeeInfo.position;
        this.description = employeeInfo.description;
        this.salary = employeeInfo.salary;
        this.imgUrl = employeeInfo.url;
    }
}