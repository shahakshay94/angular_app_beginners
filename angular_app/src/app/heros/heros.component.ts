import { Component, OnInit } from '@angular/core';
import {Hero} from '../heros';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroName: string;
  heroSuperPower: string;
  name_temp: string;
  selectedHero: Hero;
  // id_count: number = 0;
  heros: Hero[] = [
   {id: 1, name: 'ironman tony stark', superpower: 'wind'},
    {id: 2, name: 'black widow', superpower: 'fire'},
    {id: 3, name: 'Jhonny bravo', superpower: 'strength'}
 ];

 constructor() { }
  increaseCount(variable_hero: Hero) {
    this.name_temp = variable_hero.name;
    this.selectedHero = variable_hero;
  }
  ngOnInit() {
  }
  addHero() {
    let temp_heroName = this.heroName;
    let temp_super_power = this.heroSuperPower;
    let heroObj: Hero = {
      id: Date.now(),
      name: temp_heroName,
      superpower: temp_super_power
    };
    this.heros.push(heroObj);

  }

  deleteSuperHero(id:number){
   this.heros = this.heros.filter(item => item.id != id);
   //this.heros.pop();
  }
}
