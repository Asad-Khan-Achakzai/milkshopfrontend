import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AlertService } from '../alert.service';
@Injectable({
  providedIn: 'root'
})
export class IsAdmin implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private alertService: AlertService) {}

  async canActivate() {
    //const token = await this.authService.getTokenFromStorage();
    if (!await this.authService.isAdmin()) {
      this.alertService.showFalure("You are not Admin");
      return false
    } else {
      return true;
    }
  }
}
