import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template : `
        <div *ngIf="hero">
              <h2>{{hero.name}} details!</h2>
              <div><label>id : </label> {{hero.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
              </div>
         <div>
    `
})
export class HeroDetailComponent {
    /* the @Input decorator tells Angular that this property is public 
    and available for binding by a parent component. Without @Input, 
    Angular refuses to bind to the property. */
    @Input() hero: Hero;
}