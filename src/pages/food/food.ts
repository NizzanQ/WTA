import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
  public myPerson = 0;

  public t = 0;
 public y = 0;
 public x = 0;
 public total = 0
public m:Array<any>;
public b:Array<any>;
public f:Array<any>;
sum: number;
sumb: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const personRef: firebase.database.Reference = firebase.database().ref('/person/');
    personRef.on('value', personSnapshot => {
    this.myPerson = personSnapshot.val().tdee;
    
    });
  }

  calculate(m, b,f){

    if(m.length==undefined){
      m.length=1;
    } else if (b.length==undefined){
      b.length=1;
      
    } else if (f.length==undefined){
      f.length=1;
    }
    else{
    console.log(m.length);
    console.log(b.length);
    console.log(f.length);


    for(let i=0 ; i<m.length ; i++){
      
      this.t += parseInt(m[i])
    
    }

    for(let i=0 ; i<b.length ; i++){
      
      this.y += parseInt(b[i])
    
    }

    for(let i=0 ; i<f.length ; i++){
      
      this.x += parseInt(f[i])
    
    }

    this.total =this.t+this.y+this.x;

    console.log(this.total);
    
  }}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

}
