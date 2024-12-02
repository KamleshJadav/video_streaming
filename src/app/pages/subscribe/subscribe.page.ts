import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  constructor(
    public helper: HelperService,
    public  capAds: CapacitorAdsService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
