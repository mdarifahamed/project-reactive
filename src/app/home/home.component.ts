import { Component } from '@angular/core';
import { FormControl,  FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  loginForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+$')]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] )



  })


  loginUser()
  {
    console.warn(this.loginForm.value)
  }

  get user()
  {
    return this.loginForm.get('username')
  }

  get passwordValid()
  {
    return this.loginForm.get('password')
  }


  get emailValid()
  {
    return this.loginForm.get('email')
  }

  get numberValid()
  {
    return this.loginForm.get('number')
  }


}
