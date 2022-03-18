import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class Constant {
    public static ITEM_PER_PAGE = 5;
    public static LEAVE_NUMBER_OF_DAYS = 90;
    public static FIRST_PAGE = 0;
    public static LRMSFrontEndURL="http://localhost:4200"
    //public static BASE_URL = 'https://devbe.hive-worx.com:8443/LRMS/Hive-Worx/';
    public static BASE_URL = 'http://localhost:3000/';
    public static TOKEN_EXPIRE_TIME = 240000;
   
    public static UMS_URL = "https://devbe.hive-worx.com:8443/LRUMS/rest/ums/";

    public static campusLocation = "https://www.google.com/maps?q=2805+Campus+dr,+Plymouth++MN+55441";
    public static URL_REGEXP = '/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/'
    public static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }

}

