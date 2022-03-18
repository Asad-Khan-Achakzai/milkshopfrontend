import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private router: Router) {}

  public saveTokenToStorage(token: string) {
    //save token to storage
    localStorage.set('userId', token);
    
  }

  public async getTokenFromStorage() {
     
    const token = await localStorage.getItem('userId');
    return token;
  }
  async getUserName(){
    const role = await localStorage.getItem('name');
return role;
  }
  public async isAdmin(){
    const role = await localStorage.getItem('userRole');
    if(role == 'Admin'){
      return true;
    }else{
      return false;
    }
  }
  public async logout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
