import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './registerForm';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  saveUser(registerForm: Register): string {
    // switch (registerForm.role) {
    //   case 'faculty': 
    //   this.registrationStatus = this.saveFacultyDetails(registerForm);
    //   break;
    //   case 'student': 
    //   this.registrationStatus = this.saveStudentDetails(registerForm);
    // }
    // return this.registrationStatus;
    return "ok okay";
  }

  saveFacultyDetails(registerForm: Register){
    return this.http.post<string>('/backend/faculties/register', registerForm, {responseType: "json"});
  }

  saveStudentDetails(registerForm: Register) {
    return this.http.post<string>('/backend/students/register', registerForm, {responseType: "json"});
  }

  saveAdminDetails(registerForm: Register) {
    return this.http.post<string>('/backend/admin/register', registerForm, {responseType: "json"});
  }

}
