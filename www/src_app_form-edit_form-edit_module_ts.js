(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_form-edit_form-edit_module_ts"],{

/***/ 9284:
/*!*******************************************************!*\
  !*** ./src/app/form-edit/form-edit-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEditPageRoutingModule": () => (/* binding */ FormEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _form_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-edit.page */ 2685);




const routes = [
    {
        path: '',
        component: _form_edit_page__WEBPACK_IMPORTED_MODULE_0__.FormEditPage
    }
];
let FormEditPageRoutingModule = class FormEditPageRoutingModule {
};
FormEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormEditPageRoutingModule);



/***/ }),

/***/ 3808:
/*!***********************************************!*\
  !*** ./src/app/form-edit/form-edit.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEditPageModule": () => (/* binding */ FormEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _form_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-edit-routing.module */ 9284);
/* harmony import */ var _form_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-edit.page */ 2685);








let FormEditPageModule = class FormEditPageModule {
};
FormEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _form_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormEditPageRoutingModule
        ],
        declarations: [_form_edit_page__WEBPACK_IMPORTED_MODULE_1__.FormEditPage]
    })
], FormEditPageModule);



/***/ }),

/***/ 2685:
/*!*********************************************!*\
  !*** ./src/app/form-edit/form-edit.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEditPage": () => (/* binding */ FormEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_form_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-edit.page.html */ 1415);
/* harmony import */ var _form_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-edit.page.scss */ 7156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/auth-service.service */ 3388);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);










const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";
let FormEditPage = class FormEditPage {
    constructor(navCtrl, api, loadingController, alertController, formBuilder, activatedRoute, http) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.FormEditData = this.formBuilder.group({
            product_id: [this.activatedRoute.snapshot.paramMap.get('id')],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
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
                this.FormEditData.controls.name.setValue(this.dataBarangEdit.name);
                this.FormEditData.controls.quantity.setValue(this.dataBarangEdit.quantity);
                this.FormEditData.controls.desk.setValue(this.dataBarangEdit.desk);
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
        for (let key in this.FormEditData.value) {
            params.set(key, this.FormEditData.value[key]);
        }
        this.api.Put_Data('update', params)
            .subscribe(res => {
            this.navCtrl.navigateBack('/home');
        }, (err) => {
            console.log(err);
        });
    }
};
FormEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
FormEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-form-edit',
        template: _raw_loader_form_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormEditPage);



/***/ }),

/***/ 7156:
/*!***********************************************!*\
  !*** ./src/app/form-edit/form-edit.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1415:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-edit/form-edit.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Form Edit Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <form [formGroup]=\"FormEditData\" (ngSubmit)=\"simpan()\">\n                  <ion-item>                                     \n                      <ion-label color=\"primary\" position=\"stacked\">Nama Barang</ion-label>\n                      <ion-input type=\"hidden\" formControlName=\"product_id\" ></ion-input>   \n                      <ion-input type=\"text\" formControlName=\"name\" ></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Jumlah</ion-label>\n                    <ion-input type=\"number\" formControlName=\"quantity\" ></ion-input>                 \n                  </ion-item>  \n                  <ion-item>                                     \n                    <ion-label color=\"primary\" position=\"stacked\">Deskripsi</ion-label>\n                    <ion-input type=\"text\" formControlName=\"desk\" ></ion-input>                 \n                  </ion-item>        \n                    <ion-button expand=\"block\"  type=\"submit\" color=\"primary\" [disabled]=\"!FormEditData.valid\" >Simpan</ion-button>\n              </form>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_form-edit_form-edit_module_ts.js.map