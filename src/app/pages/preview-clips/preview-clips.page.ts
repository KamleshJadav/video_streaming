import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/custom/models/video.modal';
import { ApiService } from 'src/app/custom/services/api.service';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { GlobalService } from 'src/app/custom/services/global.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-preview-clips',
  templateUrl: './preview-clips.page.html',
  styleUrls: ['./preview-clips.page.scss'],
})
export class PreviewClipsPage implements OnInit {
  actorImageURl: string = this.api.assetsUrl + 'image/actor/'
  videoImageURl: string = this.api.assetsUrl + 'video_thmb/'
  videoData: any = {}
  starCast: any = []
  seo_teg: any = []
  showFullText: boolean = false;

  toggleText() {
    this.showFullText = !this.showFullText;
  }
  reviews = [
    {
      image: 'assets/images-temp/11.jpg',
      name: 'Vin Diesel',
      review: 'This app is amazing! Highly recommended.',
      date: '2024-11-20',
      state: 'California',
    },
    {
      image: 'assets/images-temp/12.jpg',
      name: 'Michelle Rodriguez',
      review: 'I love the design and usability.',
      date: '2024-11-18',
      state: 'Texas',
    },
    {
      image: 'assets/images-temp/13.jpg',
      name: 'Jason Statham',
      review: 'Great features and easy to navigate.',
      date: '2024-11-15',
      state: 'New York',
    },
    {
      image: 'assets/images-temp/14.jpg',
      name: 'Scott Eastwood',
      review: 'Could use some improvements, but overall good.',
      date: '2024-11-10',
      state: 'Florida',
    },
    {
      image: 'assets/images-temp/15.jpg',
      name: 'Elsa Pataky',
      review: 'Very helpful and convenient to use!',
      date: '2024-11-08',
      state: 'Washington',
    },
    {
      image: 'assets/images-temp/16.jpg',
      name: 'Ludacris',
      review: 'Fantastic app for daily use.',
      date: '2024-11-06',
      state: 'Georgia',
    },
    {
      image: 'assets/images-temp/17.jpg',
      name: 'Dwayne Johnson',
      review: 'Solid performance and great design!',
      date: '2024-11-03',
      state: 'Hawaii',
    },
    {
      image: 'assets/images-temp/18.jpg',
      name: 'Charlize Theron',
      review: 'Intuitive and beautifully designed app.',
      date: '2024-10-30',
      state: 'Nevada',
    },
    {
      image: 'assets/images-temp/19.jpg',
      name: 'Tyrese Gibson',
      review: 'Absolutely love this app. Well done!',
      date: '2024-10-28',
      state: 'Illinois',
    },
  ];
  video_id: any = '';
  constructor(
    private location: Location,
    public helper: HelperService,
    public api: ApiService,
    public gs: GlobalService,
    private router: Router,
    private capAds: CapacitorAdsService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('video_id')) {
        this.video_id = params.get('video_id');
        this.getVideoById();
      }
    });
  }

  goBack() {
    this.location.back();
  }

  async goToPlayVideo() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.playVideo], { queryParams: { video_id: this.video_id } })
  }

  getVideoById() {
    let body = {
      video_id: this.video_id,
      user_id: 1, // changes are available 
    }
    this.api.getVideoById(body).subscribe((response: any) => {
      if (response.success) {
        this.videoData = response.data;
        this.starCast = this.videoData.actors;
        this.seo_teg = this.videoData.seo_teg;
      }
    }, (error) => {
      console.error('Error fetching videos:', error);
    });
  }

  toggleWishlist(video: Video) {
    let body = {
      video_id: this.video_id,
      user_id: 1, // changes are available
    }
    this.api.wishListToggle(body).subscribe((response: any) => {
      if (response.success) {
          this.gs.showSuccess(response.message);
          video.isInWishlist = response.isInWishlist
      }
    }, (error) => {
      console.error('Error fetching videos:', error);
    });
  }

  
}
