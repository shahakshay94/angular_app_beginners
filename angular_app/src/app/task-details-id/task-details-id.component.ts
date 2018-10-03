import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DemoServiceService} from "../demo-service.service";

@Component({
  selector: 'app-task-details-id',
  templateUrl: './task-details-id.component.html',
  styleUrls: ['./task-details-id.component.css']
})
export class TaskDetailsIdComponent implements OnInit {
  temp_response:any;
  constructor(private route: ActivatedRoute, private _customService : DemoServiceService) {
   this.getTaskDetails();
  }

  ngOnInit() {
  }

  public getTaskDetails() {
    this._customService.getOneTask(this.route.snapshot.params['id']).subscribe(response =>{
      this.temp_response = response;
    });
  }
}
