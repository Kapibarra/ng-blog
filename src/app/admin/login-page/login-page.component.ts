import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required]),
    });
  }

  submit() {
    console.log();
    
    if (this.form.invalid) {
      return
    }
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
  }
}
