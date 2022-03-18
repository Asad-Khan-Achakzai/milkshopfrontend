import { Injectable } from '@angular/core';
//import { CookieService } from '../../../node_modules/ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // constructor(private cookieService:CookieService) { }
  constructor() { }

  // user: UserDetail;
  // getUserDetails(): UserDetail {
  //   // console.log("userDetails::",this.getSession("userDetails"))
  //   if(this.getSession("userDetails")!=""){
  //   let json = JSON.parse(this.getSession("userDetails"));
   
  //   if(json != null){
  //      this.user = {
  //     anonymousId: json.anonymousId,
  //     businessRoleId: json.businessRoleId,
  //     city: json.city,
  //     country: json.country,
  //     dateOfBirth: json.dateOfBirth,
  //     designation: json.designation,
  //     email: json.email,
  //     firstName: json.firstName,
  //     gender: json.gender,
  //     identityHide: json.identityHide,
  //     isOnline: true,
  //     lastName: json.lastName,
  //     phoneNumber: json.phoneNumber,
  //     postalCode: json.postalCode,
  //     profileImageUrl: json.userProfilePicture,
  //     profilePercentage: json.profilePercentage,
  //     profileStatus: json.profileStatus,
  //     userId: json.userId,
  //     userAuth: {
  //       userAuthId: json.userAuth.userAuthId,
  //       username: json.userAuth.username,
  //       isVerified: json.userAuth.isVerified,
  //       linkStatus: json.userAuth.linkStatus,
  //       isFirstTimeLogin: json.userAuth.isFirstTimeLogin,
  //     }
  //   }
  //   }}
  //   return this.user;
  // }

  public getSession(name:any)
  {
    return true
    // if(sessionStorage.getItem(name)!=undefined ){
    //   return sessionStorage.getItem(name)}else
    //   {
    //     return this.cookieService.get(name);
    //   }
  }

  public getCookie(name:any)
  {
    
       // return this.cookieService.get(name);
  }

  public setCookie(name:any,value:any)
  {
    
       // return this.cookieService.set(name,value);
  }

  public deleteCookie(name:any)
  {
    //this.cookieService.delete(name);
  }

  public deleteAllCookie()
  {
    //this.cookieService.deleteAll();
  }
  public setSession(name:any,value:any)
  {
    //  sessionStorage.setItem(name,value)
    //  this.cookieService.set(name,value)
  }
}
