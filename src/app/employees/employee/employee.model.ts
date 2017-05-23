export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    description: string;
    salary: string;
    imgUrl: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    about: string;

    constructor(employeeInfo:any) {
        this.firstName = employeeInfo.firstName;
        this.lastName = employeeInfo.lastName;
        this.position = employeeInfo.position;
        this.description = employeeInfo.description;
        this.salary = employeeInfo.salary;
        this.imgUrl = employeeInfo.url;
    }
}