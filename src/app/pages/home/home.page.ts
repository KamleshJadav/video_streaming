import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/custom/models/category.model';
import { Videos } from 'src/app/custom/models/video.modal';
import { ApiService } from 'src/app/custom/services/api.service';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { GlobalService } from 'src/app/custom/services/global.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('bannerSliderEle')
  bannerSliderEle: ElementRef | undefined;
  bannerImageURl : string = this.api.assetsUrl + 'image/category/'
  videoImageURl : string = this.api.assetsUrl + 'video_thmb/'
  bannerSlider: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ]


  constructor(
    private router: Router,
    public helper: HelperService,
    private capAds: CapacitorAdsService,
    public gs: GlobalService,
    private api: ApiService,
  ) {
  }

  ngOnInit() {
    this.bannerSlider = this.helper.shuffleArray(this.bannerSlider);
    setTimeout(() => {
      this.capAds.showBannerAd();
    }, 100);
  }

  ngAfterViewInit() {
    if (this.bannerSliderEle?.nativeElement.swiper) {
      const swiper = this.bannerSliderEle.nativeElement.swiper;
      swiper.params.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
      };
      swiper.update();
      swiper.autoplay.start();
    }
  }
  async clickOnViewAll(params:any = {}) {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.viewAll],{queryParams:params})
  }

  async clickOnNotification() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.notification])
  }
  
  async clickOnPreviewClips(params:any={}) {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips],{queryParams:params})
  }
}

