import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AppConfigProvider } from './app-config.provider';
import { LoginModel } from '../models/login.model';
import { UserRegistrationModel } from '../models/user-registration.model';
import { UserRegistrationStepTwoModel } from '../models/user-registration-step-two.model';
import { ChangePasswordModel } from '../models/change-password.model';
import { UserProfileModel } from '../models/user-profile.model';

@Injectable()
export class UserProvider {
  private _isLoggedIn: boolean;
  private readonly _resourceUrl: string;
  constructor(
    private http: HttpClient,
    private appConfig: AppConfigProvider) {
      this._resourceUrl = appConfig.getApiUrl() + 'user/'
  }

  login(model: LoginModel): Observable<any> {
    return this.http
      .post(
        this.appConfig.getApiUrl() + 'login', 
        this.encodeParams(model),
        { 
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
  }

  register(model: UserRegistrationModel): Observable<any> {
    return this.http
      .post(this._resourceUrl + 'register', model)
  }

  registerStepTwo(model: UserRegistrationStepTwoModel): Observable<any> {
    return this.http
      .post(this._resourceUrl + 'register-step2', model)
  }

  changePassword(model: ChangePasswordModel): Observable<any> {
    return this.http
      .post(this._resourceUrl + 'change-password', model)
  }

  getProfile(): Observable<any> {
    return this.http
      .get(this._resourceUrl + 'profile')
  }

  updateProfile(model: UserProfileModel): Observable<any> {
    return this.http
      .post(this._resourceUrl + 'profile', model)
  }

  private encodeParams(params: any): string {  
    let body: string = '';  
    for (let key in params) {  
        if (body.length) {  
            body += '&';  
        }  
        body += key + '=';  
        body += encodeURIComponent(params[key]);  
    }  
    return body;  
  }  
}
