(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboards-module"],{

/***/ "./src/app/dashboards/dashboard-components/activity/activity.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/activity/activity.component.ts ***!
  \********************************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function ActivityComponent_div_4_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 24);
} if (rf & 2) {
    const mytimeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("alt", "Image of ", mytimeline_r1.attachment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", mytimeline_r1.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ActivityComponent_div_4_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Check Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const mytimeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("color", mytimeline_r1.buttons);
} }
function ActivityComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ActivityComponent_div_4_img_12_Template, 1, 2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ActivityComponent_div_4_button_13_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const mytimeline_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("alt", "Image of ", mytimeline_r1.from, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", mytimeline_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", mytimeline_r1.from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mytimeline_r1.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mytimeline_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", mytimeline_r1.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", mytimeline_r1.buttons);
} }
class ActivityComponent {
    constructor() {
        // Timeline
        this.mytimelines = [
            {
                from: 'Nirav joshi',
                time: '(5 minute ago)',
                image: 'assets/images/users/1.jpg',
                attachment: 'assets/images/big/img2.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
            },
            {
                from: 'Sunil joshi',
                time: '(3 minute ago)',
                image: 'assets/images/users/2.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
                buttons: 'primary'
            },
            {
                from: 'Vishal Bhatt',
                time: '(1 minute ago)',
                image: 'assets/images/users/3.jpg',
                attachment: 'assets/images/big/img1.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
            },
            {
                from: 'Dhiren Adesara',
                time: '(1 minute ago)',
                image: 'assets/images/users/4.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
                buttons: 'warn'
            }
        ];
    }
    ngOnInit() {
    }
}
ActivityComponent.??fac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(); };
ActivityComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], decls: 35, vars: 1, consts: [["label", "Activity"], ["class", "d-flex no-blcok", 4, "ngFor", "ngForOf"], ["label", "Profile"], [1, "basic-form"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Some text value"], ["matInput", "", "placeholder", "EmailId", "type", "email"], ["matInput", "", "placeholder", "Password", "type", "password"], ["placeholder", "Select"], ["value", "option"], ["matInput", "", "placeholder", "Textarea"], ["mat-raised-button", "", "color", "primary"], [1, "d-flex", "no-blcok"], [1, "m-r-20"], ["width", "50", 1, "img-circle", 3, "src", "alt"], [1, "m-b-30", "w-100"], [1, "m-0"], [1, "text-muted"], [1, "text-muted", "m-t-5"], ["fxFlex.gt-sm", "20", "fxFlex", "100"], ["class", "img-responsive rounded", 3, "src", "alt", 4, "ngIf"], ["mat-raised-button", "", 3, "color", 4, "ngIf"], [1, "m-t-30"], [1, "img-responsive", "rounded", 3, "src", "alt"], ["mat-raised-button", "", 3, "color"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ActivityComponent_div_4_Template, 15, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Form Basic Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Option2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Option3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Update Profile");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.mytimelines);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity',
                templateUrl: './activity.component.html',
                styleUrls: ['./activity.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/comments/comments.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/comments/comments.component.ts ***!
  \********************************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CommentsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const mycomment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", mycomment_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("label label-", mycomment_r1.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r1.status);
} }
class CommentsComponent {
    constructor() {
        // This is for the comments
        this.mycomments = [
            {
                name: 'James Anderson',
                content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                profile: 'assets/images/users/1.jpg',
                status: 'Pending',
                class: 'info',
                date: 'April 14, 2016'
            },
            {
                name: 'Michael Jorden',
                content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                profile: 'assets/images/users/2.jpg',
                status: 'Approved',
                class: 'light-success',
                date: 'April 14, 2016'
            },
            {
                name: 'James Anderson',
                content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                profile: 'assets/images/users/3.jpg',
                status: 'Pending',
                class: 'danger',
                date: 'April 14, 2016'
            },
            {
                name: 'Johnathan Doeting',
                content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                profile: 'assets/images/users/1.jpg',
                status: 'Pending',
                class: 'info',
                date: 'April 14, 2016'
            }
        ];
    }
    ngOnInit() {
    }
}
CommentsComponent.??fac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 8, vars: 1, consts: [[1, "comment-widgets"], ["class", "d-flex flex-row comment-row", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "comment-row"], [1, "p-2"], [1, "round"], ["alt", "user", "width", "50", 3, "src"], [1, "comment-text", "w-100", "p-t-0"], [1, "m-0"], [1, "m-b-5", "m-t-5"], [1, "comment-footer"], [1, "text-muted", "pull-right"], [1, "action-icons"], ["href", "javascript:void(0)"], [1, "ti-pencil-alt"], [1, "ti-check"], [1, "ti-heart"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Recent Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Latest Comments on users from Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CommentsComponent_div_7_Template, 21, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.mycomments);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/contact-list/contact-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/contact-list/contact-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








function ContactListComponent_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactListComponent_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", element_r10.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r10.name);
} }
function ContactListComponent_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactListComponent_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r11.email, " ");
} }
function ContactListComponent_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactListComponent_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Post:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r12.designation, " ");
} }
function ContactListComponent_mat_header_row_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
} }
function ContactListComponent_mat_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
} }
const _c0 = function () { return [5, 6, 10]; };
const ELEMENT_DATA = [
    {
        pic: 'assets/images/users/1.jpg',
        name: 'Nirav joshi',
        email: 'nirav@gmail.com',
        designation: 'Hacker'
    },
    {
        pic: 'assets/images/users/2.jpg',
        name: 'Sunil joshi',
        email: 'sunil@gmail.com',
        designation: 'Designer'
    },
    {
        pic: 'assets/images/users/3.jpg',
        name: 'John Deo',
        email: 'deo@gmail.com',
        designation: 'Developer'
    },
    {
        pic: 'assets/images/users/4.jpg',
        name: 'Beryllium Lon',
        email: 'lon@gmail.com',
        designation: 'Front end Developer'
    },
    {
        pic: 'assets/images/users/5.jpg',
        name: 'Boron son',
        email: 'son@gmail.com',
        designation: 'Hacker'
    },
    {
        pic: 'assets/images/users/6.jpg',
        name: 'Carbon hryt',
        email: 'carbon@gmail.com',
        designation: 'Senior Developer'
    },
    {
        pic: 'assets/images/users/7.jpg',
        name: 'Nitro oxur',
        email: 'nitro@gmail.com',
        designation: 'Junior Developer'
    },
    {
        pic: 'assets/images/users/1.jpg',
        name: 'Nirav joshi',
        email: 'nirav@gmail.com',
        designation: 'Hacker'
    },
    {
        pic: 'assets/images/users/2.jpg',
        name: 'Sunil joshi',
        email: 'sunil@gmail.com',
        designation: 'Designer'
    },
    {
        pic: 'assets/images/users/3.jpg',
        name: 'John Deo',
        email: 'deo@gmail.com',
        designation: 'Developer'
    },
    {
        pic: 'assets/images/users/4.jpg',
        name: 'Beryllium Lon',
        email: 'lon@gmail.com',
        designation: 'Front end Developer'
    },
    {
        pic: 'assets/images/users/5.jpg',
        name: 'Boron son',
        email: 'son@gmail.com',
        designation: 'Hacker'
    }
];
class ContactListComponent {
    constructor(breakpointObserver) {
        this.displayedColumns = ['name', 'email', 'designation'];
        // tslint:disable-next-line:member-ordering
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        // tslint:disable-next-line:member-ordering
        this.paginator = Object.create(null);
        breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
            this.displayedColumns = result.matches ?
                ['name', 'email', 'designation'] :
                ['name', 'email', 'designation'];
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
ContactListComponent.??fac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
ContactListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], viewQuery: function ContactListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 20, vars: 6, consts: [[1, "responsive-table", "m-t-5"], [1, "contactlist", 3, "dataSource"], ["table", ""], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "designation"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "header-label"], ["width", "30", 1, "img-circle", "m-r-10", 3, "src"], [1, "m-0"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Contact list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ContactListComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ContactListComponent_mat_cell_9_Template, 6, 2, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ContactListComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ContactListComponent_mat_cell_12_Template, 4, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ContactListComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ContactListComponent_mat_cell_15_Template, 4, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ContactListComponent_mat_header_row_16_Template, 1, 0, "mat-header-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ContactListComponent_mat_row_17_Template, 1, 0, "mat-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "mat-paginator", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSize", 6)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/developer-info/developer-info.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/developer-info/developer-info.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeveloperInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperInfoComponent", function() { return DeveloperInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");





class DeveloperInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeveloperInfoComponent.??fac = function DeveloperInfoComponent_Factory(t) { return new (t || DeveloperInfoComponent)(); };
DeveloperInfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeveloperInfoComponent, selectors: [["app-developer-info"]], decls: 28, vars: 0, consts: [[1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Photo of a Shiba Inu", 1, "profile-bg-height"], [1, "pro-img"], ["src", "assets/images/users/4.jpg", "width", "100", "alt", "user"], [1, "m-b-0"], [1, "m-t-0"], ["mat-raised-button", "", "color", "warn"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100"], [1, "m-0", "font-light"]], template: function DeveloperInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Angela Dominic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Web Designer & Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "1099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "23,469");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "6035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: ["@media (min-width: 768px) {\n  .profile-bg-height[_ngcontent-%COMP%] {\n    max-height: 187px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQtY29tcG9uZW50cy9kZXZlbG9wZXItaW5mby9kZXZlbG9wZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQtY29tcG9uZW50cy9kZXZlbG9wZXItaW5mby9kZXZlbG9wZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9maWxlLWJnLWhlaWdodCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxODdweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeveloperInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-developer-info',
                templateUrl: './developer-info.component.html',
                styleUrls: ['./developer-info.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/income-expenss/income-expenss.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/income-expenss/income-expenss.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IncomeExpenssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeExpenssComponent", function() { return IncomeExpenssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");





const _c0 = ["chart"];
class IncomeExpenssComponent {
    constructor() {
        this.chart = Object.create(null);
        this.inexpuchartOptions = {
            series: [
                {
                    name: '',
                    data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1]
                }
            ],
            chart: {
                type: 'bar',
                height: 90,
                fontFamily: 'Poppins,sans-serif',
                sparkline: {
                    enabled: true
                }
            },
            grid: {
                borderColor: 'rgba(0,0,0,.2)',
                strokeDashArray: 3,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    endingShape: 'flat'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul'
                ]
            },
            legend: {
                show: false,
            },
            fill: {
                colors: ['rgba(255, 255, 255, 0.5)'],
                opacity: 1
            },
            tooltip: {
                theme: "dark",
                fillSeriesColor: false,
                marker: {
                    show: true,
                    fillColors: ['#fff']
                },
                x: {
                    show: false
                }
            }
        };
    }
    ngOnInit() {
    }
}
IncomeExpenssComponent.??fac = function IncomeExpenssComponent_Factory(t) { return new (t || IncomeExpenssComponent)(); };
IncomeExpenssComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: IncomeExpenssComponent, selectors: [["app-income-expenss"]], viewQuery: function IncomeExpenssComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 40, vars: 33, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "33.33", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-info"], [1, "d-flex", "no-block", "align-items-center"], [1, "stats"], [1, "text-white", "m-0"], [1, "text-white", "m-t-0"], [1, "ml-auto", 2, "height", "84px", "width", "100px"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "grid"], [1, "bg-purple"], [1, "bg-success"]], template: function IncomeExpenssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "March 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "35487");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "March 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "35487");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "March 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "35487");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.inexpuchartOptions.series)("chart", ctx.inexpuchartOptions.chart)("dataLabels", ctx.inexpuchartOptions.dataLabels)("plotOptions", ctx.inexpuchartOptions.plotOptions)("yaxis", ctx.inexpuchartOptions.yaxis)("legend", ctx.inexpuchartOptions.legend)("fill", ctx.inexpuchartOptions.fill)("stroke", ctx.inexpuchartOptions.stroke)("tooltip", ctx.inexpuchartOptions.tooltip)("xaxis", ctx.inexpuchartOptions.xaxis)("grid", ctx.inexpuchartOptions.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.inexpuchartOptions.series)("chart", ctx.inexpuchartOptions.chart)("dataLabels", ctx.inexpuchartOptions.dataLabels)("plotOptions", ctx.inexpuchartOptions.plotOptions)("yaxis", ctx.inexpuchartOptions.yaxis)("legend", ctx.inexpuchartOptions.legend)("fill", ctx.inexpuchartOptions.fill)("stroke", ctx.inexpuchartOptions.stroke)("tooltip", ctx.inexpuchartOptions.tooltip)("xaxis", ctx.inexpuchartOptions.xaxis)("grid", ctx.inexpuchartOptions.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.inexpuchartOptions.series)("chart", ctx.inexpuchartOptions.chart)("dataLabels", ctx.inexpuchartOptions.dataLabels)("plotOptions", ctx.inexpuchartOptions.plotOptions)("yaxis", ctx.inexpuchartOptions.yaxis)("legend", ctx.inexpuchartOptions.legend)("fill", ctx.inexpuchartOptions.fill)("stroke", ctx.inexpuchartOptions.stroke)("tooltip", ctx.inexpuchartOptions.tooltip)("xaxis", ctx.inexpuchartOptions.xaxis)("grid", ctx.inexpuchartOptions.grid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvaW5jb21lLWV4cGVuc3MvaW5jb21lLWV4cGVuc3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IncomeExpenssComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-income-expenss',
                templateUrl: './income-expenss.component.html',
                styleUrls: ['./income-expenss.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/index.ts ***!
  \**********************************************************/
/*! exports provided: TopCardComponent, SalesOverviewComponent, VisitorComponent, Visitor2Component, IncomeExpenssComponent, PostsComponent, NewsletterComponent, DeveloperInfoComponent, ActivityComponent, TopCard2Component, SalesPurchaseComponent, SalesYearlyComponent, ContactListComponent, CommentsComponent, MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_card_top_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-card/top-card.component */ "./src/app/dashboards/dashboard-components/top-card/top-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopCardComponent", function() { return _top_card_top_card_component__WEBPACK_IMPORTED_MODULE_0__["TopCardComponent"]; });

/* harmony import */ var _sales_overview_sales_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-overview/sales-overview.component */ "./src/app/dashboards/dashboard-components/sales-overview/sales-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesOverviewComponent", function() { return _sales_overview_sales_overview_component__WEBPACK_IMPORTED_MODULE_1__["SalesOverviewComponent"]; });

