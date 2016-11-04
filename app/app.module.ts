/**
 * Created by ashimkhadka on 11/2/16.
 */

import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';

import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";

import {HomeComponent} from "./admin/dashboard/home/home.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./admin/login/login.component";
import {UserService} from "./admin/service/user.service";
import {AuthenticationService} from "./admin/service/authentication.service";
import {AuthGuard} from "./admin/common/auth.guard";
import {ApiCaller} from "./admin/common/apiCaller";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        ApiCaller
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}