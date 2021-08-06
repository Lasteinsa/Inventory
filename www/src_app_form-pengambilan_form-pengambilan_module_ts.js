(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_form-pengambilan_form-pengambilan_module_ts"],{

/***/ 2364:
/*!*********************************************************************!*\
  !*** ./src/app/form-pengambilan/form-pengambilan-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPengambilanPageRoutingModule": () => (/* binding */ FormPengambilanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _form_pengambilan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-pengambilan.page */ 9662);




const routes = [
    {
        path: '',
        component: _form_pengambilan_page__WEBPACK_IMPORTED_MODULE_0__.FormPengambilanPage
    }
];
let FormPengambilanPageRoutingModule = class FormPengambilanPageRoutingModule {
};
FormPengambilanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPengambilanPageRoutingModule);



/***/ }),

/***/ 1725:
/*!*************************************************************!*\
  !*** ./src/app/form-pengambilan/form-pengambilan.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPengambilanPageModule": () => (/* binding */ FormPengambilanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _form_pengambilan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-pengambilan-routing.module */ 2364);
/* harmony import */ var _form_pengambilan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-pengambilan.page */ 9662);







let FormPengambilanPageModule = class FormPengambilanPageModule {
};
FormPengambilanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_pengambilan_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPengambilanPageRoutingModule
        ],
        declarations: [_form_pengambilan_page__WEBPACK_IMPORTED_MODULE_1__.FormPengambilanPage]
    })
], FormPengambilanPageModule);



/***/ }),

/***/ 9662:
/*!***********************************************************!*\
  !*** ./src/app/form-pengambilan/form-pengambilan.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPengambilanPage": () => (/* binding */ FormPengambilanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_form_pengambilan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-pengambilan.page.html */ 3414);
/* harmony import */ var _form_pengambilan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-pengambilan.page.scss */ 9671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/auth-service.service */ 3388);







let FormPengambilanPage = class FormPengambilanPage {
    constructor(api, loadingController, alertController, zone) {
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.zone = zone;
    }
    ionViewWillEnter() {
        this.DataBarang();
    }
    DataBarang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...'
            });
            yield loading.present();
            yield this.api.Get_Data('get')
                .subscribe(res => {
                this.ResponseData = res.data;
                if (this.ResponseData) {
                    this.Data_Barang = this.ResponseData;
                    loading.dismiss();
                }
                else {
                    this.Data_Barang = '';
                    loading.dismiss();
                }
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    ngOnInit() {
    }
};
FormPengambilanPage.ctorParameters = () => [
    { type: _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
FormPengambilanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-pengambilan',
        template: _raw_loader_form_pengambilan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_pengambilan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPengambilanPage);



/***/ }),

/***/ 9671:
/*!*************************************************************!*\
  !*** ./src/app/form-pengambilan/form-pengambilan.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 10pt;\n}\n\nthead {\n  background: #333;\n  color: white;\n  font-weight: bold;\n}\n\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tcGVuZ2FtYmlsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoiZm9ybS1wZW5nYW1iaWxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgfVxyXG4gIHRoZWFkIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgfVxyXG4gIHRkLCB0aCB7IFxyXG4gICAgcGFkZGluZzogNnB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 3414:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-pengambilan/form-pengambilan.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Pilih Barang</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <h3>Barang Tidak ditemukan? Ajukan barang ke gudang!</h3> -->\n    <!-- <ion-button expand=\"block\" href=\"/form-pengajuan\">Form Pengajuan Barang</ion-button> -->\n  <ion-grid >\n    <ion-row>\n      <ion-col col-12>\n        <table>\n          <thead>\n            <tr>\n              <td>Nama Barang</td>\n              <td>Tersisa</td>\n              <td>Aksi</td>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"Data_Barang\">\n            <tr *ngFor=\"let data of Data_Barang\">\n              <td valign=\"top\">{{data.name}}</td>\n              <td valign=\"top\">{{data.quantity}}</td>\n              <td valign=\"top\">\n                <ion-button color=\"secondary\" size=\"small\" routerLink=\"/form-lanjutan/{{data.id}}\" routerDirection=\"forward\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></ion-button>\n              </td>      \n            </tr>\n          </tbody>\n        </table>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <h5>Tidak menemukan barang? silahkan</h5>\n          <a href=\"/form-pengajuan\">ajukan barang</a>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_form-pengambilan_form-pengambilan_module_ts.js.map