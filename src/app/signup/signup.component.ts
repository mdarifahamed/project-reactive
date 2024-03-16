import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements  OnInit{

  form!:FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+$')]),
      email:new FormControl('', [Validators.required, Validators.email]),
      phone:new FormControl('', [Validators.required, ]),
      password:new FormControl('', [Validators.required, Validators.email]),
      
    });
    
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onclick(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
