import { PageInterface } from './menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Nav} from 'ionic-angular';


export interface PageInterface{
  title: string;
  pageName : string;
  tabComponent?: any;
  index?: number;
  icon: string;

}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[]=[
    {
    title: 'Dashboard', 
    pageName: 'TabsPage', 
    tabComponent: 'DashboardPage',
    index:0,
    icon:'clipboard' 
    },
    {
      title: 'Meal', 
      pageName: 'TabsPage', 
      tabComponent:'FoodPage',
      index:1,
      icon:'pizza' 
      },
      {
        title: 'Recommendation', 
        pageName: 'TabsPage', 
        tabComponent: 'RecommendationPage',
        index:2,
        icon:'body' 
        },
        {
          title: 'Statistics', 
          pageName: 'TabsPage', 
          tabComponent: 'StatisticPage',
          index:3,
          icon:'stats' 
          },
    {
    title: 'Profile', 
    pageName: 'ViewprofilePage',
    index:null,
    icon:'home' 
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){

    let params = {};
    
    if(page.index){
      params = { tabIndex: page.index};
    }

    if(this.navCtrl.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    }

    else {
      this.nav.push('ViewprofilePage');
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

if(childNav)
{
  if(childNav.getSelected() && childNav.getSelected().root===page.tabComponent){
    return 'primary';
  }
  return;
} 

  if (this.nav.getActive() && this.nav.getActive().name===page.pageName){
    return 'primary';
  }
}}
