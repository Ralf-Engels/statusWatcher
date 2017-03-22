import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// Import the Service made under provider
import { StatusDataService } from '../../providers/status-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // Add the Provider as Propertie
  providers: [StatusDataService]
})
export class HomePage {
  
  public status;
  public application;

  // Add Service to Constructor
  constructor(public navCtrl: NavController, private statusData: StatusDataService) {
    
  }
  // define a Method to reach the Service 
  getStatus(){
    this.statusData.getStatus(this.application).subscribe(
      data => {
        this.status = data.json();
      },
      err => console.error(err),
      () => console.log('get Status von' + this.application + 'completed')
     );
  }
}
