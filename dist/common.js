(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/util/constant.ts":
/*!**********************************!*\
  !*** ./src/app/util/constant.ts ***!
  \**********************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class Constant {
    static handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
    }
}
Constant.ITEM_PER_PAGE = 10;
Constant.LEAVE_NUMBER_OF_DAYS = 90;
Constant.FIRST_PAGE = 0;
Constant.LRMSFrontEndURL = "http://localhost:4200";
//public static BASE_URL = 'https://devbe.hive-worx.com:8443/LRMS/Hive-Worx/';
Constant.BASE_URL = 'http://localhost:3000/';
Constant.TOKEN_EXPIRE_TIME = 240000;
Constant.UMS_URL = "https://devbe.hive-worx.com:8443/LRUMS/rest/ums/";
Constant.campusLocation = "https://www.google.com/maps?q=2805+Campus+dr,+Plymouth++MN+55441";
Constant.URL_REGEXP = '/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/';


/***/ }),

/***/ "./src/app/web-services/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/web-services/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




class AlertService {
    constructor(_snackBar, toastr) {
        this._snackBar = _snackBar;
        this.toastr = toastr;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
    }
    // constructor() {
    // }
    showSuccess(victim, operationType) {
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
        });
    }
    showFalure(message) {
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
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/web-services/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/web-services/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _util_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/constant */ "./src/app/util/constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    ;
    addUser(user) {
        return this.httpClient.post(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BASE_URL + "managers/add", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].handleError));
    }
    updateUser(user) {
        let _id = user._id;
        return this.httpClient.put(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BASE_URL + `managers/${_id}`, user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].handleError));
    }
    findAllUser(user, pageNo, usersPerPage) {
        return this.httpClient.post(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BASE_URL + "managers/all", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].handleError));
    }
    loginUser(user) {
        return this.httpClient.post(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BASE_URL + "managers/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].handleError));
    }
    deleteByIdUser(userId) {
        let _id = userId;
        return this.httpClient.delete(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BASE_URL + `managers/${_id}`, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].handleError));
    }
    countUser(user) {
        return this.httpClient.post(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].BASE_URL + "manager/count", { "user": user }, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_util_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].handleError));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map