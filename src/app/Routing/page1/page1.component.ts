import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { provideToastr } from 'ngx-toastr';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports:[ToastrModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',

})
export class Page1Component {

  /**
   *
   */
  private authService: AuthService;
  private toastService: ToastrService
  constructor(authservice: AuthService, toastService: ToastrService) {
   this.authService = authservice;
   this.toastService = toastService;
  }
  login(): void{
    this.authService.login();
    this.toastService.success('User Logged In successfully!')
  }

  logout(): void{
    this.authService.logout();
    this.toastService.success('User Logged Out successfully!')

  }


}
