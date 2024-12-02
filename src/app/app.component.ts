import { Component, Renderer2 } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CapacitorAdsService } from './custom/services/capacitor-ads.service';
import { AlertController, Platform } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { HelperService } from './custom/services/helper.service';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { NativeMarket } from '@capacitor-community/native-market';
import { ScreenOrientation } from '@capacitor/screen-orientation';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  bannerMargin = 0; // Default margin
  networkAlert: HTMLIonAlertElement | null = null;
  constructor(
    private adsService: CapacitorAdsService,
    private helper: HelperService,
    private platform: Platform,
    private alertCtrl: AlertController
  ) {
    this.adsService.bannerVisible.subscribe((isVisible) => {
      this.bannerMargin = this.platform.is('ios') && isVisible ? 50 : 0;
    });
    this.monitorNetwork();
    this.screenOrientation();
    try {
      this.helper.getAppData().then((resp: any) => {
        console.log(resp)
        this.helper.app_data = resp.result;
        this.helper.app_version = resp.result.version;

        App.getInfo().then((resp: any) => {
          if (this.helper.app_version != resp.version) {
            this.updateAvailable();
          }
        })
      })
    } catch (error) {
    }

  }

  async screenOrientation() {
    try {
      await ScreenOrientation.unlock();
      await ScreenOrientation.lock({ orientation: 'portrait' });
    } catch (error) {
      
    }
 
  }
  async monitorNetwork() {
    const status = await Network.getStatus();
    this.handleNetworkChange(status.connected);

    Network.addListener('networkStatusChange', (status) => {
      this.handleNetworkChange(status.connected);
    });
  }

  async handleNetworkChange(isConnected: boolean) {
    if (!isConnected) {
      if (!this.networkAlert) {
        this.networkAlert = await this.alertCtrl.create({
          header: 'No Internet',
          message: 'Please check your network connection.',
          buttons: ['OK'],
          backdropDismiss: false,
        });
        await this.networkAlert.present();
      }
    } else if (this.networkAlert) {
      await this.networkAlert.dismiss();
      this.networkAlert = null;
    }
  }

  async updateAvailable() {
    const alert = await this.alertCtrl.create({
      header: 'Update Available',
      message: 'A new version of the app is available. Please update to the latest version.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Update',
          handler: () => {

            let appId = "id1622127552";

            if (Capacitor.getPlatform() === "android") {
              appId = "video.stream.com";
            }

            NativeMarket.openStoreListing({
              appId: appId,
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
