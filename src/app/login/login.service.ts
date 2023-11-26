import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  validateFacultyDetails(loginForm: Login){
    return this.http.post<string>('/backend/faculties/login', loginForm, {responseType: "json"});
  }

  validateStudentDetails(loginForm: Login) {
    return this.http.post<string>('/backend/students/login', loginForm, {responseType: "json"});
  }

  validateAdminDetails(loginForm: Login) {
    return this.http.post<string>('/backend/admin/login', loginForm, {responseType: "json"});
  }

}
