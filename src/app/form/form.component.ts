import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient
              ) { }

  ngOnInit(): void {
    this.buildingPermitForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      jmbg: [null, [Validators.required, Validators.pattern(this.jmbgRegx), Validators.minLength(13)]],
      phoneNumber: [null],
      address: [null],
      lot: [null]
    })

    this.marriageForm = this.formBuilder.group({
      dateOfMarriage: [null, [Validators.required]],
      marriageLocation: [null, [Validators.required]],
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
    console.log(this.buildingPermitForm.value);
    this.http.post('http://localhost:3000/permits/building-permit/', this.buildingPermitForm.value)
    .subscribe(responseData => {
      console.log("User successfully registered");
    }, errorResponse => {
      console.log(errorResponse);
    })
  }

  submitMarriageForm() {
    console.log(this.marriageForm.value);
    this.http.post('http://localhost:3000/permits/marriage-permit/', this.marriageForm.value)
    .subscribe(responseData => {
      console.log("User successfully registered");
    }, errorResponse => {
      console.log(errorResponse);
    })

  }

}









