import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.modal';
import { ToastController } from '@ionic/angular';
import { Categories } from '../models/category.model';
import { Videos } from '../models/video.modal';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  LOGIN_USER: User = {};

  public STATUS_ARRAY: { value: string, title: string }[] = [
    { value: '1', title: 'Active' },
    { value: '0', title: 'InActive' }
  ]


  public allCategory: Categories = [];
  public allPopularVideo: Videos = [];
  public allTradingVideo: Videos = [];
  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }


  async showSuccess(message: string, title: string = 'Success') {
    await this.showToast(message, 'success');
  }

  async showError(message: string, title: string = 'Error') {
    await this.showToast(message, 'danger');
  }

  async showWarning(message: string, title: string = 'Warning') {
    await this.showToast(message, 'warning');
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  isLoggedIn(): boolean {
    const token = this.getLoginUser();
    return token.id ? true : false;
  }


  getLoginUser() {
    const user = JSON.parse(sessionStorage.getItem('userLogin') || '{}');
    this.LOGIN_USER = user;
    return user;
  }
}
