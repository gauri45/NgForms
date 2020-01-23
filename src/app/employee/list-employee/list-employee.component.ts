import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  
  employee: Employee[];

  constructor(private empService : EmployeeService) { }

  ngOnInit() {

    this.employee = this.empService.getEmployee();
  }

}
