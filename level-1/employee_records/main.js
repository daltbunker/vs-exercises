employees = [];
function Employees(name, job, salary, status="Full Time") {
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

Employees.prototype.printEmployeeForm = function() {
    return `Name: ${this.name}, Job Title: ${this.job}, Salary: ${this.salary}, Status: ${this.status}`;
}

var emp1 = new Employees("Ann", "Teacher", "$30/hour");
var emp2 = new Employees("Derek", "Bus Driver", "$22/hour", "Part Time");
var emp3 = new Employees("Isaac", "Genetic Researcher", "$10/hour", "Contract");

employees.push(emp1.printEmployeeForm());
employees.push(emp2.printEmployeeForm());
employees.push(emp3.printEmployeeForm());

console.table(employees)