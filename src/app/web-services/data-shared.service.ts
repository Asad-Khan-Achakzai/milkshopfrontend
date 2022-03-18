import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  constructor() { }

  private loggedIn = new BehaviorSubject<boolean>(false);


  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  checkIsUserLoggedIn(value:any) {
    this.loggedIn.next(value);
  }

  roles=new Array<string>();
  getRoles()
  {
     return this.roles;
  }

  setRoles(roles:any)
  {
    this.roles=roles;
  }

}
