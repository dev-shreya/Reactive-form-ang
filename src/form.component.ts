import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'form-comp',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], // Ensure this path is correct
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor,NgIf],
})
export class FormComponent implements OnInit {
  signupForm!: FormGroup;
  ageGroup = ['Below 18', 'Above 18'];
  defaultAgeGroup = 'Above 18';

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData:new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ])
      }),
     
      gender: new FormControl('male', [Validators.required]),
      age: new FormControl(this.defaultAgeGroup, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
