(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_app_inventory-log_inventory-log_module_ts"],{

/***/ 4050:
/*!***************************************************************!*\
  !*** ./src/app/inventory-log/inventory-log-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryLogPageRoutingModule": () => (/* binding */ InventoryLogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _inventory_log_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-log.page */ 134);




const routes = [
    {
        path: '',
        component: _inventory_log_page__WEBPACK_IMPORTED_MODULE_0__.InventoryLogPage
    }
];
let InventoryLogPageRoutingModule = class InventoryLogPageRoutingModule {
};
InventoryLogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InventoryLogPageRoutingModule);



/***/ }),

/***/ 3827:
/*!*******************************************************!*\
  !*** ./src/app/inventory-log/inventory-log.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryLogPageModule": () => (/* binding */ InventoryLogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _inventory_log_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-log-routing.module */ 4050);
/* harmony import */ var _inventory_log_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-log.page */ 134);







let InventoryLogPageModule = class InventoryLogPageModule {
};
InventoryLogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inventory_log_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryLogPageRoutingModule
        ],
        declarations: [_inventory_log_page__WEBPACK_IMPORTED_MODULE_1__.InventoryLogPage]
    })
], InventoryLogPageModule);



/***/ }),

/***/ 134:
/*!*****************************************************!*\
  !*** ./src/app/inventory-log/inventory-log.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryLogPage": () => (/* binding */ InventoryLogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inventory_log_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inventory-log.page.html */ 8769);
/* harmony import */ var _inventory_log_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-log.page.scss */ 7334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/auth-service.service */ 3388);








let InventoryLogPage = class InventoryLogPage {
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
            yield this.api.Get_Data('getBarangMasuk')
                .subscribe(res => {
                this.ResponseDataMasuk = res.data;
                if (this.ResponseDataMasuk) {
                    this.BarangMasuk = this.ResponseDataMasuk;
                    loading.dismiss();
                }
                else {
                    this.BarangMasuk = '';
                    loading.dismiss();
                }
            }, err => {
                console.log(err);
                loading.dismiss();
            });
            yield this.api.Get_Data('getBarangKeluar')
                .subscribe(res => {
                this.ResponseDataKeluar = res.data;
                if (this.ResponseDataKeluar) {
                    this.BarangKeluar = this.ResponseDataKeluar;
                    loading.dismiss();
                }
                else {
                    this.BarangKeluar = '';
                    loading.dismiss();
                }
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
};
InventoryLogPage.ctorParameters = () => [
    { type: _app_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
InventoryLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-inventory-log',
        template: _raw_loader_inventory_log_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inventory_log_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InventoryLogPage);



/***/ }),

/***/ 7334:
/*!*******************************************************!*\
  !*** ./src/app/inventory-log/inventory-log.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 10pt;\n}\n\ntr:nth-of-type(odd) {\n  background: #eee;\n}\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold;\n}\n\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlKIiwiZmlsZSI6ImludmVudG9yeS1sb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gIH1cclxuICB0cjpudGgtb2YtdHlwZShvZGQpIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICB9XHJcbiAgdGggeyBcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICB9XHJcbiAgdGQsIHRoIHsgXHJcbiAgICBwYWRkaW5nOiA2cHg7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICB9Il19 */");

/***/ }),

/***/ 8769:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory-log/inventory-log.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Inventory Log Activity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid >\n    <ion-row>\n      <ion-col col-6>\n        Barang Masuk\n          <table>\n            <thead>\n              <tr>\n                <th>Nama Barang</th>\n                <th>Jumlah</th>\n                <th>Tanggal</th>\n              </tr>\n              </thead>\n            <tbody *ngIf=\"BarangMasuk\">\n              <tr *ngFor=\"let masuk of BarangMasuk\">\n                <td valign=\"top\">{{masuk.name}}</td>\n                <td valign=\"top\">{{masuk.quantity}}</td>   \n                <td valign=\"top\">{{masuk.created_at}}</td>     \n              </tr>\n            </tbody>\n          </table>         \n      </ion-col>\n      <ion-col col-6>\n        Barang Keluar\n        <table>\n          <thead>\n            <tr>\n              <th>Nama Barang</th>\n              <th>Nama Admin</th>\n              <th>Jumlah</th>\n              <th>Tanggal</th>\n            </tr>\n            </thead>\n          <tbody *ngIf=\"BarangKeluar\">\n            <tr *ngFor=\"let keluar of BarangKeluar\">\n              <td valign=\"top\">{{keluar.name}}</td>\n              <td valign=\"top\">{{keluar.admin}}</td>   \n              <td valign=\"top\">{{keluar.quantity}}</td> \n              <td valign=\"top\">{{keluar.created_at}}</td>     \n            </tr>\n          </tbody>\n        </table>         \n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_inventory-log_inventory-log_module_ts.js.map