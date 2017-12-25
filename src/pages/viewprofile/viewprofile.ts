import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-viewprofile',
  templateUrl: 'viewprofile.html',
})
export class ViewprofilePage {

  public myPerson = {};
  public bmi = {};
  public tdee = {};
  testRadioOpen: boolean;
  testRadioResult;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}
  
  
  ionViewDidLoad() {

    const personRef: firebase.database.Reference = firebase.database().ref('/person/');
    personRef.on('value', personSnapshot => {
   this.myPerson = personSnapshot.val();
   });
   
  }

  editProfile(){

    this.navCtrl.push('ProfilePage');  
    
    }

    home(){
      this.navCtrl.setRoot('TabsPage');
    }
}