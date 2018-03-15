import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private localStorage = window.localStorage) {}

  public isAuthenticated(): boolean {
    const token = this.localStorage.getItem('token');
    return !!token;
  }
}
