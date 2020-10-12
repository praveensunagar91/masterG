import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DashboarddataService } from './dashboard/dashboarddata.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<DashboardResolverService> {

  constructor(private data:DashboarddataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.data.getFaculty().pipe(

       map( (x) => ({Tasks: x['data'], errormsg: ''})),

       catchError(error=>{
         return of({Tasks:null,errormsg:'Something went wrong'})
       })
     );



   }
}
