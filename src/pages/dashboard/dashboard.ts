import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
 
  public myPerson = {};

  
  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {}
  
  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref('/person/');
    personRef.on('value', personSnapshot => {
    this.myPerson = personSnapshot.val();
    
    });
    
    
  }

  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('SliderPage');
    });
  }

}
