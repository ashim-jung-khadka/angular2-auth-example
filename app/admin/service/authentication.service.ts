/**
 * Created by ashimkhadka on 11/2/16.
 */

import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Rx";
import {ApiCaller} from "../common/apiCaller";
import {User} from "../model/user";

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private apiCaller: ApiCaller) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(user: User): Observable<boolean> {

        return this.apiCaller.post('auth', user)
            .map((response: Response) => {

                let token = response.json() && response.json().token;

                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({username: user.username, token: token}));
                    return true;

                } else {
                    return false;
                }
            });

    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}