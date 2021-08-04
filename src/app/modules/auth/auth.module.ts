import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from '../../state/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
  ]
})
export class AuthModule { }
