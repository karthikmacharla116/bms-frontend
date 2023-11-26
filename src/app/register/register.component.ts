import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { Register } from './registerForm';

@Component({
  selector: 'bms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  registrationStatus: string = '';
  constructor(private fb: FormBuilder, private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [''],
      password: [''],
      dob:[''],
      department:[''],
      phoneNum:[''],
      address:[''],
      route:[''],
      role: ['']
    })
  }

  registerSubmit(registerForm: Register) {
    console.log(registerForm.department);
    console.log(registerForm.role);
    if(registerForm.role === "faculty") {
      this.registerService.saveFacultyDetails(registerForm).subscribe(data => {
        this.registrationStatus = data;
      });
    }else if(registerForm.role === "student"){
      this.registerService.saveStudentDetails(registerForm).subscribe(data => {
        this.registrationStatus = data;
      });
    }else{
      this.registerService.saveAdminDetails(registerForm).subscribe(data => {
        this.registrationStatus = data;
      });
    }
    console.log(this.registrationStatus);
  }

}
