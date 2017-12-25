webpackJsonp([12],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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


var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = 'TabsPage';
        this.pages = [
            {
                title: 'Dashboard',
                pageName: 'TabsPage',
                tabComponent: 'DashboardPage',
                index: 0,
                icon: 'clipboard'
            },
            {
                title: 'Meal',
                pageName: 'TabsPage',
                tabComponent: 'FoodPage',
                index: 1,
                icon: 'pizza'
            },
            {
                title: 'Recommendation',
                pageName: 'TabsPage',
                tabComponent: 'RecommendationPage',
                index: 2,
                icon: 'body'
            },
            {
                title: 'Statistics',
                pageName: 'TabsPage',
                tabComponent: 'StatisticPage',
                index: 3,
                icon: 'stats'
            },
            {
                title: 'Profile',
                pageName: 'ViewprofilePage',
                index: null,
                icon: 'home'
            }
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.navCtrl.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.push('ViewprofilePage');
        }
    };
    MenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-avatar item-start>\n            <ion-navbar hideBackButton>\n                <img src="assets/img/pic.png">\n\n            </ion-navbar>\n        </ion-avatar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n<ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n{{p.title}}\n  </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		434,
		6
	],
	"../pages/food/food.module": [
		435,
		5
	],
	"../pages/login/login.module": [
		436,
		9
	],
	"../pages/meal/meal.module": [
		437,
		4
	],
	"../pages/menu/menu.module": [
		236
	],
	"../pages/password-reset/password-reset.module": [
		438,
		8
	],
	"../pages/profile/profile.module": [
		439,
		3
	],
	"../pages/recommendation/recommendation.module": [
		440,
		2
	],
	"../pages/signup/signup.module": [
		441,
		7
	],
	"../pages/statistic/statistic.module": [
		442,
		0
	],
	"../pages/tabs/tabs.module": [
		443,
		11
	],
	"../pages/underweight/underweight.module": [
		444,
		10
	],
	"../pages/viewprofile/viewprofile.module": [
		445,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
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


var SliderPage = (function () {
    function SliderPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    SliderPage.prototype.next = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    return SliderPage;
}());
SliderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slider',template:/*ion-inline-start:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\pages\slider\slider.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Slides</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n    <ion-slides pager>\n        <ion-slide *ngFor="let slide of slides">\n\n            <img [src]="slide.image" class="slide-image" />\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n            <p [innerHTML]="slide.description"></p>\n        </ion-slide>\n        <ion-slide>\n            <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n            <h2 class="slide-title">Ready to Play?</h2>\n            <button ion-button large clear icon-end color="primary" (click)="next()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\pages\slider\slider.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SliderPage);

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(afAuth, afDatabase) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
    }
    /**
     * loginUser takes in an email and password and signs the user into the application.
     */
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    /**
     * signupUser takes in an email and password and does 3 things:
     * 1. It creates the new user.
     * 2. It signs the user into the application.
     * 3. It creates a database node for the user to store the userProfile, which starts with just
     *    the email address.
     */
    AuthProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            _this.afDatabase.object("/userProfile/" + newUser.uid).set({
                email: email
            });
        });
    };
    /**
     * resetPassword takes the email address as a string and sends the email with the reset password
     * link.
     */
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    /**
     * logoutUser doesn't take any parameters, it looks into the authentication object and signs out
     * the currently logged in user.
     */
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_slider_slider_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu_module__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var config = {
    apiKey: "AIzaSyAh-fQ4qiLeGi5ZG43oJTXt1OuYJV9ICF8",
    authDomain: "fyp-ionic-6cfb4.firebaseapp.com",
    databaseURL: "https://fyp-ionic-6cfb4.firebaseio.com",
    projectId: "fyp-ionic-6cfb4",
    storageBucket: "fyp-ionic-6cfb4.appspot.com",
    messagingSenderId: "897846424889"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/food/food.module#FoodPageModule', name: 'FoodPage', segment: 'food', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meal/meal.module#MealPageModule', name: 'MealPage', segment: 'meal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recommendation/recommendation.module#RecommendationPageModule', name: 'RecommendationPage', segment: 'recommendation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/statistic/statistic.module#StatisticPageModule', name: 'StatisticPage', segment: 'statistic', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/underweight/underweight.module#UnderweightPageModule', name: 'UnderweightPage', segment: 'underweight', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewprofile/viewprofile.module#ViewprofilePageModule', name: 'ViewprofilePage', segment: 'viewprofile', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_0__pages_slider_slider_module__["a" /* SliderPageModule */],
            __WEBPACK_IMPORTED_MODULE_11__pages_menu_menu_module__["MenuPageModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderPageModule = (function () {
    function SliderPageModule() {
    }
    return SliderPageModule;
}());
SliderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slider__["a" /* SliderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slider__["a" /* SliderPage */]),
        ],
    })
], SliderPageModule);

//# sourceMappingURL=slider.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_slider_slider__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.platform = platform;
        this.rootPage = 'TabsPage';
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_slider_slider__["a" /* SliderPage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */];
                authObserver.unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\app\app.html"*/'<ion-nav #content [root]="rootPage">\n</ion-nav>'/*ion-inline-end:"C:\Users\Nizan\Desktop\angularfire2-email-authentication-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map