import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Model } from '../model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

	heroes: Hero[];

  	constructor(private model: Model) { 
  		console.log('constructor dash');
  		// this.getBestHeroes();
  	}

  	ngOnInit() {
  		console.log('init dash');
  		this.getBestHeroes();
  	}

  	getBestHeroes() {
  		console.log('get best');
  		var heroes=this.model.getHeroes().slice(0);
  		heroes.sort(function(a,b){return  b.points - a.points;})
  		this.heroes = heroes;
  	}

    //jak zrobic zeby nie trzeba bylo przycisku refresh?
  	

}
