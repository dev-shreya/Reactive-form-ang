import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  forbiddenEmails=['xyz@gmail.com','abc@gmail.com']

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData:new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email,this.onForbiddenEmails.bind(this)]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ])
      }),
     
      gender: new FormControl('male', [Validators.required]),
      age: new FormControl(this.defaultAgeGroup, [Validators.required]),
      hobbies:new FormArray([])
    })
 
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  onAddHobby(){
    const control= new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }
  onForbiddenEmails(control:FormControl):{[s:string]:boolean} | null{
    if(this.forbiddenEmails.indexOf(control.value) !== -1){
      return {'emailIsForbidden': true}
    }
    else{
     return null;
    }

  }
}
