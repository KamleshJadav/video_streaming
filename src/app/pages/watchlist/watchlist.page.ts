import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {
  mediaData = [
    {
      type: "movie",
      name: "Inception",
      category: ["Action", "Drama", "Sci-Fi"],
      language: ["English", "Hindi", "French"],
      episodes: null,
      size: "2.3GB",
      image: "assets/images-temp/1.jpg",
    },
    {
      type: "tvShow",
      name: "Breaking Bad",
      category: ["Crime", "Drama", "Thriller"],
      language: ["English", "Spanish"],
      episodes: 62,
      size: "15GB",
      image: "assets/images-temp/2.jpg",
    },
    {
      type: "webSeries",
      name: "Stranger Things",
      category: ["Sci-Fi", "Horror", "Thriller"],
      language: ["English", "Hindi"],
      episodes: 34,
      size: "10GB",
      image: "assets/images-temp/3.jpg",
    },
    {
      type: "movie",
      name: "The Dark Knight",
      category: ["Action", "Drama", "Crime"],
      language: ["English", "Hindi"],
      episodes: null,
      size: "2.6GB",
      image: "assets/images-temp/4.jpg",
    },
    {
      type: "webSeries",
      name: "The Witcher",
      category: ["Fantasy", "Drama", "Action"],
      language: ["English", "Polish"],
      episodes: 16,
      size: "12GB",
      image: "assets/images-temp/5.jpg",
    },
    {
      type: "tvShow",
      name: "Game of Thrones",
      category: ["Fantasy", "Drama", "Adventure"],
      language: ["English", "Hindi"],
      episodes: 73,
      size: "25GB",
      image: "assets/images-temp/1.jpg",
    },
    {
      type: "movie",
      name: "Interstellar",
      category: ["Sci-Fi", "Drama", "Adventure"],
      language: ["English", "Hindi"],
      episodes: null,
      size: "2.8GB",
      image: "assets/images-temp/2.jpg",
    },
    {
      type: "webSeries",
      name: "Money Heist",
      category: ["Crime", "Drama", "Thriller"],
      language: ["Spanish", "English"],
      episodes: 41,
      size: "18GB",
      image: "assets/images-temp/3.jpg",
    },
    {
      type: "movie",
      name: "Avengers: Endgame",
      category: ["Action", "Adventure", "Sci-Fi"],
      language: ["English", "Hindi"],
      episodes: null,
      size: "3GB",
      image: "assets/images-temp/4.jpg",
    },
    {
      type: "tvShow",
      name: "Friends",
      category: ["Comedy", "Drama", "Sitcom"],
      language: ["English", "Spanish"],
      episodes: 236,
      size: "35GB",
      image: "assets/images-temp/5.jpg",
    },
    {
      type: "webSeries",
      name: "The Boys",
      category: ["Action", "Drama", "Superhero"],
      language: ["English", "Hindi"],
      episodes: 24,
      size: "10GB",
      image: "assets/images-temp/1.jpg",
    },
    {
      type: "movie",
      name: "Avatar",
      category: ["Sci-Fi", "Adventure", "Fantasy"],
      language: ["English", "Hindi"],
      episodes: null,
      size: "2.9GB",
      image: "assets/images-temp/2.jpg",
    },
    {
      type: "webSeries",
      name: "The Mandalorian",
      category: ["Sci-Fi", "Adventure", "Action"],
      language: ["English"],
      episodes: 24,
      size: "8GB",
      image: "assets/images-temp/3.jpg",
    },
    {
      type: "tvShow",
      name: "The Office",
      category: ["Comedy", "Drama", "Sitcom"],
      language: ["English"],
      episodes: 201,
      size: "22GB",
      image: "assets/images-temp/4.jpg",
    },
    {
      type: "movie",
      name: "Joker",
      category: ["Drama", "Crime", "Thriller"],
      language: ["English", "Hindi"],
      episodes: null,
      size: "2.4GB",
      image: "assets/images-temp/5.jpg",
    },
  ];

  selectedType: string = 'all';
  filteredMediaData = [...this.mediaData];
  constructor(
    public helper: HelperService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.filteredMediaData = this.helper.shuffleArray(this.filteredMediaData);
  }

  goBack() {
    this.location.back();
  }

  filterMedia() {
    // Filter mediaData based on the selectedType
    if (this.selectedType === 'all') {
      this.filteredMediaData = [...this.mediaData];
    } else {
      this.filteredMediaData = this.mediaData.filter(
        (item) => item.type === this.selectedType
      );
    }
    this.filteredMediaData = this.helper.shuffleArray(this.filteredMediaData);
  }

  removeFromWatchlist(item: any) {
    // Remove item from the watchlist
    this.mediaData = this.mediaData.filter((media) => media !== item);
    this.filterMedia(); // Reapply filter to reflect changes
  }

}
