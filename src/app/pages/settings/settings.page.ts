import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/custom/components/popover/popover.component';
import { appLanguage, downlodeNetowk, downlodeQuelity } from 'src/app/custom/services/customdata';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  appLanguageOption = appLanguage;
  downlodeNetowkOption = downlodeNetowk;
  downlodeQuelityOption = downlodeQuelity;


  settinsData: any = {
    appLanguage: appLanguage[0],
    downlodeNetowk: downlodeNetowk[0],
    downlodeQuelity: downlodeQuelity[0],
  }

  constructor(
    public helper: HelperService,
    private location: Location,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }


  async presentPopover(event: Event, options: any[], key: 'appLanguage' | 'downlodeNetowk' | 'downlodeQuelity') {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { options },
      event: event,
      mode:'ios',
      translucent: true,

    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    if (data) {
      this.settinsData[key]=data;
    }
  }
}