/* harmony import */ var _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor/visitor.component */ "./src/app/dashboards/dashboard-components/visitor/visitor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_2__["VisitorComponent"]; });

/* harmony import */ var _visitor2_visitor2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor2/visitor2.component */ "./src/app/dashboards/dashboard-components/visitor2/visitor2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Visitor2Component", function() { return _visitor2_visitor2_component__WEBPACK_IMPORTED_MODULE_3__["Visitor2Component"]; });

/* harmony import */ var _income_expenss_income_expenss_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-expenss/income-expenss.component */ "./src/app/dashboards/dashboard-components/income-expenss/income-expenss.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncomeExpenssComponent", function() { return _income_expenss_income_expenss_component__WEBPACK_IMPORTED_MODULE_4__["IncomeExpenssComponent"]; });

/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/dashboards/dashboard-components/posts/posts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]; });

/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter/newsletter.component */ "./src/app/dashboards/dashboard-components/newsletter/newsletter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__["NewsletterComponent"]; });

/* harmony import */ var _developer_info_developer_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developer-info/developer-info.component */ "./src/app/dashboards/dashboard-components/developer-info/developer-info.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeveloperInfoComponent", function() { return _developer_info_developer_info_component__WEBPACK_IMPORTED_MODULE_7__["DeveloperInfoComponent"]; });

