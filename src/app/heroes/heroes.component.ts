import { Component, OnInit, ElementRef } from '@angular/core';
import { Hero } from '../../Hero';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heros: Hero[] = HEROES;
  selectedHero: Hero;
  hasFontStyle: boolean = true;
  hasFontColor: boolean = true;
  styleAndFont: string = 'font-style font-color-2';

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.el.nativeElement.querySelector('.test-class');
    this.el.nativeElement.textContent()
  }

  onSave(event?: MouseEvent ): void {
    const evt:string = (<HTMLElement>event.target).textContent;
    // <HTMLElementEventMap>
    (<HTMLElement>event.target)
    alert(evt);
  }
}
