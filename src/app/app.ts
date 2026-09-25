import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { counterStore } from './counter.store';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  template: `
    <div style="padding: 20px; text-align: center;">
      <h1>Angular + Zustand</h1>
      <h2>Count: {{ count() }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-zustand-example');

  count = signal(counterStore.getState().count);

  constructor() {
    counterStore.subscribe(state => {
      this.count.set(state.count);
    })
  }

  increment () {
    counterStore.getState().increment();
  }

  decrement () {
    counterStore.getState().decrement();
  }
}
