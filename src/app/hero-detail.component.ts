import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl : './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    /* the @Input decorator tells Angular that this property is public 
    and available for binding by a parent component. Without @Input, 
    Angular refuses to bind to the property. */
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private Location: Location
    ){}

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) =>
            this.heroService.getHero(+params['id']))
                .subscribe(hero => this.hero = hero);
        
    }
    goBack(): void {
        this.Location.back();
    }

}