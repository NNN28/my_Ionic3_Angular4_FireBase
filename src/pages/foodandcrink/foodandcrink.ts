import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodandcrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodandcrink',
  templateUrl: 'foodandcrink.html',
})
export class FoodandcrinkPage {
  offert_items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  /*  this.http.get('https://randomuser.me/api/?results=10')
    .map(res => res.json())
    .subscribe(res => {
      this.offert_items = res.results;
    }, (err) => {
      alert("failed loading json data");
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodandcrinkPage');
  }

}
