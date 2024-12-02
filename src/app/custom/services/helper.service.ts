import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  app_data:any = {}
  app_version :any = '1.0'

  constructor(
    private http: HttpClient
  ) { }

  public contactDetails: any = {
    name: 'Video Stream',
    email: 'videostream@gmail.com',
    phone_number: '+91 5986255848'
  }
  public shuffleArray(array: any) {
    const shuffled = [...array]; // Copy array to avoid mutation
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
  }


  getAppData() {
    return new Promise((resolve, reject) => {
      this.http.post('https://nrninfotech.com/versioncheck/index.php?p=appversion',
        { token: 'document-scanner-ios-kamlesh' }).subscribe(
          response => {
            resolve(response);
          },
          error => {
            reject(error);
          }
        );
    });
  }
}
