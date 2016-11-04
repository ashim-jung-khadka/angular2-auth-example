/**
 * Created by ashimkhadka on 11/2/16.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";
import {User} from "../model/user";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    private user = new User();

    model: any = {username: "admin", password: "admin"};
    loading = false;
    error = '';


    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {

        this.loading = true;
        this.user.username = this.model.username;
        this.user.password = this.model.password;

        this.authenticationService.login(this.user)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/dashboard/home']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
