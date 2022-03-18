import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar,private toastr: ToastrService) {

  }

  // constructor() {

  // }

  showSuccess(victim:any, operationType:any) {
    this._snackBar.open('Your ' + operationType + " " + ' request for ' + victim + ' is completed successfully', null, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 4000,
      panelClass: ['green-snackbar']
    });   
   
        // this.toastr.success('Your ' + operationType + " " + ' request for ' + victim + ' is completed successfully', null, {
        //   tapToDismiss: false,
        //   closeButton: true,
        //   timeOut: 2000,
        //   positionClass: "toast-top-center"
        // });
  }
  showSuccessLogin(Message) {
    this._snackBar.open(Message, null, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 4000,
      panelClass: ['green-snackbar']
    });  }
  showFalure(message:any) {
    this._snackBar.open(message, null, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 4000,
      panelClass: ['red-snackbar']
    }); 
    // this.toastr.error(message, null, {
    //   tapToDismiss: false,
    //   closeButton: true,
    //   timeOut: 5000,
    //   positionClass: "toast-top-center"
    // });
}

}
