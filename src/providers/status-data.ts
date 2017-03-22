import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StatusData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StatusDataService {

  constructor(public http: Http) {
    console.log('Constructor: Hello StatusData Provider');
  }
  getStatus(application){
    let status = this.http.get('https://kundenportal-imt2.provinzial.com/vertrag/status');
    return status;
  }

}
