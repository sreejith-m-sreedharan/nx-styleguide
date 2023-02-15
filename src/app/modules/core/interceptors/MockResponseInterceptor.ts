import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as $ENV } from 'src/environments/environment';
import { MocksConfig } from '../mocks/mocksConfig';
@Injectable()
export class MockResponseInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    httpRequest = this.rewriteUrlWithMock(httpRequest)
    return next.handle(httpRequest);
  }
  rewriteUrlWithMock(request:HttpRequest<any>){
        let mocks = MocksConfig.filter((mock:any)=> mock.url == request.url);
        const mock = mocks[mocks.length - 1];
        if(mock && !$ENV.production){
             return request.clone({url: mock.mock});
        }
        return request;
  }
}