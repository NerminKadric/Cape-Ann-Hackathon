import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm!: FormGroup;
  emptyForm?: boolean;
  minMaxLength?: boolean;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    this.emptyForm = false;
    if(this.registerForm.get('email').hasError('required') || this.registerForm.get('password').hasError('required') || this.registerForm.get('confirmPassword').hasError('required') || this.registerForm.get('phoneNumber').hasError('required')){
      this.emptyForm = true;
    }
  }

}
