(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_form-pengajuan_form-pengajuan_module_ts"],{

/***/ 8129:
/*!*****************************************************************!*\
  !*** ./src/app/form-pengajuan/form-pengajuan-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPengajuanPageRoutingModule": () => (/* binding */ FormPengajuanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _form_pengajuan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-pengajuan.page */ 3286);




const routes = [
    {
        path: '',
        component: _form_pengajuan_page__WEBPACK_IMPORTED_MODULE_0__.FormPengajuanPage
    }
];
let FormPengajuanPageRoutingModule = class FormPengajuanPageRoutingModule {
};
FormPengajuanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPengajuanPageRoutingModule);



/***/ }),

/***/ 7076:
/*!*********************************************************!*\
  !*** ./src/app/form-pengajuan/form-pengajuan.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPengajuanPageModule": () => (/* binding */ FormPengajuanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _form_pengajuan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-pengajuan-routing.module */ 8129);
/* harmony import */ var _form_pengajuan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-pengajuan.page */ 3286);








let FormPengajuanPageModule = class FormPengajuanPageModule {
};
FormPengajuanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _form_pengajuan_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPengajuanPageRoutingModule
        ],
        declarations: [_form_pengajuan_page__WEBPACK_IMPORTED_MODULE_1__.FormPengajuanPage]
    })
], FormPengajuanPageModule);



/***/ }),

/***/ 3286:
/*!*******************************************************!*\
  !*** ./src/app/form-pengajuan/form-pengajuan.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPengajuanPage": () => (/* binding */ FormPengajuanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_form_pengajuan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-pengajuan.page.html */ 7610);
/* harmony import */ var _form_pengajuan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-pengajuan.page.scss */ 2622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'api-key': '610644b1eba3e' })
};
const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";
let FormPengajuanPage = class FormPengajuanPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.FormSimpanData = {};
    }
    pengajuan() {
        let params = new URLSearchParams();
        for (let key in this.FormSimpanData) {
            params.set(key, this.FormSimpanData[key]);
        }
        this.http.post(`${apiUrl}/pengajuan`, params, httpOptions).subscribe(res => {
            console.log(res);
            this.navCtrl.navigateBack('/home');
        }, (err) => {
            console.log(err);
        });
    }
};
FormPengajuanPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
FormPengajuanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-pengajuan',
        template: _raw_loader_form_pengajuan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_pengajuan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPengajuanPage);



/***/ }),

/***/ 2622:
/*!*********************************************************!*\
  !*** ./src/app/form-pengajuan/form-pengajuan.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXBlbmdhanVhbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7610:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-pengajuan/form-pengajuan.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Form Penambahan Data (Barang Masuk)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <form (ngSubmit)=\"pengajuan()\">\n                  <ion-item>                                     \n                      <ion-label color=\"primary\" position=\"stacked\">Nama Barang</ion-label>\n                      <ion-input type=\"text\" [(ngModel)]=\"FormSimpanData.product_name\" name=\"product_name\" ></ion-input>                 \n                  </ion-item> \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Nama Admin</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"FormSimpanData.admin\" name=\"admin\" ></ion-input>                 \n                </ion-item>   \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Jumlah</ion-label>\n                    <ion-input type=\"number\" [(ngModel)]=\"FormSimpanData.quantity\" name=\"quantity\" ></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Deskripsi</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"FormSimpanData.desk\" name=\"desk\" ></ion-input>                 \n                  </ion-item>        \n                    <ion-button expand=\"block\"  type=\"submit\" color=\"primary\">Pengajuan</ion-button>\n              </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_form-pengajuan_form-pengajuan_module_ts.js.map