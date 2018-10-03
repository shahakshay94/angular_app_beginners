import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DemoServiceService} from '../demo-service.service';

@Component({
  selector: 'app-first-service-example',
  templateUrl: './first-service-example.component.html',
  styleUrls: ['./first-service-example.component.css']
})
export class FirstServiceExampleComponent implements OnInit {
  apiURL = 'https://address-book-demo.herokuapp.com/api/contacts';

  // a temp variable which is an empty JSON Obj of data type any which
  // is responsible for storing response from the API call.
  response_data: any = {};

  contact_list: any ;

  // If you want to call an API then you need to import "HTTPCLIENT" module and
  // initialise the variable of it inside the constructor parameter.

  // There are two ways to do this:

  // 1. If you are directly calling the API in the compoenent itself then
  // you need to initilise the HTTPCLIENT variable inside the constructor
  // just like we did below
  // if you look at the very first paramter of the constructor
  // you could see that we have declared a private variable called "http" which is of
  // data type "HttpClient" and we are importing it , see the import statements at the top of this file

  //2. Using Your Own Custom Service which will call the API
  //If you are using the 2nd way of approach , then you just need to import your
  // custom service. In this case the custom service we made is named "DemoServiceService"
  // you could see in the import statements that we are importing it.
  // After importing it we are initializing a private variable inside oour constructor parameter
  // If you look at the 2nd parameter, a private variable name is "_httpService" which is
  // of data type "DemoServiceService"
  //See DemoServiceService file's comments to know more about this.


  //IMP Note :
  // in this example I wanted to show you the demo of the both the above mentioned way.
  // Now whatever way you choose only those parameter will be there.
  //So if I had gone with 1st method then I would have only 1 paramter inside constructor "HttpClient".
  // and If i had gone with 2nd method then "Demoserviceservice" would have been there
  constructor(private http: HttpClient, private _httpservice: DemoServiceService) {
    //function which calls the API using our custom service
    //this.getDataUsingCustomService();
    // function which call the API directly
    this.getDataDirectlyCallingTheAPI()
  }

  getDataDirectlyCallingTheAPI() {
    // you are directly calling the GET API using the "HttpClient" module and subscribing the response from it.
    this.http.get(this.apiURL).subscribe(data => {
      this.response_data = data;
      this.contact_list = this.response_data.contacts;
      console.log(this.contact_list);
    });
  }


  getDataUsingCustomService() {
    // you access your custom service functions you created using the dot operator
    // to access classes' variables inside any function, "this." is prefixed
    // Rule of Thumb : Whenever you call an API
    // you need to "subscribe" to the response you get.
    // syntax can be found below
    // when you subscribe to the response, you store the response inside a variable
    // in this case that variable name is "data"
    this._httpservice.getAllContacts().subscribe(data => {
      // assign the response from API to a temp variable.
      this.response_data = data;

      //Now you can access any keys inside the response from API using the temp variable
      this.contact_list = this.response_data.contacts;
      console.log(this.contact_list);
    });
  }
  ngOnInit() {
  }

}
