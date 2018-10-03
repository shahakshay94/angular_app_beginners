import {Component, OnInit} from '@angular/core';
import { Hero} from './heros';

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(){


  }


 title = 'Tour of Heros';
  first_hero:Hero = {
    id: 1,
    name: 'akshay1',
    superpower: 'wind'
  };


  second_hero:Hero = {
    id: 2,
    name: 'akshay2',
    superpower: 'wind'
  };

  third_hero:Hero = {
    id: 3,
    name: 'akshay3',
    superpower: 'wind'
  };
}
