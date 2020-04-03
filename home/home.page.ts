import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private loading;

  constructor(public navCtrl: NavController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController) {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Facebook ยังใช้งานไม่ได้ครับ',
      //subHeader : 'Sub Alert',
      message: 'ขออภัยด้วยครับ',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {

  }

  async showLoading(){
    let loading = await this.loadingCtrl.create({
      message: "Loading ....",
      duration: 500,
      showBackdrop: false,
      spinner: "crescent"
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.navigateForward("/menu");
    }, 500)
  
  }

  Gotoregister() {
    this.navCtrl.navigateForward("/register");
  }
  

 
}