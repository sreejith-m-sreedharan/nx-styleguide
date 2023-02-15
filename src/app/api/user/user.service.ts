import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http:HttpClient){

    }
    getUsers(){
        return this.http.get('http://myexample3.com');
    }
}