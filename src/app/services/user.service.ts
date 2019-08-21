import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3001/rest/v1/user/${userId}`);
  }

}
