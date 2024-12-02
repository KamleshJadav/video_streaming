import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {


  notifications = [
    { title: 'New Episode: Breaking Bad', message: 'Season 5, Episode 3 is now available to watch!' },
    { title: 'New Release: Stranger Things', message: 'The latest season just dropped! Check it out.' },
    { title: 'Live Now: Music Concert', message: 'Join the live stream of the Music Concert now!' },
    { title: 'Subscription Reminder', message: 'Your subscription is about to expire in 3 days.' },
    { title: 'New Movie Available', message: 'The new action movie is now available for streaming!' },
    { title: 'Trending Now: The Witcher', message: 'The Witcher is trending! Don\'t miss the latest episodes.' },
    { title: 'Watch Party: Avengers Endgame', message: 'Join the watch party for Avengers: Endgame at 8 PM tonight.' },
    { title: 'Exclusive Offer: 50% off Subscription', message: 'Subscribe now to get 50% off your first month of streaming.' },
    { title: 'New Documentary: Ocean\'s Wonders', message: 'A new documentary on ocean life is now available to stream.' },
    { title: 'Live Sports: Football Match', message: 'Catch the live football match between Team A and Team B!' },
    { title: 'Exclusive Premiere: The Matrix Resurrections', message: 'The Matrix Resurrections is available for exclusive streaming!' },
    { title: 'Season Finale: Game of Thrones', message: 'The season finale of Game of Thrones is available now!' },
    { title: 'New TV Series: The Boys', message: 'Watch the new TV series "The Boys" now streaming!' },
    { title: 'Reminder: Movie Night', message: 'Don\'t forget movie night with The Lion King at 7 PM!' },
    { title: 'Live Stream: Cooking with Chef Ramsay', message: 'Join the live stream of Chef Ramsay\'s new recipe!' },
  ];

  constructor(
    public helper: HelperService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.notifications = this.helper.shuffleArray(this.notifications)
  }

  onSwipe(index: any) {
    this.notifications.splice(index, 1);
  }

  goBack() {
    this.location.back();
  }
}