/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/dashboards/dashboard-components/activity/activity.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return _activity_activity_component__WEBPACK_IMPORTED_MODULE_8__["ActivityComponent"]; });

/* harmony import */ var _top_card2_top_card2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-card2/top-card2.component */ "./src/app/dashboards/dashboard-components/top-card2/top-card2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopCard2Component", function() { return _top_card2_top_card2_component__WEBPACK_IMPORTED_MODULE_9__["TopCard2Component"]; });

/* harmony import */ var _sales_purchase_sales_purchase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales-purchase/sales-purchase.component */ "./src/app/dashboards/dashboard-components/sales-purchase/sales-purchase.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesPurchaseComponent", function() { return _sales_purchase_sales_purchase_component__WEBPACK_IMPORTED_MODULE_10__["SalesPurchaseComponent"]; });

/* harmony import */ var _sales_yearly_sales_yearly_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sales-yearly/sales-yearly.component */ "./src/app/dashboards/dashboard-components/sales-yearly/sales-yearly.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesYearlyComponent", function() { return _sales_yearly_sales_yearly_component__WEBPACK_IMPORTED_MODULE_11__["SalesYearlyComponent"]; });

/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/dashboards/dashboard-components/contact-list/contact-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_12__["ContactListComponent"]; });

/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/dashboards/dashboard-components/comments/comments.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return _comments_comments_component__WEBPACK_IMPORTED_MODULE_13__["CommentsComponent"]; });

