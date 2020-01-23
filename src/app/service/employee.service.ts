import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee : Employee[];
  

  constructor() { 
    this.employee = [
    {id:101, name:"Amol", gender:"male", email:"swapnilkurhe@gmail.com", phoneNumber:"7064528649", contactPref:"9532526122",
    department:"IT",location: "Pune",doj:"01/02/19",photoPath:"assets\\image\\male.png"},
    
    {id:102, name:"PAYAL", gender:"female", email:"paytayde@gmail.com", phoneNumber:"7064528649", contactPref:"7612169131",
    department:"IT", location: "PUNE",doj:"07/02/19",photoPath:"assets\\image\\female.jpg"},
    
    {id:103, name:"Samiksha", gender:"female", email:"samiksha.dhole12@gmail.com", phoneNumber:"7064528649", contactPref:"666666",
    department:"IT", location : "Pune",doj:"05/02/19",photoPath:"assets\\image\\female.jpg"},
  ]
}
getEmployee() :Employee[] {
  return this.employee;
}

}

