import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  selectedOption: string = '';
  constructor() { }

  ngOnInit(): void {
;
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedOption = event.target.value;
    console.log(event.target.value)
  }

}