/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message/message.component */ "./src/app/dashboards/dashboard-components/message/message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"]; });


















/***/ }),

/***/ "./src/app/dashboards/dashboard-components/message/message.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/message/message.component.ts ***!
  \******************************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MessageComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const mymessage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", mymessage_r1.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("profile-status ", mymessage_r1.status, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mymessage_r1.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mymessage_r1.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mymessage_r1.time);
} }
class MessageComponent {
    constructor() {
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/3.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/6.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/7.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
        ];
    }
    ngOnInit() {
    }
}
MessageComponent.??fac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(); };
MessageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 9, vars: 1, consts: [[1, "mailbox", "message-widget", "m-t-30"], [1, "message-center"], ["href", "#", 4, "ngFor", "ngForOf"], ["href", "#"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"], [1, "mail-content"], [1, "mail-desc"], [1, "time"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Recent Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Latest Messages on users from Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, MessageComponent_a_8_Template, 11, 7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.mymessages);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                templateUrl: './message.component.html',
                styleUrls: ['./message.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/newsletter/newsletter.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/newsletter/newsletter.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");




const _c0 = ["newsletter-chart"];
class NewsletterComponent {
    constructor() {
        this.chart3 = Object.create(null);
        this.newsletterchartOptions = {
            series: [
                {
                    name: 'Clicked',
                    data: [0, 5000, 15000, 8000, 15000, 9000, 30000, 0]
                },
                {
                    name: 'Sent',
                    data: [0, 3000, 5000, 2000, 8000, 1000, 5000, 0]
                }
            ],
            chart: {
                height: 290,
                fontFamily: 'Poppins,sans-serif',
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 3,
            },
            stroke: {
                curve: 'smooth',
                width: '2'
            },
            colors: ['#26c6da', '#1e88e5'],
            legend: {
                show: false,
            },
            grid: {
                borderColor: 'rgba(0,0,0,.2)',
                strokeDashArray: 3,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                xaxis: {
                    lines: {
                        show: true
                    }
                },
            },
            xaxis: {
                type: 'category',
                categories: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8'
                ]
            },
            tooltip: {
                theme: "dark",
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            }
        };
    }
    ngOnInit() {
    }
}
NewsletterComponent.??fac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(); };
NewsletterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewsletterComponent, selectors: [["app-newsletter"]], viewQuery: function NewsletterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart3 = _t.first);
    } }, decls: 17, vars: 9, consts: [["id", "newsletter-chart"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels", "legend", "colors", "markers"], [1, "list-inline", "text-center", "p-t-10"], [1, "text-muted", "text-info", "m-0"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-success", "m-0"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Newsletter Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Overview of Newsletter Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Clicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.newsletterchartOptions.series)("chart", ctx.newsletterchartOptions.chart)("xaxis", ctx.newsletterchartOptions.xaxis)("stroke", ctx.newsletterchartOptions.stroke)("tooltip", ctx.newsletterchartOptions.tooltip)("dataLabels", ctx.newsletterchartOptions.dataLabels)("legend", ctx.newsletterchartOptions.legend)("colors", ctx.newsletterchartOptions.colors)("markers", ctx.newsletterchartOptions.markers);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvbmV3c2xldHRlci9uZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsletterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newsletter',
                templateUrl: './newsletter.component.html',
                styleUrls: ['./newsletter.component.scss']
            }]
    }], function () { return []; }, { chart3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['newsletter-chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/posts/posts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/posts/posts.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostsComponent.??fac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(); };
PostsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 10, vars: 0, consts: [[1, "oh"], ["mat-card-image", "", "src", "assets/images/big/img1.jpg", "alt", "Photo of a Shiba Inu", 2, "max-height", "300px"], ["mat-raised-button", "", "color", "accent"], ["mat-button", ""]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/sales-overview/sales-overview.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/sales-overview/sales-overview.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SalesOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOverviewComponent", function() { return SalesOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");




const _c0 = ["chart"];
class SalesOverviewComponent {
    constructor() {
        this.chart = Object.create(null);
        this.chartOptions = {
            series: [
                {
                    name: 'Pixel',
                    data: [44, 55, 57, 56, 61, 58]
                },
                {
                    name: 'Ample',
                    data: [76, 85, 101, 98, 87, 105]
                }
            ],
            chart: {
                type: 'bar',
                fontFamily: 'Poppins,sans-serif',
                height: 347
            },
            grid: {
                borderColor: 'rgba(0,0,0,.2)',
                strokeDashArray: 3,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    endingShape: 'flat'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul'
                ]
            },
            legend: {
                show: false,
            },
            fill: {
                colors: ['#26c6da', '#1e88e5'],
                opacity: 1
            },
            tooltip: {
                theme: "dark",
                fillSeriesColor: false,
                marker: {
                    show: false,
                },
            }
        };
    }
    ngOnInit() {
    }
}
SalesOverviewComponent.??fac = function SalesOverviewComponent_Factory(t) { return new (t || SalesOverviewComponent)(); };
SalesOverviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SalesOverviewComponent, selectors: [["app-sales-overview"]], viewQuery: function SalesOverviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 17, vars: 11, consts: [["id", "chart"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "grid"], [1, "list-inline", "text-center"], [1, "text-muted", "text-info", "m-0"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-success", "m-0"]], template: function SalesOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Sales Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Ample Admin Vs Material Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Ample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Pixel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("grid", ctx.chartOptions.grid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvc2FsZXMtb3ZlcnZpZXcvc2FsZXMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SalesOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales-overview',
                templateUrl: './sales-overview.component.html',
                styleUrls: ['./sales-overview.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/sales-purchase/sales-purchase.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/sales-purchase/sales-purchase.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SalesPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPurchaseComponent", function() { return SalesPurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");





const _c0 = ["chart"];
class SalesPurchaseComponent {
    constructor() {
        this.chart = Object.create(null);
        this.inexpu2chartOptions = {
            series: [
                {
                    name: '',
                    data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1]
                }
            ],
            chart: {
                type: 'bar',
                fontFamily: 'Poppins,sans-serif',
                height: 90,
                sparkline: {
                    enabled: true
                }
            },
            grid: {
                borderColor: 'rgba(0,0,0,.2)',
                strokeDashArray: 3,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    endingShape: 'flat'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul'
                ]
            },
            legend: {
                show: false,
            },
            fill: {
                colors: ['rgba(255, 255, 255, 0.5)'],
                opacity: 1
            },
            tooltip: {
                theme: "dark",
                fillSeriesColor: false,
                marker: {
                    show: true,
                    fillColors: ['#fff']
                },
                x: {
                    show: false
                }
            }
        };
    }
    ngOnInit() {
    }
}
SalesPurchaseComponent.??fac = function SalesPurchaseComponent_Factory(t) { return new (t || SalesPurchaseComponent)(); };
SalesPurchaseComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SalesPurchaseComponent, selectors: [["app-sales-purchase"]], viewQuery: function SalesPurchaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 28, vars: 22, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-success"], [1, "d-flex", "p-t-20", "p-b-20", "no-block", "align-items-center"], [1, "stats"], [1, "text-white", "m-0"], [1, "text-white", "m-t-0"], [1, "ml-auto", 2, "height", "84px", "width", "100px"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "grid"], [1, "bg-purple"]], template: function SalesPurchaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "March 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "35487");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "March 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "35487");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.inexpu2chartOptions.series)("chart", ctx.inexpu2chartOptions.chart)("dataLabels", ctx.inexpu2chartOptions.dataLabels)("plotOptions", ctx.inexpu2chartOptions.plotOptions)("yaxis", ctx.inexpu2chartOptions.yaxis)("legend", ctx.inexpu2chartOptions.legend)("fill", ctx.inexpu2chartOptions.fill)("stroke", ctx.inexpu2chartOptions.stroke)("tooltip", ctx.inexpu2chartOptions.tooltip)("xaxis", ctx.inexpu2chartOptions.xaxis)("grid", ctx.inexpu2chartOptions.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.inexpu2chartOptions.series)("chart", ctx.inexpu2chartOptions.chart)("dataLabels", ctx.inexpu2chartOptions.dataLabels)("plotOptions", ctx.inexpu2chartOptions.plotOptions)("yaxis", ctx.inexpu2chartOptions.yaxis)("legend", ctx.inexpu2chartOptions.legend)("fill", ctx.inexpu2chartOptions.fill)("stroke", ctx.inexpu2chartOptions.stroke)("tooltip", ctx.inexpu2chartOptions.tooltip)("xaxis", ctx.inexpu2chartOptions.xaxis)("grid", ctx.inexpu2chartOptions.grid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvc2FsZXMtcHVyY2hhc2Uvc2FsZXMtcHVyY2hhc2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SalesPurchaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales-purchase',
                templateUrl: './sales-purchase.component.html',
                styleUrls: ['./sales-purchase.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/sales-yearly/sales-yearly.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/sales-yearly/sales-yearly.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SalesYearlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesYearlyComponent", function() { return SalesYearlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");




const _c0 = ["chart"];
class SalesYearlyComponent {
    constructor() {
        this.chart = Object.create(null);
        this.chartOptions = {
            series: [
                {
                    name: 'Ample',
                    data: [9, 4, 11, 7, 10, 12]
                },
                {
                    name: 'Pixel',
                    data: [3, 2, 9, 5, 8, 10]
                }
            ],
            chart: {
                type: 'bar',
                fontFamily: 'Poppins,sans-serif',
                height: 320
            },
            grid: {
                borderColor: 'rgba(0,0,0,.2)',
                strokeDashArray: 3,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    endingShape: 'flat'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct'
                ]
            },
            legend: {
                show: false,
            },
            fill: {
                colors: ['#26c6da', '#1e88e5'],
                opacity: 1
            },
            tooltip: {
                theme: "dark",
                fillSeriesColor: false,
                marker: {
                    show: true,
                    fillColors: ['#26c6da', '#1e88e5']
                }
            },
        };
    }
    ngOnInit() {
    }
}
SalesYearlyComponent.??fac = function SalesYearlyComponent_Factory(t) { return new (t || SalesYearlyComponent)(); };
SalesYearlyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SalesYearlyComponent, selectors: [["app-sales-yearly"]], viewQuery: function SalesYearlyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 8, vars: 11, consts: [["id", "chart"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "grid"]], template: function SalesYearlyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Sales Yealry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This is the simple example of bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("grid", ctx.chartOptions.grid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvc2FsZXMteWVhcmx5L3NhbGVzLXllYXJseS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SalesYearlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales-yearly',
                templateUrl: './sales-yearly.component.html',
                styleUrls: ['./sales-yearly.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/top-card/top-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/top-card/top-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: TopCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopCardComponent", function() { return TopCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class TopCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopCardComponent.??fac = function TopCardComponent_Factory(t) { return new (t || TopCardComponent)(); };
TopCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TopCardComponent, selectors: [["app-top-card"]], decls: 53, vars: 0, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "d-flex", "no-block"], [1, "m-r-10", "no-shrink"], ["mat-fab", "", "mat-card-icon", "", 1, "shadow-none", "bg-inverse", "bg-success"], [1, "m-0"], [1, "text-muted", "m-0"], ["mat-fab", "", "color", "warn", "mat-card-icon", "", 1, "shadow-none", "bg-warning"], ["mat-fab", "", "color", "accent", "mat-card-icon", "", 1, "shadow-none"], ["mat-fab", "", "color", "warn", "mat-card-icon", "", 1, "shadow-none", "bg-danger"]], template: function TopCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "386");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "New Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "local_mall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "2408");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "352");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "New Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "content_paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "159");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "New Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvdG9wLWNhcmQvdG9wLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-card',
                templateUrl: './top-card.component.html',
                styleUrls: ['./top-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/top-card2/top-card2.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/top-card2/top-card2.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TopCard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopCard2Component", function() { return TopCard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");





class TopCard2Component {
    constructor() { }
    ngOnInit() {
    }
}
TopCard2Component.??fac = function TopCard2Component_Factory(t) { return new (t || TopCard2Component)(); };
TopCard2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TopCard2Component, selectors: [["app-top-card2"]], decls: 37, vars: 0, consts: [[1, "card-group"], [1, "text-info"], [1, "m-0"], [1, "text-muted", "m-t-0", "m-b-10"], ["mode", "determinate", "value", "40"], [1, "text-danger"], ["color", "warn", "mode", "determinate", "value", "60"], [1, "text-purple"], ["color", "accent", "mode", "determinate", "value", "80"]], template: function TopCard2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "386");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "New Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "local_mall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "1386");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "986");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "New Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "mat-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "content_paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "786");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "New Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvdG9wLWNhcmQyL3RvcC1jYXJkMi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopCard2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-card2',
                templateUrl: './top-card2.component.html',
                styleUrls: ['./top-card2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/visitor/visitor.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/visitor/visitor.component.ts ***!
  \******************************************************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");




const _c0 = ["visitor-chart"];
class VisitorComponent {
    constructor() {
        this.chart2 = Object.create(null);
        this.VisitorChartOptions = {
            series: [45, 15, 27, 18],
            chart: {
                type: 'donut',
                fontFamily: 'Poppins,sans-serif',
                height: 230
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '80px'
                    }
                }
            },
            tooltip: {
                fillSeriesColor: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 0
            },
            legend: {
                show: false,
            },
            labels: ['Mobile', 'Tablet', 'Desktop', 'Other'],
            colors: ['#1e88e5', '#26c6da', '#745af2', '#eceff1'],
            responsive: [
                {
                    breakpoint: 767,
                    options: {
                        chart: {
                            width: 200
                        }
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
}
VisitorComponent.??fac = function VisitorComponent_Factory(t) { return new (t || VisitorComponent)(); };
VisitorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VisitorComponent, selectors: [["app-visitor"]], viewQuery: function VisitorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart2 = _t.first);
    } }, decls: 23, vars: 10, consts: [["id", "visitor-chart", 1, "m-t-40", "p-t-30", "p-b-20"], [3, "series", "chart", "labels", "responsive", "tooltip", "legend", "colors", "dataLabels", "plotOptions", "stroke"], [1, "list-inline", "text-center", "m-t-30", "m-b-30"], [1, "text-muted", "text-success", "m-0"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-info", "m-0"], [1, "text-muted", "text-purple", "m-0"]], template: function VisitorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Our Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Different Devices Used to Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Tablet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.VisitorChartOptions.series)("chart", ctx.VisitorChartOptions.chart)("labels", ctx.VisitorChartOptions.labels)("responsive", ctx.VisitorChartOptions.responsive)("tooltip", ctx.VisitorChartOptions.tooltip)("legend", ctx.VisitorChartOptions.legend)("colors", ctx.VisitorChartOptions.colors)("dataLabels", ctx.VisitorChartOptions.dataLabels)("plotOptions", ctx.VisitorChartOptions.plotOptions)("stroke", ctx.VisitorChartOptions.stroke);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvdmlzaXRvci92aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VisitorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visitor',
                templateUrl: './visitor.component.html',
                styleUrls: ['./visitor.component.scss']
            }]
    }], function () { return []; }, { chart2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['visitor-chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard-components/visitor2/visitor2.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/visitor2/visitor2.component.ts ***!
  \********************************************************************************/
/*! exports provided: Visitor2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitor2Component", function() { return Visitor2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");




const _c0 = ["visitor-chart"];
class Visitor2Component {
    constructor() {
        this.chart5 = Object.create(null);
        this.VisitorChartOptions = {
            series: [45, 15, 27, 18],
            chart: {
                type: 'donut',
                fontFamily: 'Poppins,sans-serif',
                height: 230
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '80px'
                    }
                }
            },
            tooltip: {
                fillSeriesColor: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 0
            },
            legend: {
                show: false,
            },
            labels: ['Mobile', 'Tablet', 'Desktop', 'Other'],
            colors: ['#1e88e5', '#26c6da', '#745af2', '#eceff1'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        }
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
}
Visitor2Component.??fac = function Visitor2Component_Factory(t) { return new (t || Visitor2Component)(); };
Visitor2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Visitor2Component, selectors: [["app-visitor2"]], viewQuery: function Visitor2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart5 = _t.first);
    } }, decls: 23, vars: 10, consts: [["id", "visitor-chart"], [3, "series", "chart", "labels", "responsive", "tooltip", "legend", "colors", "dataLabels", "plotOptions", "stroke"], [1, "list-inline", "text-center"], [1, "text-muted", "text-success", "m-0"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-info", "m-0"], [1, "text-muted", "text-purple", "m-0"]], template: function Visitor2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Our Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Different Devices Used to Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Tablet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.VisitorChartOptions.series)("chart", ctx.VisitorChartOptions.chart)("labels", ctx.VisitorChartOptions.labels)("responsive", ctx.VisitorChartOptions.responsive)("tooltip", ctx.VisitorChartOptions.tooltip)("legend", ctx.VisitorChartOptions.legend)("colors", ctx.VisitorChartOptions.colors)("dataLabels", ctx.VisitorChartOptions.dataLabels)("plotOptions", ctx.VisitorChartOptions.plotOptions)("stroke", ctx.VisitorChartOptions.stroke);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWNvbXBvbmVudHMvdmlzaXRvcjIvdmlzaXRvcjIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Visitor2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visitor2',
                templateUrl: './visitor2.component.html',
                styleUrls: ['./visitor2.component.scss']
            }]
    }], function () { return []; }, { chart5: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['visitor-chart']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard1/dashboard1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard1/dashboard1.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_components_top_card_top_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-components/top-card/top-card.component */ "./src/app/dashboards/dashboard-components/top-card/top-card.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _dashboard_components_sales_overview_sales_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-components/sales-overview/sales-overview.component */ "./src/app/dashboards/dashboard-components/sales-overview/sales-overview.component.ts");
/* harmony import */ var _dashboard_components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-components/visitor/visitor.component */ "./src/app/dashboards/dashboard-components/visitor/visitor.component.ts");
/* harmony import */ var _dashboard_components_income_expenss_income_expenss_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard-components/income-expenss/income-expenss.component */ "./src/app/dashboards/dashboard-components/income-expenss/income-expenss.component.ts");
/* harmony import */ var _dashboard_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard-components/posts/posts.component */ "./src/app/dashboards/dashboard-components/posts/posts.component.ts");
/* harmony import */ var _dashboard_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard-components/newsletter/newsletter.component */ "./src/app/dashboards/dashboard-components/newsletter/newsletter.component.ts");
/* harmony import */ var _dashboard_components_developer_info_developer_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard-components/developer-info/developer-info.component */ "./src/app/dashboards/dashboard-components/developer-info/developer-info.component.ts");
/* harmony import */ var _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dashboard-components/activity/activity.component */ "./src/app/dashboards/dashboard-components/activity/activity.component.ts");











