(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["role", "banner", 1, "toolbar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */", "[_nghost-%COMP%] {\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n\t\tHelvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n\t\t\"Segoe UI Symbol\";\n\tfont-size: 14px;\n\tcolor: #333;\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n\tmargin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n\tmargin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n\tflex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\theight: 60px;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: #1976d2;\n\tcolor: white;\n\tfont-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tmargin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n\theight: 40px;\n\tmargin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n\topacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tmargin: 82px auto 32px;\n\tpadding: 0 16px;\n\tmax-width: 960px;\n\tflex-direction: column;\n\talign-items: center;\n}\n\nsvg.material-icons[_ngcontent-%COMP%] {\n\theight: 24px;\n\twidth: auto;\n}\n\nsvg\n.material-icons\n[_ngcontent-%COMP%]:not   (\n[_ngcontent-%COMP%]:last-child   )[_ngcontent-%COMP%]\n{\nmargin-right\n:\n \n8\npx\n;\n\n\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n\tfill: #888;\n}\n\n.card-container[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tmargin-top: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n\tborder-radius: 4px;\n\tborder: 1px solid #eee;\n\tbackground-color: #fafafa;\n\theight: 40px;\n\twidth: 200px;\n\tmargin: 0 8px 16px;\n\tpadding: 16px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: all 0.2s ease-in-out;\n\tline-height: 24px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card\n[_ngcontent-%COMP%]:not   (\n[_ngcontent-%COMP%]:last-child   )[_ngcontent-%COMP%]\n{\nmargin-right\n:\n \n0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n\theight: 16px;\n\twidth: 168px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card\n[_ngcontent-%COMP%]:not   (\n.highlight-card[_ngcontent-%COMP%]   )[_ngcontent-%COMP%]\n{\ncursor\n:\n \npointer\n;\n\n\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not   (.highlight-card[_ngcontent-%COMP%]   )[_ngcontent-%COMP%]:hover {\n\ttransform: translateY(-3px);\n\tbox-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not   (.highlight-card[_ngcontent-%COMP%]   )[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]\n\t{\n\tfill: rgb(105, 103, 103);\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n\tbackground-color: #1976d2;\n\tcolor: white;\n\tfont-weight: 600;\n\tborder: none;\n\twidth: auto;\n\tmin-width: 30%;\n\tposition: relative;\n}\n\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tmargin-left: 60px;\n}\n\nsvg#rocket[_ngcontent-%COMP%] {\n\twidth: 80px;\n\tposition: absolute;\n\tleft: -10px;\n\ttop: -24px;\n}\n\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n\theight: calc(100vh - 95px);\n\tposition: absolute;\n\ttop: 10px;\n\tright: 180px;\n\tz-index: -10;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n\tcolor: #1976d2;\n\ttext-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n\tcolor: #125699;\n}\n\n.terminal[_ngcontent-%COMP%] {\n\tposition: relative;\n\twidth: 80%;\n\tmax-width: 600px;\n\tborder-radius: 6px;\n\tpadding-top: 45px;\n\tmargin-top: 8px;\n\toverflow: hidden;\n\tbackground-color: rgb(15, 15, 16);\n}\n\n.terminal[_ngcontent-%COMP%]::before {\n\tcontent: \"\\2022 \\2022 \\2022\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 4px;\n\tbackground: rgb(58, 58, 58);\n\tcolor: #c2c3c4;\n\twidth: 100%;\n\tfont-size: 2rem;\n\tline-height: 0;\n\tpadding: 14px 0;\n\ttext-indent: 4px;\n}\n\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n\tfont-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n\tcolor: white;\n\tpadding: 0 1rem 1rem;\n\tmargin: 0;\n}\n\n.circle-link[_ngcontent-%COMP%] {\n\theight: 40px;\n\twidth: 40px;\n\tborder-radius: 40px;\n\tmargin: 8px;\n\tbackground-color: white;\n\tborder: 1px solid #eeeeee;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\ttransition: 1s ease-out;\n}\n\n.circle-link[_ngcontent-%COMP%]:hover {\n\ttransform: translateY(-0.25rem);\n\tbox-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter[_ngcontent-%COMP%] {\n\tmargin-top: 8px;\n\tdisplay: flex;\n\talign-items: center;\n\tline-height: 20px;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.github-star-badge[_ngcontent-%COMP%] {\n\tcolor: #24292e;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 12px;\n\tpadding: 3px 10px;\n\tborder: 1px solid rgba(27, 31, 35, .2);\n\tborder-radius: 3px;\n\tbackground-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n\tmargin-left: 4px;\n\tfont-weight: 600;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,\n\t\tArial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n\n.github-star-badge[_ngcontent-%COMP%]:hover {\n\tbackground-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n\tborder-color: rgba(27, 31, 35, .35);\n\tbackground-position: -.5em;\n}\n\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n\theight: 16px;\n\twidth: 16px;\n\tmargin-right: 4px;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tbottom: -160px;\n\tleft: -230px;\n\tz-index: -10;\n\twidth: 1920px;\n}\n\n\n@media screen and (max-width: 767px) {\n\t.card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not   (.circle-link[_ngcontent-%COMP%]   )[_ngcontent-%COMP%], .terminal[_ngcontent-%COMP%] {\n\t\twidth: 100%;\n\t}\n\t.card\n\t[_ngcontent-%COMP%]:not   (\n\t.highlight-card[_ngcontent-%COMP%]   )[_ngcontent-%COMP%]\n\t{\n\theight\n\t:\n\t \n\t16\n\tpx\n\t;\n\t\n\t\t\n\tmargin\n\t:\n\t \n\t8\n\tpx\n\t \n\t0;\n}\n\n.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tmargin-left: 72px;\n}\n\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n\tright: 120px;\n\ttransform: rotate(-5deg);\n}\n\n}\n@media screen and (max-width: 575px) {\n\tsvg#rocket-smoke[_ngcontent-%COMP%] {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mahesh.bantaram\git\project-myskills\src\main\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map