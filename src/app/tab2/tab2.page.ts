import { Component, OnInit  } from '@angular/core';
// import { InAppBrowserOriginal } from '@ionic-native/in-app-browser'
import { Platform, NavController } from '@ionic/angular';
// import { NavController ,Platform} from 'ionic/angular';

// import { InAppBrowserOriginal } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {


  // constructor(private iab: InAppBrowserOriginal,public platform: Platform) {
  //   platform.ready().then(() => {
  //    let browser = this.iab.create('https://jabar.digivla.id/panel5','_blank',{zoom:'no',location:'no'});
    
  //    browser.show();
  //  });

//   constructor(public navCtrl: NavController,private iab:  InAppBrowser /* 2 */) {}
// ngOnInit(){

//     // const browser = this.iab.create('https://jabar.digivla.id/panel5','_self',{location:'no'}); /*3*/

// }


  
//  }


//  export class Tab2Page implements OnInit {
//   private myTemplate: any = "";
//   constructor(private router: Router) { }

//   onKey(res:any){
//     console.log(res);
//     if (res.code == 'ArrowLeft'){
//       this.router.navigateByUrl('/tab1');  
//     }else 
//     if (res.code == 'ArrowRight'){
//       this.router.navigateByUrl('/tab3');  
//     }
//   }
//   ngOnInit() {
    
//   }

}

