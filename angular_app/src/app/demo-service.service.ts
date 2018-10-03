import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  //API Url on which your Nodejs and MongoDB is running
  apiURL = 'http://localhost:3000/tasks';


  // It makes logical sense that we have one file/service in which we have listed down all our APIs
  // which is going to be called by different compoenents.

  // So we created a custom service, which is a reusable component, in which we have wrote down all the
  //APIs of any backend NODEJS application.
  // So to call an API we need to import "HttpClient" and initialize it in the constructor.
  constructor(private _customHttpService: HttpClient) {

  }
  //Now you create functon with appropriate names for each API you have created in your NODEJS and
  // MongoDB application and inside that function you JUST call you API.

  //Assume we have Contact List Application, and assume we have some APIs for it, which we
  // hypothetically created using NodeJS and MongoDB

  // this function will call the GET API which is responsible for getting all the conatct list
  getAllContacts() {

    return this._customHttpService.get(this.apiURL);
  }
  getOneTask(id:any) {
    return this._customHttpService.get(this.apiURL + "/" + id);
  }
  createTask(request_body:any){

    return this._customHttpService.post(this.apiURL, request_body);
  }
  editContact(request_body:any, id:any) {
    return this._customHttpService.put(this.apiURL + "/" + id, request_body);
  }
  deleteContact(id:any) {
    return this._customHttpService.delete(this.apiURL + "/" + id);
  }
}



