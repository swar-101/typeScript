import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
/* 
   Simple variable declaration 
*/

// hero = 'Windstorm'; 

/* result: the index page will display Windstorm */

/* 
   After declaring an interface, the name won't display Windstorm 
   because we changed hero from a string to an object 
*/

  // hero: Hero = {
  //   id:  1,
  //   name: 'Windstorm'
  // };

heroes : Hero[] = [];

// heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
//

ngOnInit(): void {
  // this.getHeroes();
}

// adding a private hero service to the component constructor
  
constructor(private heroService: HeroService) {}

// Plain old method - without observable
// getHeroes(): void {
//   this.heroes = this.heroService.getHeroes();
// }

/*
  O B S E R V A B L E S

  Observables are a technique for 
  - event handling, 
  - asynchronous programming and 
  - handling multiple values
  
  'the observer pattern' is a software design pattern in which 
  an object called the subject, maintains a list of its 
  dependents called observers, and notifies them automatically of state 
  changes.
  this pattern is similar but not identical to the 'publish subscribe' 
  design pattern.

  Observables are declarative - that is, you define a function for
  publishing values, but it is not executed until a consumer subscribes 
  to it.

  The subscribed consumer then recieves notifications until the function
  completes, or until they unsubscribe.

  An observable can deliver multiple values of any type - 
  - literals 
  - messages 
  - events
  depending on the context.
  
  The API for recieving values is the same weather the value are delivered
  sychronously or asyncronously - because the setup and teardown logic
  are both handled by the Observable, your application code only needs to
  worry about subscribing and when done unsubscribing.
  Whether the stream was keystrokes, an HTTP response, or an interval timer,
  the interface for listening to value and stopping listening is the same.

  Observables are extensively used extensively within Angular.

  Basic usage and terms:

  As a publisher, 
  you create an Observable instance that defines a subscriber 
  function. 
  This is the function that is executed when a consumer calls
  the subscribe() method by passing an observer.

  This is a JavaScript object that defines the handlers for the notifications 
  you recieve. The subscribe() call returns a Subscription object that has an 
  unsubscribe() method, which you call to stop recieving notifications.
*/

getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }

} 