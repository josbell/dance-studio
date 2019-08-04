import { of, Observable, throwError } from 'rxjs';
import { delay, flatMap } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { UserApi } from 'ng-responsive-spa-lib';
import { UserInfo } from 'ng-responsive-spa-lib';


@Injectable({
  providedIn: 'root'
})
export class UserService implements UserApi {
  isLoggedIn = true;
  constructor() { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<boolean> {
    this.isLoggedIn = true;
    // return of(true).pipe(delay(2000));
    return of({}).pipe(
        delay(2000),
        flatMap(x => throwError('Invalid User Name and/or Password')
        )
      );
  }

  signOut(): Observable<boolean> {
    this.isLoggedIn = false;
    return of(true).pipe(delay(2000));
  }

  changePassword(username: string, oldPassword: string, newPassword: string): Observable<boolean> {
    return of(true).pipe(delay(2000));
  }

  register(userInfo: UserInfo): Observable<boolean> {
    this.isLoggedIn = true;
    return of(true).pipe(delay(2000));
  }

}
