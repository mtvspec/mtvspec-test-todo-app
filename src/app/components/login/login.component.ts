import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAuth from '../../state/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInFly$: Observable<boolean> | null = null;
  formModel: {[key in keyof Login]: FormControl} = {
    username: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required,
    ]),
  };

  form: FormGroup = new FormGroup(this.formModel);

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.loginInFly$ = this.store.select(fromAuth.getLoginInFly);
    localStorage.clear();
  }

  login(): void {
    if (this.form.valid) {
      this.store.dispatch(new fromAuth.Login(this.form.value));
    }
  }

}

type Login = {
  username: string;
  password: string;
};
