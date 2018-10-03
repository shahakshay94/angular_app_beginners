import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-midterm',
  templateUrl: './midterm.component.html',
  styleUrls: ['./midterm.component.css']
})
export class MidtermComponent implements OnInit {
  jobDescription:string;
  jobName:string;
  jobObj:any = {};
  temp_response : any;
  temp_list : any;
  constructor(private _midtermHttpAPI : HttpClient) { }

  ngOnInit() {
    this.demoCall();
  }

  demoCall(){
    this._midtermHttpAPI.get('https://reqres.in/api/unknown').subscribe(response =>{
      this.temp_response = response;
      this.temp_list = this.temp_response.data;
    });
  }

  createJob(){
    this._midtermHttpAPI.post('https://reqres.in/api/users',this.jobObj).subscribe(response =>{
      console.log(response);
    });
  }
  createJobWithOtherWay(){

    //PLEASE look at "custom-form" component first and it's comment to understand the following.
    // I have explained all the code over there via proper comments




    //POST API always have a request body attached to it.
    // because as per standard POSt is associated for creation of the data.
    // so what data has to be created you need to send it using JSON format

    // so we are just creating a JSON obj variable named "reuest_body"
    // and then sending it along with our POST API call
    let request_body:any = {
      name:this.jobName,
      job:this.jobDescription
    };
    this._midtermHttpAPI.post('https://reqres.in/api/users',request_body).subscribe(response =>{
      console.log(response);
    });
  }


}
