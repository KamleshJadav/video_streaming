import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeMarket } from '@capacitor-community/native-market';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { HelperService } from 'src/app/custom/services/helper.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  bannerSlider: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ]

  constructor(
    public helper: HelperService,
    private location: Location,
    public router: Router,
    private capAds: CapacitorAdsService,
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

  clickOnLogout() {
    this.router.navigate([customurl.home])
  }

  goToMyProfile() {
    this.router.navigate([customurl.myProfile])
  }

  async goToWatchlist() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.watchlist])
  }
  goToSetting() {
    this.router.navigate([customurl.settings])
  }

  goToTermsCondition() {
    this.router.navigate([customurl.termConditions])
  }

  goToSupports() {
    this.router.navigate([customurl.supports])
  }
  goToSubscribe() {
    this.router.navigate([customurl.subscribe])
  }

  rateUs() {
    let appId = "id1622127552";

    if (Capacitor.getPlatform() === "android") {
      appId = "video.stream.com";
    }

    NativeMarket.openStoreListing({
      appId: appId,
    });
  }

  async shareUs() {
    try {
      await Share.share({
        title: 'Check out this amazing Video Stream app!',
        text: 'Watch and share videos easily with the Video Stream app. Download now!',
        url: 'https://apps.apple.com/app/id1622127552',
        dialogTitle: 'Share Video Stream App',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }
}
