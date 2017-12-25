import { SliderPage } from './../pages/slider/slider';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import {Component, ViewChild} from '@angular/core';
import {App, Platform, NavParams} from 'ionic-angular';
import { MenuPage } from '../pages/menu/menu';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage: any = 'TabsPage';


  constructor(public platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen,
    afAuth: AngularFireAuth) {
    
    const authObserver = afAuth.authState.subscribe( user => {
      if (!user) { 
        this.rootPage = SliderPage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = MenuPage;
        authObserver.unsubscribe();
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

