import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select } from './formSelection.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  jmbgRegx = /^[0-9]*$/;

  selectedOption: string = '';
  marriageForm!: FormGroup;
  buildingPermitForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildingPermitForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      jmbg: [null, [Validators.required, Validators.pattern(this.jmbgRegx), Validators.minLength(13)]],
      phoneNumber: [null],
      address: [null]
    })

    this.marriageForm = this.formBuilder.group({
      dateOfMarriage: [null, [Validators.required]],
      placeOfMarriage: [null, [Validators.required]],
      groomFirstName: [null, [Validators.required]],
      groomLastName: [null, [Validators.required]],
      brideMaidenLastName: [null, [Validators.required]],
      brideFirstName: [null, [Validators.required]],
    })
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedOption = event.target.value;
    console.log(event.target.value)
  }

  submitBuildingPermit() {
    if (!this.buildingPermitForm.valid) {
      return;
    }
  }

  submitMarriageForm() {
    if (!this.buildingPermitForm.valid) {
      return;
    }
  }

}









