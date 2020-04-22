import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthActions, AuthSelectors, RootStoreState } from "../../../root-store";
import { Login } from "../../models/Login.model";

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.error$ = this.store$.select(AuthSelectors.selectAuthError);
    this.isLoading$ = this.store$.select(AuthSelectors.selectAuthLoading);
  }

  handleLogin(credentials: Login) {
    this.store$.dispatch(AuthActions.LOGIN_REQUEST({ credentials }));
  }

}