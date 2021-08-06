(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_form-penambahan_form-penambahan_module_ts"],{

/***/ 6833:
/*!*******************************************************************!*\
  !*** ./src/app/form-penambahan/form-penambahan-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPenambahanPageRoutingModule": () => (/* binding */ FormPenambahanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _form_penambahan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-penambahan.page */ 8776);




const routes = [
    {
        path: '',
        component: _form_penambahan_page__WEBPACK_IMPORTED_MODULE_0__.FormPenambahanPage
    }
];
let FormPenambahanPageRoutingModule = class FormPenambahanPageRoutingModule {
};
FormPenambahanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPenambahanPageRoutingModule);



/***/ }),

/***/ 7333:
/*!***********************************************************!*\
  !*** ./src/app/form-penambahan/form-penambahan.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPenambahanPageModule": () => (/* binding */ FormPenambahanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _form_penambahan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-penambahan-routing.module */ 6833);
/* harmony import */ var _form_penambahan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-penambahan.page */ 8776);








let FormPenambahanPageModule = class FormPenambahanPageModule {
};
FormPenambahanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _form_penambahan_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPenambahanPageRoutingModule
        ],
        declarations: [_form_penambahan_page__WEBPACK_IMPORTED_MODULE_1__.FormPenambahanPage]
    })
], FormPenambahanPageModule);



/***/ }),

/***/ 8776:
/*!*********************************************************!*\
  !*** ./src/app/form-penambahan/form-penambahan.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPenambahanPage": () => (/* binding */ FormPenambahanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_form_penambahan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-penambahan.page.html */ 572);
/* harmony import */ var _form_penambahan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-penambahan.page.scss */ 7352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({})
};
const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";
let FormPenambahanPage = class FormPenambahanPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.FormSimpanData = {};
    }
    add() {
        let params = new URLSearchParams();
        for (let key in this.FormSimpanData) {
            params.set(key, this.FormSimpanData[key]);
        }
        this.http.post(`${apiUrl}/add`, params, httpOptions).subscribe(res => {
            console.log(res);
            this.navCtrl.navigateBack('/home');
        }, (err) => {
            console.log(err);
        });
    }
};
FormPenambahanPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
FormPenambahanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-penambahan',
        template: _raw_loader_form_penambahan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_penambahan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPenambahanPage);



/***/ }),

/***/ 7352:
/*!***********************************************************!*\
  !*** ./src/app/form-penambahan/form-penambahan.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXBlbmFtYmFoYW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 572:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-penambahan/form-penambahan.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Form Penambahan Data (Barang Masuk)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <form (ngSubmit)=\"add()\">\n                  <ion-item>                                     \n                      <ion-label color=\"primary\" position=\"stacked\">Nama Barang</ion-label>\n                      <ion-input type=\"text\" [(ngModel)]=\"FormSimpanData.name\" name=\"name\" ></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Jumlah</ion-label>\n                    <ion-input type=\"number\" [(ngModel)]=\"FormSimpanData.quantity\" name=\"quantity\" ></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Deskripsi</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"FormSimpanData.desk\" name=\"desk\" ></ion-input>                 \n                  </ion-item>        \n                    <!-- <ion-button expand=\"block\"  type=\"submit\" color=\"primary\" [disabled]=\"!FormSimpanData.valid\" >Simpan</ion-button> -->\n                    <ion-button expand=\"block\"  type=\"submit\" color=\"primary\">Simpan</ion-button>\n              </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_form-penambahan_form-penambahan_module_ts.js.map