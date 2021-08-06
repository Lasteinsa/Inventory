(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_inventory-list_inventory-list_module_ts"],{

/***/ 7075:
/*!*****************************************************************!*\
  !*** ./src/app/inventory-list/inventory-list-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryListPageRoutingModule": () => (/* binding */ InventoryListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _inventory_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-list.page */ 6111);




const routes = [
    {
        path: '',
        component: _inventory_list_page__WEBPACK_IMPORTED_MODULE_0__.InventoryListPage
    }
];
let InventoryListPageRoutingModule = class InventoryListPageRoutingModule {
};
InventoryListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InventoryListPageRoutingModule);



/***/ }),

/***/ 4415:
/*!*********************************************************!*\
  !*** ./src/app/inventory-list/inventory-list.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryListPageModule": () => (/* binding */ InventoryListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _inventory_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-list-routing.module */ 7075);
/* harmony import */ var _inventory_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-list.page */ 6111);







let InventoryListPageModule = class InventoryListPageModule {
};
InventoryListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inventory_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryListPageRoutingModule
        ],
        declarations: [_inventory_list_page__WEBPACK_IMPORTED_MODULE_1__.InventoryListPage]
    })
], InventoryListPageModule);



/***/ }),

/***/ 6111:
/*!*******************************************************!*\
  !*** ./src/app/inventory-list/inventory-list.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryListPage": () => (/* binding */ InventoryListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inventory_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inventory-list.page.html */ 5065);
/* harmony import */ var _inventory_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-list.page.scss */ 62);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/auth-service.service */ 3388);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);









const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";
let InventoryListPage = class InventoryListPage {
    constructor(navCtrl, api, loadingController, alertController, zone, http) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.zone = zone;
        this.http = http;
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
    presentAlertConfirm(idbarang) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Konfirmasi',
                message: 'Apakah anda yakin akan menghapus data ini?',
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            console.log(idbarang);
                            this.http.delete(`${apiUrl}/hapus?product_id=${idbarang}`).subscribe(res => {
                                console.log(res);
                                this.DataBarang();
                            }, err => {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
InventoryListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
InventoryListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-inventory-list',
        template: _raw_loader_inventory_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inventory_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InventoryListPage);



/***/ }),

/***/ 62:
/*!*********************************************************!*\
  !*** ./src/app/inventory-list/inventory-list.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 10pt;\n}\n\ntr:nth-of-type(odd) {\n  background: #eee;\n}\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold;\n}\n\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFJSiIsImZpbGUiOiJpbnZlbnRvcnktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgfVxyXG4gIHRyOm50aC1vZi10eXBlKG9kZCkgeyBcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7IFxyXG4gIH1cclxuICB0aCB7IFxyXG4gICAgYmFja2dyb3VuZDogIzMzMzsgXHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gIH1cclxuICB0ZCwgdGggeyBcclxuICAgIHBhZGRpbmc6IDZweDsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gIH0iXX0= */");

/***/ }),

/***/ 5065:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory-list/inventory-list.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      List Barang\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid >\n    <ion-row>\n      <ion-col col-12>\n          <table>\n            <thead>\n              <tr>\n                <th>Nama Barang</th>\n                <th>Jumlah</th>\n                <th>Info</th>\n                <th>Aksi</th>\n              </tr>\n              </thead>\n            <tbody *ngIf=\"Data_Barang\">\n              <tr *ngFor=\"let data of Data_Barang\">\n                <td valign=\"top\">{{data.name}}</td>\n                <td valign=\"top\">{{data.quantity}}</td>   \n                <td valign=\"top\">{{data.desk}}</td>\n                <td valign=\"top\">\n                  <ion-button color=\"danger\" size=\"small\" (click)=\"presentAlertConfirm(data.id)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n                  <ion-button color=\"secondary\" size=\"small\" routerLink=\"/form-edit/{{data.id}}\" routerDirection=\"forward\"><ion-icon name=\"create\"></ion-icon></ion-button>\n                </td>      \n              </tr>\n            </tbody>\n          </table>         \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_inventory-list_inventory-list_module_ts.js.map