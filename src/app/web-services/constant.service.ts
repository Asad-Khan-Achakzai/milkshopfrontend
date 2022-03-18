import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../util/constant';


@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  constructor(private http: HttpClient) {
    //this.currentUserId= localServices.getCookie("loggedInUser");
  }

  getFormConstantsList(formId:any) {
    return this.http.post<string>(Constant.UMS_URL + "getConstants", { "form": formId, "language": 1 });
  }
  getLanguage() {
    //this.localServices.getCookie("language")}
    return this.http.post<string>(Constant.UMS_URL + "getLanguage", {});
  }
}
