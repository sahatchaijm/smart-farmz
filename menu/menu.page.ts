import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private loading;

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async showLoading() {
    let loading = await this.loadingCtrl.create({
      message: "Loading ....",
      duration: 500,
      showBackdrop: false,
      spinner: "crescent"
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.navigateRoot("/home");
    }, 500)
  }

  Gotodevelop() {
    this.navCtrl.navigateForward("/develop");
  }

  Gotosoil() {
    this.navCtrl.navigateForward("/soil");
  }

  Gotocontact() {
    this.navCtrl.navigateForward("/contact");
  }

  Gotosetting() {
    this.navCtrl.navigateForward("/beck");
  }


}