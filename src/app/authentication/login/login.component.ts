import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from 'src/app/web-services/user.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { AlertService } from 'src/app/web-services/alert.service';
import { SharedService } from 'src/app/web-services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = Object.create(null);
  constructor(private fb: FormBuilder, private router: Router,private userServices: UserService, private alertService: AlertService,private sharedService:SharedService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
   // this.router.navigate(['/dashboards/dashboard1']);
  this.login();
  }
  login() {
    
    this.userServices.loginUser(this.form.value).subscribe(
        res => {
              //  this.userList.data = res['data']['docs'];
            if (res['message'] == 'Successfully Logged in') {
              this.alertService.showSuccessLogin(res['message']);
              localStorage.setItem('userRole',  res['role']);
              localStorage.setItem('name',  res['name']);
              localStorage.setItem('userId',res['id']);

        this.sharedService.userName = res['name'];
        this.sharedService.userRole = res['role'];
              this.router.navigate(['/pages/sale']);              
            }
            else {
              this.alertService.showFalure(res['message']);

            } 
        }, err => {
            console.error('err: ', err);
        });
}
}
