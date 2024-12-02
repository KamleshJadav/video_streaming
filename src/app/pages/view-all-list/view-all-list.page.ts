import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-view-all-list',
  templateUrl: './view-all-list.page.html',
  styleUrls: ['./view-all-list.page.scss'],
})
export class ViewAllListPage implements OnInit {
  allPopular: any = [
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
    { image: 'assets/images-temp/1.jpg' },
    { image: 'assets/images-temp/2.jpg' },
    { image: 'assets/images-temp/3.jpg' },
    { image: 'assets/images-temp/4.jpg' },
    { image: 'assets/images-temp/5.jpg' },
  ]
  constructor(
    public helper: HelperService,
    public router: Router,
    private location: Location,
    private capAds: CapacitorAdsService,
  ) { }

  ngOnInit() {
    this.allPopular = this.helper.shuffleArray(this.allPopular)
  }
  async clickOnPreviewClips() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips])
  }  
  goBack() {
    this.location.back();
  }
}
