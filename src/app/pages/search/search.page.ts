import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/custom/services/api.service';
import { CapacitorAdsService } from 'src/app/custom/services/capacitor-ads.service';
import { customurl } from 'src/app/custom/services/customdata';
import { GlobalService } from 'src/app/custom/services/global.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  bannerImageURl: string = this.api.assetsUrl + 'image/category/'
  searchKeywords = [
    { id: 1, keyword: "trending movies", category: "general", type: "movie" },
    { id: 2, keyword: "popular series", category: "general", type: "series" },
    { id: 3, keyword: "new releases", category: "general", type: "mixed" },
    { id: 4, keyword: "top rated", category: "rating", type: "mixed" },
    { id: 5, keyword: "action movies", category: "genre", type: "movie" },
    { id: 6, keyword: "romantic comedies", category: "genre", type: "movie" },
    { id: 7, keyword: "family-friendly shows", category: "family", type: "series" },
    { id: 8, keyword: "sci-fi thrillers", category: "genre", type: "mixed" },
    { id: 9, keyword: "crime dramas", category: "genre", type: "series" },
    { id: 10, keyword: "classic films", category: "classic", type: "movie" }
  ];

  recentSearches = [
    { id: 1, label: 'Inception' },
    { id: 2, label: 'Interstellar' },
    { id: 3, label: 'The Dark Knight' },
    { id: 4, label: 'The Matrix' },
    { id: 5, label: 'Avatar' },
    { id: 6, label: 'Titanic' },
    { id: 7, label: 'Joker' },
    { id: 8, label: 'Parasite' },
  ];


  movies: any = [
    { image: 'assets/images-temp/6.jpg' },
    { image: 'assets/images-temp/7.jpg' },
    { image: 'assets/images-temp/8.jpg' },
    { image: 'assets/images-temp/9.jpg' },
    { image: 'assets/images-temp/6.jpg' },
  ];
  constructor(
    public helper: HelperService,
    public api: ApiService,
    public gs: GlobalService,
    private router: Router,
    private capAds: CapacitorAdsService,

  ) { }

  ngOnInit() {
    this.searchKeywords = this.helper.shuffleArray(this.searchKeywords);
    this.recentSearches = this.helper.shuffleArray(this.recentSearches);
    this.movies = this.helper.shuffleArray(this.movies);
  }
  
  async clickOnViewAll(params:any = {}) {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.viewAll],{queryParams:params})
  }

  async clickOnPreviewClips() {
    await this.capAds.showRandomInterstitialAd(0.5);
    this.router.navigate([customurl.previewclips])
  }
}
