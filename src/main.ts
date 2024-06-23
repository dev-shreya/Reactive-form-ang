import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  template: `
   <app-comp/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
