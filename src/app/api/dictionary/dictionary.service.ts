import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import { environment as $ENV } from 'src/environments/environment';
@Injectable()
export class DictionaryService {
    
    constructor(private http:HttpClient){

    }
    getKindleWords(){
        return this.http.get('http://myKindle.dictionary.online');
    }
    getDownloadedWords(){
        return this.http.get('http://my.dictionary.online');
    }
    getMeaning(lang:string,word:string){
        let headers = new HttpHeaders();
        headers = headers.append('app_id',$ENV.oxfordAPIKey);
        headers = headers.append('app_key',$ENV.oxfordAPIappId);
        console.log("headers ",headers);

        return this.http.get(`${$ENV.oxfordAPIBaseUrl}/entries/${lang}/${word}`,{headers:headers} )
    }
}
