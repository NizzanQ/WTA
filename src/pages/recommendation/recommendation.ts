import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the RecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommendation',
  templateUrl: 'recommendation.html',
})
export class RecommendationPage {
    public myPerson = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
underweight(){

  this.navCtrl.push('UnderweightPage');
}
normal(){}
overweight(){}
obese(){}

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref('/person/');
    personRef.on('value', personSnapshot => {
    this.myPerson = personSnapshot.val().bmitext;
    });
  }

}
