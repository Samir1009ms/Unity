import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(true)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor() { }
}
