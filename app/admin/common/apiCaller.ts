/**
 * Created by ashimkhadka on 11/2/16.
 */

import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ApiCaller {

    private baseApiURL = 'http://localhost:8080/share-it/';
    private contentTypeHeader = new Headers({'Content-Type': 'application/json'});
    private tokenTitle = "Authorization";

    constructor(private http: Http) {
    }

    get(url: string, token?: string): Observable<Response> {

        return this.http.get(this.baseApiURL + url, this.getHeader(token));
    }

    post(url: string, body: any, token?: string): Observable<Response> {

        return this.http.post(this.baseApiURL + url, body, this.getHeader(token));
    }

    delete(url: string, token?: string): Observable<Response> {

        return this.http.delete(this.baseApiURL + url, this.getHeader(token));
    }

    private getHeader(token: string): RequestOptions {

        if (token && token.length > 0) {
            this.contentTypeHeader.append("Authorization", token);
        }

        return new RequestOptions({headers: this.contentTypeHeader});

    }

}