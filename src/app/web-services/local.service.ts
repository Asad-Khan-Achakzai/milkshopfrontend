import { Injectable } from '@angular/core';
import { Constant } from '../util/constant';
import { DataSharedService } from './data-shared.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private sharedService: DataSharedService,private sessionService: SessionService) { }

  logout() {

    sessionStorage.removeItem("expirationDate");
    this.sessionService.deleteCookie("expirationDate")
    sessionStorage.removeItem("applicationId");
    sessionStorage.removeItem("token");
    // sessionStorage.removeItem(this.main.sharedService.getCookie("applicationShortName") + "_roles");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("applicationId");
    sessionStorage.removeItem("lrms_roles");
    sessionStorage.removeItem("currentUrl");
    sessionStorage.removeItem("activatedRole")
    sessionStorage.removeItem("loggedInUser")
    sessionStorage.removeItem("currentUrl")
    this.sessionService.deleteCookie("token")
    this.sessionService.deleteCookie("applicationId")
    this.sessionService.deleteCookie("umsUrl")
    this.sharedService.checkIsUserLoggedIn(false);
    window.location.assign(Constant.LRMSFrontEndURL + "/login");
    // window.location.assign("http://localhost:3000/login");

  
}

roleMatch(allowedRoles:any): boolean {
  var isMatch = false;
  if (this.sessionService.getSession("lrms_roles")) {
    // var userRoles: string[] = JSON.parse(this.sessionService.getSession("lrms_roles"));
    var userRoles: string[];
    allowedRoles.forEach((element: string)=> {
      if (userRoles.indexOf(element) > -1) { isMatch = true; }
    });
  }
  return isMatch;
}

checkRole(pageControls: Map<string, boolean>, roles: string[]): Map<string, boolean> {

  for (let key of Array.from(pageControls.keys())) {
    if (roles.find(x => x == key)) {
      pageControls.set(key, true);
    }
  }
  return pageControls;
}
}
