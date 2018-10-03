import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DemoServiceService} from "../demo-service.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  nameOfTheTask:string;

  constructor() {
    this.nameOfTheTask = localStorage.getItem("task_name");

  }

  ngOnInit() {

  }


}
