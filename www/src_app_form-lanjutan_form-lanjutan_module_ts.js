(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_form-lanjutan_form-lanjutan_module_ts"],{

/***/ 6925:
/*!***************************************************************!*\
  !*** ./src/app/form-lanjutan/form-lanjutan-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLanjutanPageRoutingModule": () => (/* binding */ FormLanjutanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _form_lanjutan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-lanjutan.page */ 5641);




const routes = [
    {
        path: '',
        component: _form_lanjutan_page__WEBPACK_IMPORTED_MODULE_0__.FormLanjutanPage
    }
];
let FormLanjutanPageRoutingModule = class FormLanjutanPageRoutingModule {
};
FormLanjutanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormLanjutanPageRoutingModule);



/***/ }),

/***/ 317:
/*!*******************************************************!*\
  !*** ./src/app/form-lanjutan/form-lanjutan.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLanjutanPageModule": () => (/* binding */ FormLanjutanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _form_lanjutan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-lanjutan-routing.module */ 6925);
/* harmony import */ var _form_lanjutan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-lanjutan.page */ 5641);








let FormLanjutanPageModule = class FormLanjutanPageModule {
};
FormLanjutanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _form_lanjutan_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormLanjutanPageRoutingModule
        ],
        declarations: [_form_lanjutan_page__WEBPACK_IMPORTED_MODULE_1__.FormLanjutanPage]
    })
], FormLanjutanPageModule);



/***/ }),

/***/ 5641:
/*!*****************************************************!*\
  !*** ./src/app/form-lanjutan/form-lanjutan.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLanjutanPage": () => (/* binding */ FormLanjutanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_form_lanjutan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-lanjutan.page.html */ 5340);
/* harmony import */ var _form_lanjutan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-lanjutan.page.scss */ 847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/auth-service.service */ 3388);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);










let FormLanjutanPage = class FormLanjutanPage {
    constructor(navCtrl, api, loadingController, alertController, formBuilder, activatedRoute, http) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.FormPengambilanData = this.formBuilder.group({
            product_id: [this.activatedRoute.snapshot.paramMap.get('id')],
            admin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            desk: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        this.DataBarangEdit();
    }
    DataBarangEdit() {
        const idbarangEdit = 'get/' + this.activatedRoute.snapshot.paramMap.get('id');
        this.api.Get_Data(idbarangEdit)
            .subscribe(res => {
            this.ResponseData = res;
            console.log(this.ResponseData);
            if (this.ResponseData) {
                this.dataBarangEdit = this.ResponseData.data;
                this.FormPengambilanData.controls.product_id.setValue(this.activatedRoute.snapshot.paramMap.get('id'));
                this.FormPengambilanData.controls.quantity.setValue(this.dataBarangEdit.quantity);
            }
            else {
                this.dataBarangEdit = '';
            }
        }, err => {
            console.log(err);
        });
    }
    simpan() {
        let params = new URLSearchParams();
        for (let key in this.FormPengambilanData.value) {
            params.set(key, this.FormPengambilanData.value[key]);
        }
        this.api.Put_Data('pengambilan', params)
            .subscribe(res => {
            this.navCtrl.navigateBack('/home');
        }, (err) => {
            console.log(err);
        });
    }
};
FormLanjutanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
FormLanjutanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-form-lanjutan',
        template: _raw_loader_form_lanjutan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_lanjutan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormLanjutanPage);



/***/ }),

/***/ 847:
/*!*******************************************************!*\
  !*** ./src/app/form-lanjutan/form-lanjutan.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWxhbmp1dGFuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5340:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-lanjutan/form-lanjutan.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Form Lanjutan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <form [formGroup]=\"FormPengambilanData\" (ngSubmit)=\"simpan()\">\n                  <ion-item>                                     \n                      <ion-label color=\"primary\" position=\"stacked\">Nama Admin</ion-label>\n                      <ion-input type=\"hidden\" formControlName=\"product_id\" ></ion-input>   \n                      <ion-input type=\"text\" formControlName=\"admin\" ></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Jumlah</ion-label>\n                    <ion-input type=\"number\" formControlName=\"quantity\"></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Keterangan</ion-label>\n                    <ion-input type=\"text\" formControlName=\"desk\" ></ion-input>                 \n                  </ion-item>        \n                    <ion-button expand=\"block\"  type=\"submit\" color=\"primary\" [disabled]=\"!FormPengambilanData.valid\" >Simpan</ion-button>\n              </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_form-lanjutan_form-lanjutan_module_ts.js.map