import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

	heroes;
	selectedHero;

  	constructor(private model: Model) {
  		// this.heroes=this.model.getHeroes();//to jest blad-powinienem robic wszystko poprzez model.getHeroes() w widoku
  	}

  	ngOnInit() {
  	}

  	selectHero(hero):void {
  		this.selectedHero=hero;
  	}

    sortHeroesAsc() {
      this.model.sortHeroesAsc();
    }

    sortHeroesDesc() {
      this.model.sortHeroesDesc();
    }

    copyHeroes() {
      this.model.copyHeroes();
    }


}
