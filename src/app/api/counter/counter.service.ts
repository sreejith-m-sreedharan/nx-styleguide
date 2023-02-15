import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class CounterService {
    constructor(private http:HttpClient){

    }
    getCounter(){
        return this.http.get('http://myexample3.com');
    }
}