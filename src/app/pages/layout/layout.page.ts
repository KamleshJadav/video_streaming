import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ApiService } from 'src/app/custom/services/api.service';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { GlobalService } from 'src/app/custom/services/global.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  activeTab: string = 'home';
  constructor(
    private router: Router,
    private api: ApiService,
    private gs: GlobalService,
    private capAds: CapacitorAdsService,

  ) {
    this.detectRouteChanges();
    this.getAllCategory();
    this.getPopular();
    this.getTradding();
  }

  ngOnInit() {

  }

  detectRouteChanges() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Route changed to:', event.url);
        let url = this.router.url.split('/')
        const tabName = ['home', 'search', 'profile']
        this.activeTab = tabName.includes(url[2]) ? url[2] : 'home'
      }
    });
  }

  async ionViewDidEnter() {
    let url = this.router.url.split('/')
    this.activeTab = url[2]
  }

  async goToHome() {
    if (this.activeTab == 'home') return;
    // await this.capAds.showInterstitialAd();
    this.activeTab = 'home';
    this.router.navigate([customurl.home]);
  }

  async goToSearch() {
    if (this.activeTab == 'search') return;
    await this.capAds.showRandomInterstitialAd(0.5);
    this.activeTab = 'search';
    this.router.navigate([customurl.search]);
  }


  async goToProfile() {
    if (this.activeTab == 'profile') return;
    await this.capAds.showRandomInterstitialAd(0.5);
    this.activeTab = 'profile';
    this.router.navigate([customurl.profile]);
  }

  getAllCategory() {
    this.api.getAllCategory().subscribe({
      next: async (response: any) => {
        if (response.success) {
          console.log('response', response);
          this.gs.allCategory = response.data;
        } else {
          this.gs.showError(response.message, 'Error')
        }
      },
      error: async (error) => {
      },
      complete: () => {

      },
    });
  } 
  
  getTradding() {
    this.api.getTradding().subscribe({
      next: async (response: any) => {
        if (response.success) {
          console.log('allTradingVideo', response);
          this.gs.allTradingVideo = response.data;
        } else {
          this.gs.showError(response.message, 'Error')
        }
      },
      error: async (error) => {
      },
      complete: () => {

      },
    });
  } 
  
  getPopular() {
    this.api.getPopular().subscribe({
      next: async (response: any) => {
        if (response.success) {
          console.log('allPopularVideo', response);
          this.gs.allPopularVideo = response.data;
        } else {
          this.gs.showError(response.message, 'Error')
        }
      },
      error: async (error) => {
      },
      complete: () => {

      },
    });
  }
}
