import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-statistic',
  templateUrl: 'statistic.html',
})
export class StatisticPage {
    lineChart: any;
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  public myw = {};
  public myw1 = {};
  public myw2 = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref('/person/');
    personRef.on('value', personSnapshot => {
    this.myw = personSnapshot.val().w;
    this.myw1 = personSnapshot.val().w1;
    this.myw2 = personSnapshot.val().w2;

    });
      
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: ["Changes 1", "Changes 2", "Changes 3", "Changes 4", "Changes 5", "Changes 6", "Changes 7"],
          datasets: [
              {
                  label: "Weight Record",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [this.myw, this.myw1, this.myw2, 81, 56, 55, 40],
                  spanGaps: false,
              }
          ]
      }

  });

}
  }
