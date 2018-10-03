import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {
  temp_response : any;
  temp_list : any = [];
  taskName:string;

  todoEdit: any;
  submitted:boolean = false;
  constructor(private _customService:DemoServiceService, private _router:Router) { }

  ngOnInit() {
    this.getAllContacts();
  }

  createTask(){
    let body:any = {};
    body.name = this.taskName;
    this._customService.createTask(body).subscribe(data=>{
      console.log(data);
      this.temp_response = data;
      this.temp_list.push(this.temp_response);
    });
  }

   getAllContacts() {
     this._customService.getAllContacts().subscribe(response =>{
       this.temp_response = response;
       this.temp_list = this.temp_response;
     });
  }

  deleteTodoItem(id: any) {
    this._customService.deleteContact(id).subscribe(response =>{
      console.log(response);
      this.temp_list = this.temp_list.filter(item => item._id != id);
    })
  }

  editTodoItem(id:any, updated_name:string) {
    let body : any = {};
    body.name = updated_name;
    this._customService.editContact(body, id).subscribe(response =>{
        console.log(response);
        this.submitted = false;
    })
  }

  showTaskDetail(data: any) {
    localStorage.setItem("task_name",data.name);
    localStorage.setItem("task_created",data.Created_date);
    localStorage.setItem("task_status",data.status);
    //localStorage.setItem("task_detail",data);
    // code will come over here
    // which will redirect to the task-detail page/component
    this._router.navigate(['/task-detail']);
  }

  showTaskDetailWithoutLocalStorage(data) {
    //this._qwerty.navigate(['/task-detail-id', data.id])
  }
}

