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
  constructor(private _authservice: AuthService, private _toastService: ToastrService) {
  }
  login(): void{
    this._authservice.login();
    this._toastService.success('User Logged In successfully!')
  }

  logout(): void{
    this._authservice.logout();
    this._toastService.success('User Logged Out successfully!')

  }


}
