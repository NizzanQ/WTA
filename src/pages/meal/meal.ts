import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html',
})
export class MealPage {

  public foodList:Array<any>;
  public f:Array<any>;
  public loadedFoodList :Array<any>;
  public foodRef:firebase.database.Reference;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.foodRef = firebase.database().ref('/Makanan-Masak/');

    this.foodRef.on('value', foodList => {
      let foods = [];
      foodList.forEach( food => {
        foods.push(food.val());
        return false;
      });
    
      this.foodList = foods;
      this.loadedFoodList = foods;
    });
  
  }

  initializeItems(): void {
    this.foodList = this.loadedFoodList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
   // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.foodList = this.foodList.filter((v) => {
    if(v.Nama && q) {
      if (v.Nama.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.foodList.length);

}
}
