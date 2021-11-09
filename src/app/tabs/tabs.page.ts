import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab;

  constructor(private navCtrl: NavController) {}
  
  tabClicked(e) {
    this.selectedTab = e.tab;
    
  }

  gotoRoute(r){
    this.navCtrl.navigateForward(r);
  }


}