class Dashboard1Component {
}
Dashboard1Component.??fac = function Dashboard1Component_Factory(t) { return new (t || Dashboard1Component)(); };
Dashboard1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Dashboard1Component, selectors: [["app-dashboard"]], decls: 17, vars: 0, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"]], template: function Dashboard1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-top-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-sales-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-visitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-income-expenss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "app-newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "app-developer-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_dashboard_components_top_card_top_card_component__WEBPACK_IMPORTED_MODULE_1__["TopCardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _dashboard_components_sales_overview_sales_overview_component__WEBPACK_IMPORTED_MODULE_3__["SalesOverviewComponent"], _dashboard_components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"], _dashboard_components_income_expenss_income_expenss_component__WEBPACK_IMPORTED_MODULE_5__["IncomeExpenssComponent"], _dashboard_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"], _dashboard_components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_7__["NewsletterComponent"], _dashboard_components_developer_info_developer_info_component__WEBPACK_IMPORTED_MODULE_8__["DeveloperInfoComponent"], _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_9__["ActivityComponent"]], styles: [".piechart[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 280px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQxL2Rhc2hib2FyZDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZWNoYXJ0IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dashboard1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard1.component.html',
                styleUrls: ['./dashboard1.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboard2/dashboard2.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard2/dashboard2.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_components_top_card2_top_card2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-components/top-card2/top-card2.component */ "./src/app/dashboards/dashboard-components/top-card2/top-card2.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _dashboard_components_sales_purchase_sales_purchase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-components/sales-purchase/sales-purchase.component */ "./src/app/dashboards/dashboard-components/sales-purchase/sales-purchase.component.ts");
/* harmony import */ var _dashboard_components_visitor2_visitor2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-components/visitor2/visitor2.component */ "./src/app/dashboards/dashboard-components/visitor2/visitor2.component.ts");
/* harmony import */ var _dashboard_components_sales_yearly_sales_yearly_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard-components/sales-yearly/sales-yearly.component */ "./src/app/dashboards/dashboard-components/sales-yearly/sales-yearly.component.ts");
/* harmony import */ var _dashboard_components_developer_info_developer_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard-components/developer-info/developer-info.component */ "./src/app/dashboards/dashboard-components/developer-info/developer-info.component.ts");
/* harmony import */ var _dashboard_components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard-components/contact-list/contact-list.component */ "./src/app/dashboards/dashboard-components/contact-list/contact-list.component.ts");
/* harmony import */ var _dashboard_components_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard-components/comments/comments.component */ "./src/app/dashboards/dashboard-components/comments/comments.component.ts");
/* harmony import */ var _dashboard_components_message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dashboard-components/message/message.component */ "./src/app/dashboards/dashboard-components/message/message.component.ts");











