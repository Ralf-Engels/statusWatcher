import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StatusService } from '../../providers/status-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StatusService]
})
export class HomePage {

  public status;
  public anwendung :string;

  constructor(public navCtrl: NavController, private statusService: StatusService) {
    
  }
    getStatus(){
      this.statusService.getStatus(this.anwendung).subscribe(
        data => {
          this.status = [data.json()];
        },
        err => console.error('Fehler aus StatusService:' + err),
        () => console.log('getStatus completed for ' + this.anwendung)
      )
    }

}
