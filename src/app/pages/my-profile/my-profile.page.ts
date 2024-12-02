import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { HelperService } from 'src/app/custom/services/helper.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  profileForm: any = {
    profile_image: 'assets/images-temp/12.jpg',
    full_name: 'assets/images-temp/12.jpg',
    email_address: 'assets/images-temp/12.jpg',
    phone_number: 'assets/images-temp/12.jpg',
    password: 'assets/images-temp/12.jpg',
  }
  constructor(
    public helper: HelperService,
    private location: Location,
    private actionCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  saveProfile() {

  }

  async changeProfilePicture() {
    const actionSheet = await this.actionCtrl.create({
      header: 'Choose Option',
      mode:'ios',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.takePicture(CameraSource.Camera);
          },
        },
        {
          text: 'Gallery',
          icon: 'image-outline',
          handler: () => {
            this.takePicture(CameraSource.Photos);
          },
        },
        {
          text: 'Remove',
          role: 'destructive',
          icon: 'trash-outline',
          handler: () => {
            this.removeImage();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
        },
      ]
    });

    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source,
      });

      if (image && image.dataUrl) {
        this.profileForm.profile_image = image.dataUrl;
      }
    } catch (error) {
      console.error('Error capturing image', error);
    }
  }

  removeImage() {
    this.profileForm.profile_image = 'assets/images-temp/11.jpg';
  }


}
