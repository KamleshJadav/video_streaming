import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videos } from 'src/app/custom/models/video.modal';
import { ApiService } from 'src/app/custom/services/api.service';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { GlobalService } from 'src/app/custom/services/global.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-view-all-list',
  templateUrl: './view-all-list.page.html',
  styleUrls: ['./view-all-list.page.scss'],
})
export class ViewAllListPage implements OnInit {

  videoImageURl: string = this.api.assetsUrl + 'video_thmb/';
  tradding: any = 0;
  popular: any = 0;
  headertext: any = 'Videos';
  category_id: any = 0;

  pagination: any = {
    pageSize: 21,
    p: 1,
    total: 0
  };

  allVideos: Videos = [];
  isLoading: boolean = false; // Flag to track loading state

  constructor(
    public helper: HelperService,
    public router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private gs: GlobalService,
    private location: Location,
    private capAds: CapacitorAdsService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      console.log(">>>>>>>>>");

      if (params.has('tradding')) {
        this.tradding = params.get('tradding');
      }

      if (params.has('headertext')) {
        this.headertext = params.get('headertext');
      }
      if (params.has('popular')) {
        this.popular = params.get('popular');
      }
      if (params.has('category_id')) {
        this.category_id = params.get('category_id');
      }
      this.pagination.p = 1;
      this.allVideos = [];

      this.getVideoPaginated(); // Initial data load
    });
  }

  // Method to fetch paginated videos
  getVideoPaginated() {
    if (this.isLoading) return;

    this.isLoading = true;
    const queryParams: any = {
      page: this.pagination.p,
      pageSize: this.pagination.pageSize
    };

    if (this.tradding) {
      queryParams.tradding = this.tradding;
    }

    if (this.popular) {
      queryParams.popular = this.popular;
    }

    if (this.category_id) {
      queryParams.category_id = this.category_id;
    }
    console.log("queryParams", queryParams);

    // Make the API call
    this.api.getVideoPaginated(queryParams).subscribe((response: any) => {
      if (response.success) {
        this.allVideos = [...this.allVideos, ...response.data];
        this.pagination.total = response.total_records;
      }
      this.isLoading = false;
    }, (error) => {
      console.error('Error fetching videos:', error);
      this.isLoading = false;
    });
  }

  loadMoreVideos(event: any) {
    if (this.isLoading) {
      event.target.complete();
      return;
    }

    if (this.allVideos.length < this.pagination.total) {
      this.pagination.p += 1;
      this.getVideoPaginated();
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    } else {
      event.target.disabled = true;
    }
  }

  resetFilters() {

    this.getVideoPaginated();
  }

  async clickOnPreviewClips(params: any = {}) {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips], { queryParams: params });
  }

  goBack() {
    this.location.back();
  }

  ionViewDidLeave() {
    this.tradding = 0;
    this.popular = 0;
    this.category_id = 0;

    this.pagination.p = 1;
    this.allVideos = [];

  }
}
