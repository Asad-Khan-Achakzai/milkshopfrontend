(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/error.component */ "./src/app/authentication/error/error.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/authentication/lockscreen/lockscreen.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentication/register/register.component.ts");


















class AuthenticationModule {
}
AuthenticationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_10__["AuthenticationRoutes"]),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationModule, { declarations: [_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
        _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"],
        _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_13__["LockscreenComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_10__["AuthenticationRoutes"]),
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [
                    _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                    _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"],
                    _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_13__["LockscreenComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/error.component */ "./src/app/authentication/error/error.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/authentication/lockscreen/lockscreen.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentication/register/register.component.ts");





const AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]
            },
            {
                path: 'forgot',
                component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__["ForgotComponent"]
            },
            {
                path: 'lockscreen',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_2__["LockscreenComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/error/error.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/"]; };
class ErrorComponent {
    constructor() { }
    ngOnInit() { }
}
ErrorComponent.??fac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 10, vars: 2, consts: [[1, "login-register"], [1, "login-register-box", "error-card", "text-center"], [1, "text-uppercase"], [1, "text-muted", "m-t-30", "m-b-30"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-info", "btn-rounded", "waves-effect", "waves-light", "m-b-40", 3, "routerLink"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Page Not Found !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "You seem to be trying to find this way to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/authentication/forgot/forgot.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/forgot/forgot.component.ts ***!
  \***********************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function ForgotComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You must include an email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ForgotComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You must include a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ForgotComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.form = Object.create(null);
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].email])
            ]
        });
    }
    onSubmit() {
        this.router.navigate(['/authentication/login']);
    }
}
ForgotComponent.??fac = function ForgotComponent_Factory(t) { return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgotComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ForgotComponent, selectors: [["app-forgot"]], decls: 19, vars: 5, consts: [[1, "login-register", 2, "background-image", "url(assets/images/background/login-register.jpg)"], [1, "login-register-box"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["alt", "homepage", "src", "assets/images/logo-icon.png"], [1, "m-t-0"], [1, "text-center", "font-14"], ["fxLayout", "column", "fxLayoutAlign", "space-around"], [1, "pb-1"], [2, "width", "100%"], ["matInput", "", "placeholder", "Email address", "type", "email", 3, "formControl"], ["class", "text-danger support-text", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-block", "btn-lg", "m-t-20", 3, "disabled"], [1, "text-danger", "support-text"]], template: function ForgotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Enter your email and we'll send you the password reset link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ForgotComponent_small_15_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ForgotComponent_small_16_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["email"].hasError("required") && ctx.form.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors.email) && ctx.form.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot',
                templateUrl: './forgot.component.html',
                styleUrls: ['./forgot.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/lockscreen/lockscreen.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/lockscreen/lockscreen.component.ts ***!
  \*******************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function LockscreenComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class LockscreenComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.form = Object.create(null);
    }
    ngOnInit() {
        this.form = this.fb.group({
            uname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    onSubmit() {
        this.router.navigate(['/']);
    }
}
LockscreenComponent.??fac = function LockscreenComponent_Factory(t) { return new (t || LockscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LockscreenComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LockscreenComponent, selectors: [["app-lockscreen"]], decls: 17, vars: 4, consts: [[1, "login-register", 2, "background-image", "url(assets/images/background/login-register.jpg)"], [1, "login-register-box"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["src", "assets/images/users/1.jpg", "width", "80", "alt", "user", "title", "user", 1, "img-circle"], [1, "m-t-0"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [2, "width", "100%"], ["matInput", "", "placeholder", "Username", 3, "formControl"], ["class", "text-danger support-text", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-block", "btn-lg", "m-t-10", "m-b-10", 3, "disabled"], [1, "text-danger", "support-text"]], template: function LockscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LockscreenComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "David Miller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, LockscreenComponent_small_13_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["uname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["uname"].hasError("required") && ctx.form.controls["uname"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvY2tzY3JlZW4vbG9ja3NjcmVlbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LockscreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lockscreen',
                templateUrl: './lockscreen.component.html',
                styleUrls: ['./lockscreen.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_web_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/web-services/user.service */ "./src/app/web-services/user.service.ts");
/* harmony import */ var src_app_web_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/web-services/alert.service */ "./src/app/web-services/alert.service.ts");
/* harmony import */ var src_app_web_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/web-services/shared.service */ "./src/app/web-services/shared.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function LoginComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class LoginComponent {
    constructor(fb, router, userServices, alertService, sharedService) {
        this.fb = fb;
        this.router = router;
        this.userServices = userServices;
        this.alertService = alertService;
        this.sharedService = sharedService;
        this.form = Object.create(null);
    }
    ngOnInit() {
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    onSubmit() {
        // this.router.navigate(['/dashboards/dashboard1']);
        this.login();
    }
    login() {
        this.userServices.loginUser(this.form.value).subscribe(res => {
            //  this.userList.data = res['data']['docs'];
            if (res['message'] == 'Successfully Logged in') {
                this.alertService.showSuccessLogin(res['message']);
                localStorage.setItem('userRole', res['role']);
                localStorage.setItem('name', res['name']);
                localStorage.setItem('userId', res['id']);
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
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_web_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_web_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_web_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 6, consts: [[1, "login-register", 2, "background-image", "url(assets/images/background/login-register.jpg)"], [1, "login-register-box"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["alt", "homepage", "src", "assets/images/logo-icon.png"], [1, "m-t-0"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Username", 3, "formControl"], ["class", "text-danger support-text", 4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password", 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-block", "btn-lg", "m-t-20", "m-b-20", 3, "disabled"], [1, "text-danger", "support-text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Login to App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, LoginComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, LoginComponent_small_17_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["name"].hasError("required") && ctx.form.controls["name"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["password"].hasError("required") && ctx.form.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_web_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_web_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_web_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function RegisterComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You must include an email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RegisterComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You must include a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RegisterComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You must include password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RegisterComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You must include confirm password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RegisterComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Passwords do not math.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function () { return ["/authentication/login"]; };
const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
class RegisterComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.form = Object.create(null);
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].email])
            ],
            password: password,
            confirmPassword: confirmPassword
        });
    }
    onSubmit() {
        this.router.navigate(['/']);
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 37, vars: 12, consts: [[1, "login-register", 2, "background-image", "url(assets/images/background/login-register.jpg)"], [1, "login-register-box"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["alt", "homepage", "src", "assets/images/logo-icon.png"], [1, "m-t-0"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [2, "width", "100%"], ["matInput", "", "placeholder", "Email address", "type", "email", 3, "formControl"], ["class", "text-danger support-text", 4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Password", 3, "formControl"], ["matInput", "", "placeholder", "Confirm Password", "type", "password", 3, "formControl"], [1, "font-14"], ["href", "javascript:void(0)", 1, "link", "text-info"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-block", "btn-lg", "m-t-20", "m-b-20", 3, "disabled"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "text-center"], [1, "link", "text-info", 3, "routerLink"], [1, "text-danger", "support-text"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Register to App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, RegisterComponent_small_13_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, RegisterComponent_small_14_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, RegisterComponent_small_18_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, RegisterComponent_small_22_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, RegisterComponent_small_23_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "I agree to the all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["email"].hasError("required") && ctx.form.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors.email) && ctx.form.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["password"].hasError("required") && ctx.form.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls["confirmPassword"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["confirmPassword"].hasError("required") && ctx.form.controls["confirmPassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.controls["confirmPassword"].errors == null ? null : ctx.form.controls["confirmPassword"].errors.equalTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map