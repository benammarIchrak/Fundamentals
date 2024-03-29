import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  getIsAuthorized() {
    return false;
  }
}