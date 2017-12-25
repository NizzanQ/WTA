import { SliderPageModule } from './../pages/slider/slider.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MenuPageModule } from '../pages/menu/menu.module';


export const config = {
  apiKey: "AIzaSyAh-fQ4qiLeGi5ZG43oJTXt1OuYJV9ICF8",
  authDomain: "fyp-ionic-6cfb4.firebaseapp.com",
  databaseURL: "https://fyp-ionic-6cfb4.firebaseio.com",
  projectId: "fyp-ionic-6cfb4",
  storageBucket: "fyp-ionic-6cfb4.appspot.com",
  messagingSenderId: "897846424889"

};

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SliderPageModule,
    MenuPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
