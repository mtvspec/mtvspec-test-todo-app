import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './shared/modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';

import { TaskEffects } from './state/task/task.effects';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';

import { TaskModule } from './modules/task/task.module';
import {metaReducers, reducers} from './reducers';
import {AuthModule} from './modules/auth/auth.module';
import {AuthEffects} from './state/auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TaskListComponent,
    NewTaskComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }) : [],
    EffectsModule.forRoot([
      AuthEffects,
      TaskEffects,
    ]),
    AppRoutingModule,
    AuthModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
