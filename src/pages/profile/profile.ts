import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, LoadingController } from 'ionic-angular';
import firebase from 'firebase';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

public v: number;
public y: string;
public m: String = new Date().toISOString();
public x: string;
public z: string;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public toastCtrl: ToastController,
  public loadingCtrl: LoadingController) {
  }

  createPerson(age: number, w: number, h: number, g: string, loa: number, myDate: string): void {
    
    //insert weight
    const personRef: firebase.database.Reference = firebase.database().ref(`/person/`);

    personRef.set({ 
        
      bmi : age,
      hamwi : age,
      jdr : age,
      miller: age,
      bmitext : g,
      loatext : g,
      age: age, 
      h: h,
      g: g,
      loa: loa,
      tdee : age,
      bmr: age,
      myDate: myDate,
      w: w,
      w1: age,
      w2: age,
      w3: age,
      w4: age,
      w5: age,
      w6: age
    })

       //save weight data dulu
       if(myDate == this.m){
        personRef.update({
        w: w
      })
      }

      else if(myDate != this.m){
        this.x=myDate;
        personRef.update({
        w1: w
      })
      }

      if(this.x!=myDate){
        this.y=myDate;
        personRef.update({
          w2: w
      })}

    //text loa
    if(loa == 1.2 ){

      let loatext;

      loatext = "Little or No Exercise";
      personRef.update({ 
        loatext: loatext,
      })
    }

    else if(loa == 1.375){
      let loatext;

      loatext = "Exercise 1 - 3 days/week";
      personRef.update({ 
        loatext: loatext,
      })
    }

    else if(loa == 1.55){
      let loatext;

      loatext = "Exercise 3 - 5 days/week";
      personRef.update({ 
        loatext: loatext,
      })
    }

    else if(loa == 1.725){
      let loatext;

      loatext = "Exercise 6 - 7 days/week";
      personRef.update({ 
        loatext: loatext,
      })
    }

    else {
      let loatext;

      loatext = "Heavy Exercise";
      personRef.update({ 
        loatext: loatext,
      })
    }

    //calculate BMI
    let bmi;
    let height = (h/100)*(h/100);
    bmi = w/height;

    //category of bmi
    if(bmi < 18.49 ){

      let bmitext = "Underweight";

      personRef.update({ 
        bmitext : bmitext
      })
      
    }
        else if (bmi >= 18.50 && bmi <= 24.99 ){

      let bmitext = "Normal";

      personRef.update({ 
        bmitext : bmitext
      })
    }
    else if (bmi >= 25.00 && bmi <= 30.00 ){

      let bmitext = "Overweight";

      personRef.update({ 
        bmitext : bmitext 
      })
    }

    else if(bmi >= 30.00){

      let bmitext = "Obese";

      personRef.update({ 
        bmitext : bmitext
      })
    }

    else {
       let bmitext = "ERROR";

      personRef.update({ 
        bmitext : bmitext
      })
    }
    

//G. J. Hamwi Formula

if(g=="MALE"){
let hamwi;
if(h/100>1.524){
let feet = (h/100)*3.28084;
    feet = feet-5;
let inch = feet*12;

hamwi = 48 + 2.7*inch;
}

personRef.update({ 
hamwi : hamwi

})

}

else 
{
  let hamwi;
  if(h/100>1.524){
  let feet = (h/100)*3.28084;
      feet = feet-5;
  let inch = feet*12;
  
  hamwi = 45.5 + 2.2*inch;
  }

  personRef.update({ 
    hamwi : hamwi
    
    })


}
//G. J. Hamwi Formula ends

// J. D. Robinson Formula (1983)
if(g=="MALE"){
  let jdr;
  if(h/100>1.524){
  let feet = (h/100)*3.28084;
      feet = feet-5;
  let inch = feet*12;
  
  jdr = 52 + 1.9*inch;
  }
  
  personRef.update({ 
  jdr : jdr
  
  })
  
  }
  
  else 
  {
    let jdr;
    if(h/100>1.524){
    let feet = (h/100)*3.28084;
        feet = feet-5;
    let inch = feet*12;
    
    jdr = 49 + 1.7*inch;
    }
  
    personRef.update({ 
      jdr : jdr
      
      })
  
  
  }
  //J. D. Robinson Formula (1983) ends

//D.R. Miller Formula (1983)
if(g=="MALE"){
  let miller;
  if(h/100>1.524){
  let feet = (h/100)*3.28084;
      feet = feet-5;
  let inch = feet*12;
  
  miller = 56.2 + 1.41*inch;
  }
  
  personRef.update({ 
  miller : miller
  
  })
  
  }
  
  else 
  {
    let miller;
    if(h/100>1.524){
    let feet = (h/100)*3.28084;
        feet = feet-5;
    let inch = feet*12;
    
    miller = 53.1 + 1.36*inch;
    }
  
    personRef.update({ 
      miller: miller
      
      }) 
  }

    //calculate TDEE
    if (g == "FEMALE")
    {
      let bmr;
      let tdee;
      
      bmr = 665 + (9.6* w)+(1.8*h)-(4.7*age);
      tdee = loa*bmr;

      personRef.update({ 

        tdee : tdee,
        bmr: bmr
  
      })
      //female
    }

    else
    
    {
      //male
            let bmr;
            let tdee;
            
            bmr = 66 + (13.7* w)+(5*h)-(6.8*age);
            tdee = loa*bmr;

            personRef.update({ 

              tdee : tdee,
              bmr: bmr
        
            })

          }

      const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  cancel(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
