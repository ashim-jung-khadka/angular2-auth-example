/**
 * Created by ashimkhadka on 11/2/16.
 */

import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService} from "./authentication.service";
import {User} from "../model/user";
import {ApiCaller} from "../common/apiCaller";

@Injectable()
export class UserService {

    constructor(private apiCaller: ApiCaller,
                private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        return this.apiCaller.get('users', this.authenticationService.token)
            .map((response: Response) => response.json());

    }
}