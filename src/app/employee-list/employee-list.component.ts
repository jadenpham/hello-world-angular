import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public pokemonData = []
  //declaring dependency via constructor using private then name then which service want to connect to
  constructor(private _httpService: EmployeeService) { }

  ngOnInit() {
    //can access the service's attributes/methods, getemp() from em service
    // this.employees = this._httpService.getEmployees();
    // this._httpService.getNbaTeams().subscribe( data => console.log(data));
    this._httpService.getNbaTeams().subscribe( data => this.pokemonData.push(data));
  }

}
