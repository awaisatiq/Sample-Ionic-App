import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare const require: any;
const multiavatar = require('@multiavatar/multiavatar');
import { NavController } from '@ionic/angular';
import { NavParamsService } from '../services/nav-params.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  avatar: any;

  wishListing : any;

  showClass = false;

  constructor(private sanitizer: DomSanitizer,private router: NavController,private navParams: NavParamsService) {
    this.wishListing = [
      {
        isLottie : false,
        src : 'assets/images/sample.gif',
        title : 'I want to be Millionair',
        style : {
          color1: '#3E065F',
          color2: '#700B97',
          color3: '#8E05C2',
          color4: '#ffffff'
        },
        gradientBorder : true,
        avatar: this.sanitizer.bypassSecurityTrustHtml(multiavatar(this.makeRandom(10))),
        wishID: this.makeRandom(10),
        showClass: false
      },
      {
        isLottie : true,
        src : '../assets/animations/sample.json',
        title : 'I want to be Millionair',
        style : {
          color1: '#950101',
          color2: '#3D0000',
          color3: '#FF0000',
          color4: '#ffffff'
        },
        gradientBorder : true,
        avatar: this.sanitizer.bypassSecurityTrustHtml(multiavatar(this.makeRandom(10))),
        wishID: this.makeRandom(10),
        showClass: false
      },
      {
        isLottie : true,
        src : '../assets/animations/sample.json',
        title : 'I want to be Millionair',
        style : {
          color1: '#F0A500',
          color2: '#334756',
          color3: '#ffffff',
          color4: '#000000'
        },
        gradientBorder : false,
        avatar: this.sanitizer.bypassSecurityTrustHtml(multiavatar(this.makeRandom(10))),
        wishID: this.makeRandom(10),
        showClass: false
      },
      {
        isLottie : true,
        src : '../assets/animations/sample.json',
        title : 'I want to be Millionair',
        style : {
          color1: '#88E0EF',
          color2: '#161E54',
          color3: '#FF5151',
          color4: '#161E54'
        },
        gradientBorder : false,
        avatar: this.sanitizer.bypassSecurityTrustHtml(multiavatar(this.makeRandom(10))),
        wishID: this.makeRandom(10),
        showClass: false
      }
    ];
    this.randomAvatar();
  }

  randomAvatar () {
    // this.avatar = this.sanitizer.bypassSecurityTrustHtml(multiavatar('amirkhan'));
    setInterval( () => {
      this.avatar = this.sanitizer.bypassSecurityTrustHtml(multiavatar(this.makeRandom(10)));
    },100);
  }

  makeRandom(lengthOfCode: number) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }

  gotoRoute(r){
    this.router.navigateForward(r);
  }

  openDetails(d){
    this.navParams.setData(d);
    this.gotoRoute('/detail');
  }

}
