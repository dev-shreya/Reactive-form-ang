import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'form-comp',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
})
export class FormComponent implements OnInit {
  signupForm!: FormGroup;
  ageGroup = ['Below 18', 'Above 18'];
  defaultAgeGroup = 'Above 18';

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      gender: new FormControl('male', [Validators.required]),
      age: new FormControl('Above 18', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
