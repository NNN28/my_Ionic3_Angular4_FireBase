import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ usercreds} from '../../models/interfaces/usercreds'
import{AuthProvider} from '../../providers/auth/auth'
import{SignupPage} from '../signup/signup'
import{WelcomuserPage} from '../welcomuser/welcomuser'
import{PasswordresetPage} from '../passwordreset/passwordreset'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authservice:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signin()
  {
this.authservice.login(this.credentials).then((res:any)=>{
if (!res.code)
this.navCtrl.push(WelcomuserPage);
//this.navCtrl.setRoot('TabsPage');
else
alert(res);
})


  }

  passwordreset()
  {
    this.navCtrl.push(PasswordresetPage);
    
      }
  signup()
  {
this.navCtrl.push(SignupPage);

  }


}
