import { Component } from '@angular/core';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormComponent],
})
export class AppComponent {}
