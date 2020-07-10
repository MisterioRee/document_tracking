import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public deparments: Department[] = [];
  public roles:{roleId:string, role:string}[];
  public employee:Employee = new Employee();
  
  constructor() { }

  ngOnInit(): void {
    this.deparments = [
      { id: '12e32e', name: 'Finance' },
      { id: '12312d', name: 'HR' },
    ];
    this.roles=[
      {roleId:'1223', role:'Admin'},
      {roleId:'1323', role:'Mid Admin'},
      {roleId:'1323', role:'User'},
    ]
  }

  onChangeDepartment(index){
    this.employee.department = this.deparments[index];
    console.log(this.employee);
  }

  onChangeRole(index){
    this.employee.role = this.roles[index];
  }

}

 
class Department {
  public id: string;
  public name: string;
}

class Employee{
 public name:string;
 public email:string;
 public department:Department;
 public role:{roleId:string, role:string};
 public description:string; 
}