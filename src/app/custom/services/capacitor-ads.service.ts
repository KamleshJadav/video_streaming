import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare let admob: any;

@Injectable({
  providedIn: 'root',
})
export class CapacitorAdsService {
  // Observables for tracking ad states
  bannerVisible = new BehaviorSubject<boolean>(false);
  isInterstitialReady$ = new BehaviorSubject<boolean>(false);

  private bannerAdInstance: any;
  private interstitialAdInstance: any;
  private appOpenAdInstance: any;

  // Test Ad Unit IDs (reopen with test IDs for Testtin)
  private readonly BANNER_AD_ID = 'ca-app-pub-3940256099942544/6300978111';
  private readonly INTERSTITIAL_AD_ID = 'ca-app-pub-3940256099942544/1033173712';
  private readonly APP_OPEN_AD_ID = 'ca-app-pub-3940256099942544/3419835294';


  // Live Ad Unit IDs (reopen with Live IDs forproduction)


  // private readonly BANNER_AD_ID = '';
  // private readonly INTERSTITIAL_AD_ID = '';
  // private readonly APP_OPEN_AD_ID = '';

  constructor() {
    this.initializeEventListeners();
    this.initializeAds();
  }

  /**
   * Initialize all ad instances.
   */
  private async initializeAds(): Promise<void> {
    try {
      this.initializeInterstitialAd();
      this.initializeAppOpenAd(true);
    } catch (error) {
      console.log('Error initializing ads:', error);
    }
  }

  /**
   * Initialize and load a banner ad.
   */
  async showBannerAd(): Promise<void> {
    try {
      this.bannerAdInstance = new admob.BannerAd({
        adUnitId: this.BANNER_AD_ID,
        position: 'bottom',
      });
      await this.bannerAdInstance.show();
      this.bannerVisible.next(true);
    } catch (error) {
      console.log('Error showing banner ad:', error);
    }
  }

  /**
   * Hide the banner ad.
   */
  async hideBannerAd(): Promise<void> {
    try {
      if (this.bannerAdInstance) {
        await this.bannerAdInstance.hide();
        this.bannerVisible.next(false);
      }
    } catch (error) {
      console.log('Error hiding banner ad:', error);
    }
  }

  /**
   * Re-display the banner ad if previously hidden.
   */
  async resumeBannerAd(): Promise<void> {
    await this.showBannerAd();
  }

  /**
   * Initialize an interstitial ad and load it.
   */
  private async initializeInterstitialAd(): Promise<void> {
    try {
      this.interstitialAdInstance = new admob.InterstitialAd({
        adUnitId: this.INTERSTITIAL_AD_ID,
      });
      await this.loadInterstitialAd();
    } catch (error) {
      console.log('Error initializing interstitial ad:', error);
    }
  }

  /**
   * Load an interstitial ad.
   */
  private async loadInterstitialAd(): Promise<void> {
    try {
      await this.interstitialAdInstance.load();
      this.isInterstitialReady$.next(true);
    } catch (error) {
      console.log('Error loading interstitial ad:', error);
      this.isInterstitialReady$.next(false);
    }
  }

  /**
   * Show an interstitial ad if ready.
   */
  async showInterstitialAd(): Promise<void> {
    try {
      if (!this.isInterstitialReady$.value) {
        await this.loadInterstitialAd();
      }
      await this.interstitialAdInstance.show();
    } catch (error) {
      console.log('Error showing interstitial ad:', error);
    }
  }

  /**
   * Randomly decide to show an interstitial ad based on a given chance.
   */
  async showRandomInterstitialAd(chance: number = 0.5): Promise<void> {
    if (Math.random() < chance) {
      console.log('Showing interstitial ad.');
      await this.showInterstitialAd();
    } else {
      console.log('Interstitial ad skipped.');
    }
  }

  /**
   * Initialize an app open ad.
   * @param showImmediately Whether to show the ad immediately after loading.
   */
  private async initializeAppOpenAd(showImmediately: boolean): Promise<void> {
    try {
      this.appOpenAdInstance = new admob.AppOpenAd({
        adUnitId: this.APP_OPEN_AD_ID,
      });
      await this.loadAppOpenAd(showImmediately);
    } catch (error) {
      console.log('Error initializing app open ad:', error);
    }
  }

  /**
   * Load an app open ad and optionally show it immediately.
   */
  private async loadAppOpenAd(showImmediately: boolean): Promise<void> {
    try {
      const isAdAvailable = await this.appOpenAdInstance.show();
      if (!isAdAvailable) {
        await this.appOpenAdInstance.load();
        if (showImmediately) {
          await this.displayAppOpenAd();
        }
      }
    } catch (error) {
      console.log('Error loading app open ad:', error);
    }
  }

  /**
   * Display an app open ad.
   */
  private async displayAppOpenAd(): Promise<void> {
    try {
      // await this.appOpenAdInstance.show();
    } catch (error) {
      console.log('Error displaying app open ad:', error);
    }
  }

  /**
   * Initialize event listeners for AdMob events.
   */
  private initializeEventListeners(): void {
    document.addEventListener('admob.interstitial.dismiss', async () => {
      console.log('Interstitial ad dismissed.');
      await this.loadInterstitialAd();
    });

    document.addEventListener('admob.ad.dismiss', async (event: any) => {
      if (event.ad instanceof admob.AppOpenAd) {
        console.log('App open ad dismissed.');
        await this.loadAppOpenAd(false);
      }
    });
  }
}
 