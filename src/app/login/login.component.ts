import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  loginStatus: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl(''),
      password: [''],
      role: ['']
    })
  }

  loginSubmit(loginForm: Login) {
    // need to make service call
    if (loginForm.role === "faculty") {
      this.loginService.validateFacultyDetails(loginForm).subscribe(data => {
        this.loginStatus = data;
      });
    } else if (loginForm.role === "student") {
      this.loginService.validateStudentDetails(loginForm).subscribe(data => {
        this.loginStatus = data;
      });
    } else {
      this.loginService.validateAdminDetails(loginForm).subscribe(data => {
        this.loginStatus = data;
      });
    }
    console.log(this.loginStatus);
    this.NavToHome();
  }
  NavToHome() {
    if (this.loginStatus === 'Login Successfull') {
      // Storing user credentials in local storage
      const { userName, password, role} = this.loginForm.value;
      localStorage.setItem('username', userName);
      localStorage.setItem('password', password);
      localStorage.setItem('role', role);
      this.router.navigate(['/home']);
    }
  }

}
