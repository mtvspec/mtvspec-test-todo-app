import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../state/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  isAuthenticated$: Observable<boolean> | null = null;
  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(fromAuth.getIsAuthenticated);
  }

  logout(): void {
    this.store.dispatch(new fromAuth.Logout());
  }

  ngOnDestroy(): void {}

}
