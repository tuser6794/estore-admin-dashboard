import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersObservable = new Observable<any[]>();
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.usersObservable = this.httpClient.get<any[]>("./../../assets/json/users.json");
  }

}
