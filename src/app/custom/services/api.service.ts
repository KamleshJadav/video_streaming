import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { Actor } from '../models/actor.modal';
import { Channel } from '../models/channel.modal';
import { Video } from '../models/video.modal';
import { Router } from '@angular/router';
import { User } from '../models/user.modal';
import { Banner } from '../models/banner.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;
  public assetsUrl = environment.assetsUrl;


  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}categories/all`);
  }

  getPopular() {
    return this.http.get<void>(`${this.apiUrl}videos/popular`);
  }  

  getTradding() {
    return this.http.get<void>(`${this.apiUrl}videos/tradding`);
  }  
  
  getVideoPaginated(queryParams:any) {
    return this.http.get<void>(`${this.apiUrl}videos/get-mobile-paginated`,{params:queryParams});
  }

  getVideoById(queryParams:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}videos/get-by-id-mobile`,{params:queryParams});
  }
  wishListToggle(queryParams:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}wishlist/toggle`,queryParams);
  }

  getAllWishList(queryParams:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}wishlist/get-all`,queryParams);
  }
  

 // createCategory(category: any): Observable<Category> {
  //   return this.http.post<Category>(this.apiUrl + 'categories/add', category);
  // }
  
  // createCategory(category: any): Observable<Category> {
  //   return this.http.post<Category>(this.apiUrl + 'categories/add', category);
  // }

  // updateCategory(id: number, category: any): Observable<Category> {
  //   return this.http.post<Category>(`${this.apiUrl}categories/update?id=${id}`, category);
  // }

  // deleteCategory(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}categories/delete/${id}`);
  // }



  // getPaginatedCategory(page: number = 1, pageSize: number = 7): Observable<void> {
  //   return this.http.get<void>(`${this.apiUrl}categories/paginated?page=${page}&pageSize=${pageSize}`);
  // }

  
  userLogin(User: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}user/login`, User);
  }

  userRegister(User: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}user/register`, User);
  }

  updateUser(id: number, user: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}user/update?id=${id}`, user);
  }

  changePassword(user: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}user/change-password`, user);
  }


  getNotificationPaginated(queryParams:any) {
    return this.http.get<void>(`${this.apiUrl}notification/user-all-notification`,{params:queryParams});
  }

}


