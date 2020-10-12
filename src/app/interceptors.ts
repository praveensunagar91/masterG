import {HttpInterceptor,HttpRequest,HttpHandler,HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { MaindataService } from './main/maindata.service';

@Injectable({
  providedIn:'root'
})
export class Interceptordemo implements HttpInterceptor {
auth:string;
refresh:string;
  constructor(private data:MaindataService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let auth=localStorage.getItem('token');
    let refresh=localStorage.getItem('refresh');
    const httpreq = req.clone({

      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'*/*',
        'authorization':`Bearer ${auth}`,
        'x-refresh-token': `${refresh}`,
        'apitype':'web',
        'apiversion':'1.0'
        }).set('Content-Type','application/json')

    });
    console.log(httpreq);
    // console.log(auth);
    // console.log(refresh);
    return next.handle(httpreq);
  }
}
