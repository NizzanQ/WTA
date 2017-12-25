webpackJsonp([10],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderweightPageModule", function() { return UnderweightPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__underweight__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnderweightPageModule = (function () {
    function UnderweightPageModule() {
    }
    return UnderweightPageModule;
}());
UnderweightPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__underweight__["a" /* UnderweightPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__underweight__["a" /* UnderweightPage */]),
        ],
    })
], UnderweightPageModule);

//# sourceMappingURL=underweight.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderweightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UnderweightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnderweightPage = (function () {
    function UnderweightPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnderweightPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnderweightPage');
    };
    return UnderweightPage;
}());
UnderweightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-underweight',template:/*ion-inline-start:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\pages\underweight\underweight.html"*/'<!--\n  Generated template for the UnderweightPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title> Simple Things You Can <br>Do To Gain Weight </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-card>\n            <img src="assets/img/1.gif" />\n\n            <ion-card-content>\n                <ion-card-title color="danger">\n                    Push UP\n                </ion-card-title>\n                <p>\n                    It\'s a Good Full Body Workout: <br><br>\n                    By working on a large number of muscles in your body,\n                    push-ups help tremendously for a fitter you. Push-ups \n                    help you focus on your arms, abs and your lower body, \n                    all at the same time. They train your muscles to work \n                    together and become stronger.\n                </p>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <img src="assets/img/2.gif" />\n\n            <ion-card-content>\n                <ion-card-title color="danger">\n                    Hindu Push Up\n                </ion-card-title>\n                <p>\n                    Hindu Pushups Reach More Than The Chest, Shoulders, \n                    Arms, Core…Well, You Get The Idea<br><br>\n                    Not only do they engage your chest, shoulders, arms and \n                    core, they require you to be aware of your body position \n                    at all times and help with your mind to body connection — \n                    great for functional strength and athletes.\n                </p>\n            </ion-card-content>\n        </ion-card>\n        \n      <ion-card>\n          <img src="assets/img/3.gif" />\n        <ion-card-content>\n            <ion-card-title color="danger">\n                Triceps Dips/Bench Dips\n            </ion-card-title>\n            <p>\n                Get good at them and you’ll feel invincible.<br><br>\n                As a relatively small compound movement, dips will focus heavily on your triceps, \n                while also improving strength in your chest and shoulders.\n            </p>\n        </ion-card-content>\n    </ion-card>\n\n\n        <div class="card">\n            <ion-item>\n                <div class="video-container">\n                    <iframe src="https://www.youtube.com/embed/wyVM1evRxNw" frameborder="0" width="560" height="315"></iframe>\n                </div>\n            </ion-item>\n        </div>\n        <div class="card">\n            <ion-item>\n                <div class="video-container">\n                    <iframe src="https://www.youtube.com/embed/gvI2ClWqHO0" frameborder="0" width="560" height="315"></iframe>\n                </div>\n            </ion-item>\n        </div>\n        <div class="card">\n            <ion-item>\n                <div class="video-container">\n                    <iframe src="http://www.youtube.com/embed/uJAWaE11Jf4" frameborder="0" width="560" height="315"></iframe>\n                </div>\n            </ion-item>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\pages\underweight\underweight.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], UnderweightPage);

//# sourceMappingURL=underweight.js.map

/***/ })

});
//# sourceMappingURL=10.js.map