import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { ApiService } from 'src/app/custom/services/api.service';
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
  videoURl: string = this.api.assetsUrl + 'video/'
  videoImageURl: string = this.api.assetsUrl + 'video_thmb/'
  videoData: any = {};
  video_id: any = '';
  constructor(
    private location: Location,
    public helper: HelperService,
    public router: Router,
    public api: ApiService,
    public route: ActivatedRoute,
    private capAds: CapacitorAdsService,
  ) { }

  ngOnInit() {
    this.similarMovies = this.helper.shuffleArray(this.similarMovies);
    this.route.queryParamMap.subscribe(params => {
      if (params.has('video_id')) {
        this.video_id = params.get('video_id');
        this.getVideoById();
      }
    });
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


  loadVideo() {
    const videoElement = document.getElementById('videoPlayer') as HTMLVideoElement;
    if (videoElement) {
      videoElement.load();
      videoElement.currentTime = 0;
      videoElement.addEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
    }
  }

  ionViewDidEnter() {
    this.loadVideo();

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

  getVideoById() {
    this.api.getVideoById(this.video_id).subscribe((response: any) => {
      if (response.success) {
        this.videoData = response.data;
        this.videoImageURl += this.videoData.thumb_name
        this.videoURl += this.videoData.video;
        this.loadVideo();
      }
    }, (error) => {
      console.error('Error fetching videos:', error);
    });
  }
}
