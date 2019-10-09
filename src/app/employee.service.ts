import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Bob", "age": 30,},
      {"id": 2, "name": "Phyllis", "age": 30},
      {"id": 3, "name": "Andy", "age": 30},
      {"id": 4, "name": "Jim", "age": 30,}
      ];
  }
}
