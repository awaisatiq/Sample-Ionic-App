import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare const require: any;
const multiavatar = require('@multiavatar/multiavatar');

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  viewPassword = false;
  viewCPassword = false;

  avatar: any;

  intervalSub: any;

  constructor(private sanitizer: DomSanitizer) {
    this.randomAvatar();
   }

  ngOnInit() {
  }

  usernameChanged(e){
    clearInterval(this.intervalSub);
    if(e.length > 0){
      this.avatar = this.sanitizer.bypassSecurityTrustHtml(multiavatar(e));
    }else{
      this.randomAvatar();
    }
  }

  randomAvatar () {
    this.intervalSub = setInterval( () => {
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

}
