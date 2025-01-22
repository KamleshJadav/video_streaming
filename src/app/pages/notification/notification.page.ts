import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification, Notifications } from 'src/app/custom/models/notification.modal';
import { Videos } from 'src/app/custom/models/video.modal';
import { ApiService } from 'src/app/custom/services/api.service';
import { HelperService } from 'src/app/custom/services/helper.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  pagination: any = {
    pageSize: 21,
    p: 1,
    total: 0
  };

  notifications: Notifications = [];
  isLoading: boolean = false; 

  constructor(
    public helper: HelperService,
    public router: Router,
    private location: Location,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.getNotificationPaginated();
  }

  getNotificationPaginated() {
    if (this.isLoading) return;

    this.isLoading = true;
    const queryParams: any = {
      page: this.pagination.p,
      pageSize: this.pagination.pageSize,
      user_id: 1, // changes are available
    };

    // Make the API call
    this.api.getNotificationPaginated(queryParams).subscribe((response: any) => {
      if (response.success) {
        this.notifications = [...this.notifications, ...response.data];
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

    if (this.notifications.length < this.pagination.total) {
      this.pagination.p += 1;
      this.getNotificationPaginated();
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    } else {
      event.target.disabled = true;
    }
  }

  onSwipe(index: any) {
  }

  goBack() {
    this.location.back();
  }
  clickTonotification(notification:any) {
    console.log(notification.redirect_url);
    
    this.router.navigateByUrl(notification.redirect_url)
  }
}
