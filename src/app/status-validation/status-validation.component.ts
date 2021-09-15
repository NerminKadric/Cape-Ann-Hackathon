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
      brojLicneKarte: new FormControl('', [
        Validators.required,
      ])
    })
  }

  onSubmit(){
    this.emptyForm = false;
    this.minMaxLength = false;
    if(this.statusValidationForm.invalid){
      if(this.statusValidationForm?.get('brojLicneKarte')?.hasError('required')){
        this.emptyForm = true;
        return;
      } else if(this.statusValidationForm.get('brojLicneKarte')?.errors?.minlength || this.statusValidationForm.get('brojLicneKarte')?.errors?.minlength){
        this.minMaxLength = true;
        return;
      }
    }

  }

}
