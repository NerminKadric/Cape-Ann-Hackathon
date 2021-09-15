import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-validation',
  templateUrl: './status-validation.component.html',
  styleUrls: ['./status-validation.component.css']
})
export class StatusValidationComponent implements OnInit {

  statusValidationForm!: FormGroup;
  emptyForm?: boolean;
  minMaxLength?: boolean;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.statusValidationForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit(){
    this.emptyForm = false;
    this.minMaxLength = false;
    if(this.statusValidationForm.invalid){
      if(this.statusValidationForm?.get('email')?.hasError('required') || this.statusValidationForm.get('password').hasError('required')){
        this.emptyForm = true;
        return;
      } 
    }
  }

}
