import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HEROES} from '../Mock-Herous';

@Component({
  selector: 'app-herous',
  templateUrl: './herous.component.html',
  styleUrls: ['./herous.component.css']
})
export class HerousComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
