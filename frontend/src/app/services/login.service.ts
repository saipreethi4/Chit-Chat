import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from 'src/global';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginData: any) {
    return this.http.post(`${serverURL}`, loginData);
  }
}
