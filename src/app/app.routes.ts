import { Router, Routes } from '@angular/router';
import { Page1Component } from './Routing/page1/page1.component';
import { Page2Component } from './Routing/page2/page2.component';
import { Page3Component } from './Routing/page3/page3.component';
import { NotFoundPageComponent } from './Routing/not-found-page/not-found-page.component';
import { inject } from '@angular/core';
import { AuthService } from './Routing/auth.service';


export const AuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if(!auth.getIsAuthenticated()) {
        router.navigateByUrl('')
        return false
    }
    return true
}
export const routes: Routes = [
    { path: '', component: Page1Component },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
    { path: 'page3', component: Page3Component, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundPageComponent }
];
