/**
 * Created by ashimkhadka on 10/1/16.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from "./admin/dashboard/home/home.component";
import {LoginComponent} from "./admin/login/login.component";
import {AuthGuard} from "./admin/common/auth.guard";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ]
    },

    // otherwise redirect to home
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);