class Dashboard2Component {
    // This is for the table responsive
    constructor() {
    }
}
Dashboard2Component.??fac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(); };
Dashboard2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 18, vars: 0, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-md", "33.33", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-top-card2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-sales-purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-visitor2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-sales-yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "app-developer-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "app-contact-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_dashboard_components_top_card2_top_card2_component__WEBPACK_IMPORTED_MODULE_1__["TopCard2Component"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _dashboard_components_sales_purchase_sales_purchase_component__WEBPACK_IMPORTED_MODULE_3__["SalesPurchaseComponent"], _dashboard_components_visitor2_visitor2_component__WEBPACK_IMPORTED_MODULE_4__["Visitor2Component"], _dashboard_components_sales_yearly_sales_yearly_component__WEBPACK_IMPORTED_MODULE_5__["SalesYearlyComponent"], _dashboard_components_developer_info_developer_info_component__WEBPACK_IMPORTED_MODULE_6__["DeveloperInfoComponent"], _dashboard_components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"], _dashboard_components_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__["CommentsComponent"], _dashboard_components_message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"]], styles: [".saleschart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contactlist[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  padding: 6px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsZXNjaGFydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhY3RsaXN0IC5tYXQtcm93IHtcclxuICBwYWRkaW5nOiA2cHggMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dashboard2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard2',
                templateUrl: './dashboard2.component.html',
                styleUrls: ['./dashboard2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboards.module.ts ***!
  \*************************************************/
/*! exports provided: DashboardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsModule", function() { return DashboardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _dashboards_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboards.routing */ "./src/app/dashboards/dashboards.routing.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboards/dashboard2/dashboard2.component.ts");
/* harmony import */ var _dashboard_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-components */ "./src/app/dashboards/dashboard-components/index.ts");














