import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  // below two variables are used to capture user input in the form
  firstName: string;
  lastName: string;
  msg: string;
  constructor() {
    this.lastName = 'Doe';
  }

  ngOnInit() {
    this.firstName = 'John';
  }
  // below is the function which is invoked when we click on submit button of the form
  ourCustomSubmitFunction() {
    this.msg = this.lastName + ' '  + this.firstName;
  }

}
