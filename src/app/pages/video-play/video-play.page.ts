import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.page.html',
  styleUrls: ['./video-play.page.scss'],
})
export class VideoPlayPage implements OnInit {
  similarMovies: any = [
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/5.jpg' },
  ]
  constructor(
    private location: Location,
    public helper: HelperService,
    public router: Router,
    private capAds: CapacitorAdsService,
  ) { }

  ngOnInit() {
    this.similarMovies = this.helper.shuffleArray(this.similarMovies);
  }


  ionViewWillEnter() {
    this.capAds.hideBannerAd();
  }

  goBack() {
    this.location.back();
  }

  async clickOnPreviewClips() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips])
  }

  ionViewDidEnter() {

    const videoElement = document.getElementById('videoPlayer') as HTMLVideoElement;
    if (videoElement) {
      videoElement.load();
      videoElement.currentTime = 0;
      videoElement.addEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
    }
  }

  ionViewWillLeave() {
    this.capAds.resumeBannerAd();
    const videoElement = document.getElementById('videoPlayer') as HTMLVideoElement;
    if (videoElement) {
      videoElement.removeEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
    }
  }

  async handleFullscreenChange() {
    try {
      const videoElement = document.getElementById('videoPlayer') as HTMLVideoElement;
      await ScreenOrientation.unlock();
    
      if (document.fullscreenElement === videoElement) {
        await ScreenOrientation.lock({ orientation: 'landscape' });
      } else {
        await ScreenOrientation.lock({ orientation: 'portrait' });
      }
    } catch (error) {
      
    }
   
  }
}