class DashboardsModule {
}
DashboardsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DashboardsModule });
DashboardsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function DashboardsModule_Factory(t) { return new (t || DashboardsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboards_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardsRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardsModule, { declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_9__["Dashboard1Component"],
        _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_10__["Dashboard2Component"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["TopCardComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["SalesOverviewComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["VisitorComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["Visitor2Component"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["IncomeExpenssComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["NewsletterComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["DeveloperInfoComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["ActivityComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["TopCard2Component"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["SalesPurchaseComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["SalesYearlyComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["ContactListComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"],
        _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboards_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardsRoutes"])
                ],
                declarations: [
                    _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_9__["Dashboard1Component"],
                    _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_10__["Dashboard2Component"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["TopCardComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["SalesOverviewComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["VisitorComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["Visitor2Component"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["IncomeExpenssComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["NewsletterComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["DeveloperInfoComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["ActivityComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["TopCard2Component"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["SalesPurchaseComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["SalesYearlyComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["ContactListComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"],
                    _dashboard_components__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboards/dashboards.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboards/dashboards.routing.ts ***!
  \**************************************************/
/*! exports provided: DashboardsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsRoutes", function() { return DashboardsRoutes; });
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboards/dashboard2/dashboard2.component.ts");


const DashboardsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard1',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard1Component"],
                data: {
                    title: 'Dashboard 1',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Dashboard 1' }
                    ]
                }
            },
            {
                path: 'dashboard2',
                component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__["Dashboard2Component"],
                data: {
                    title: 'Dashboard 2',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Dashboard 2' }
                    ]
                }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboards-dashboards-module.js.map