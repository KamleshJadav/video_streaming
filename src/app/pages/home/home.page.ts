import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('bannerSliderEle')
  bannerSliderEle: ElementRef | undefined;
  bannerSlider: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ]

  categorySlider: any = [
    { image: 'assets/images-temp/6.jpg', text: 'Adventure' },
    { image: 'assets/images-temp/7.jpg', text: 'Thriller' },
    { image: 'assets/images-temp/8.jpg', text: 'Comedy' },
    { image: 'assets/images-temp/9.jpg', text: 'Drama' },
    { image: 'assets/images-temp/6.jpg', text: 'Action' },
  ];

  continueSlider: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ]

  webSeries: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ]

  moviesSlider: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ]

  traddingSlider: any = [
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
  ) {
  }

  ngOnInit() {
    this.bannerSlider = this.helper.shuffleArray(this.bannerSlider);
    this.categorySlider = this.helper.shuffleArray(this.categorySlider);
    this.continueSlider = this.helper.shuffleArray(this.continueSlider);
    this.webSeries = this.helper.shuffleArray(this.webSeries);
    this.moviesSlider = this.helper.shuffleArray(this.moviesSlider);
    this.traddingSlider = this.helper.shuffleArray(this.traddingSlider);
    setTimeout(() => {
      this.capAds.showBannerAd();
    }, 100);
  }


  ngAfterViewInit() {
    if (this.bannerSliderEle?.nativeElement.swiper) {
      const swiper = this.bannerSliderEle.nativeElement.swiper;
      swiper.params.autoplay = {
        delay: 2500,
        disableOnInteraction: false,
      };

      swiper.update();
      swiper.autoplay.start();
    }
  }

  async clickOnViewAll() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.viewAll])
  }
  async clickOnNotification() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.notification])
  }

  async clickOnPreviewClips() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips])
  }
}

