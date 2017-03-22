import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StatusService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StatusService {

  constructor(public http: Http) {
    console.log('StatusService: Hello StatusService Provider');
  }

  getStatus(anwendung){
    let status = this.http.get('http://echo.jsontest.com/version/v1.0.0/dialogStatus/up/serviceStatus/up');
    return status;
    
  }

}
