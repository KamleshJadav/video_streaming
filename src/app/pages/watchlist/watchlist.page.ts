import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videos } from 'src/app/custom/models/video.modal';
import { ApiService } from 'src/app/custom/services/api.service';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { GlobalService } from 'src/app/custom/services/global.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {

  videoImageURl: string = this.api.assetsUrl + 'video_thmb/'
  selectedType: any = 'all';
  mediaData: Videos = [];
  filteredMediaData: Videos = [];
  constructor(
    public helper: HelperService,
    public gs: GlobalService,
    public api: ApiService,
    private location: Location,
    private capAds: CapacitorAdsService,
    public router: Router,
    
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
  ionViewDidEnter() {
    this.getAllWishList()
  }
  getAllWishList() {
    let body = {
      user_id: 1, // changes are available
    }
    this.api.getAllWishList(body).subscribe((response: any) => {
      if (response.success) {
        console.log(response);
        this.mediaData = response.data;
        this.filterMedia();
      }
    }, (error) => {
      console.error('Error fetching videos:', error);
    });
  }

  removeFromWatchlist(item: any) {
    let body = {
      video_id: item.video_id,
      user_id: 1, // changes are available
    }
    this.api.wishListToggle(body).subscribe((response: any) => {
      if (response.success) {
        this.gs.showSuccess(response.message);
        this.getAllWishList();
      }
    }, (error) => {
      console.error('Error fetching videos:', error);
    });

  }

  filterMedia() {
    // Filter mediaData based on the selectedType
    if (this.selectedType === 'all') {
      this.filteredMediaData = [...this.mediaData];
    } else {
      this.filteredMediaData = this.mediaData.filter(
        (item) => item.category_id == this.selectedType
      );
    }
  }
  async clickOnPreviewClips(params: any = {}) {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips], { queryParams: params });
  }

}
