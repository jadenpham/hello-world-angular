import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INba } from './nbaTeams';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //injecting dependency to get data from httpclient
  constructor(private http: HttpClient) { }

  // getEmployees(){
  //   return [
  //     {"id": 1, "name": "Bob", "age": 30,},
  //     {"id": 2, "name": "Phyllis", "age": 30},
  //     {"id": 3, "name": "Andy", "age": 30},
  //     {"id": 4, "name": "Jim", "age": 30,}
  //     ];
  // }
  getNbaTeams(){
    //making request to site, returns back an observable as array of interface type nbateam declared in interface
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
  }
}
