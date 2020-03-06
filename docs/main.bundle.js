webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n<h1>Acerca de</h1>\n<p>\nEs una empresa que surge como resultado de un momento de creatividad, ingenio y\ndetección de necesidades de un grupo de amigos con diferentes profesiones que lograron identificar que en el\nsector inmobiliario existía dificultad y complejidad para encontrar bienes inmobiliarios de forma rápida, fácil y\nefectiva, que permitiera a las personas ahorrar tiempo y recursos para encontrar un bien inmobiliario a la medida\nde sus exigencias y a la capacidad de su presupuesto.\n</p>\n<p>\nEs así como surge la idea de crear un sitio que sirviera de conexión entre arrendatarios o vendedores con\ninquilinos o compradores de bienes inmobiliarios, en una plataforma que combinara la facilidad de uso para todo\ntipo de públicos o usuarios, pero con el potencial que ofrece una herramienta sofisticada para lograr encontrar las\nmejores ofertas de bienes inmobiliarios.\n</p>\n<p>\nEl emprendimiento tiene como objetivo posicionarse como el principal y más importante agente inmobiliario en\nlínea, ofreciendo a sus clientes un amplia oferta de opciones de bienes inmobiliarios para todos los gustos,\nexigencias y presupuestos, y convertirse a la vez en el mejor socio que un propietario de bienes inmobiliarios\npuede tener para vender o arrendar sus propiedades.\n</p>\n<p>\nSomos el socio que piensa en ti, en lo que buscas, en como lo buscas, y a cuanto lo quieres.\n</p>\n</main>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/apartment-form/apartment-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apartment-form/apartment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n  <form class=\"form-horizontal\">\n     \n        <h3 class=\"head text-center\">Ahora las Especificaciones</h3>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"email\">Elige el tipo de acomodacion habitacional</label>\n          <select class=\"form-control input-md\" [(ngModel)]=\"especificaciones\" name=\"tipoComplejo\">\n            <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n          </select>\n        </div>\n        <h3 class=\"head text-center\">Elige las caracteristicas</h3>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"firstname\">Numero de Habitaciones</label>\n              <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Habitaciones\">\n\n            </div>\n          </div>\n          \n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"lastname\">Numero de Baños</label>\n              <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Baños\">\n\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"lastname\">Parqueos disponibles</label>\n              <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Parqueos\">\n\n            </div>\n          </div>\n        </div>\n        <h3 class=\"head text-center\">Elige las areas que posee </h3>\n\n\n        <div class=\"form-group\">\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Sala</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Comedor</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Cocina</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Lavanderia</label>\n\n            <label class=\"radio\"><input type=\"checkbox\" name=\"optradio\" >Estudio</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Area de Entretenimiento</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Terraza</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Zona de esparcimiento</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Gimnasio y/o spa</label>\n\n          \n        </div>\n\n        <h3 class=\"head text-center\">Elige las amenidades que posee</h3>\n        <div class=\"form-group\">\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"security\"> Seguridad\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"waterTank\"> Tanque de Agua\n              </label>\n            </div>\n            <div class=\"radio\">\n                <label>\n                  <input type=\"checkbox\" name=\"waterTank\"> Pozo\n                </label>\n              </div>\n            <div class=\"radio\">\n                <label>\n                  <input type=\"checkbox\" name=\"furniture\"> Amueblado\n                </label>\n              </div>\n     \n          </div>\n\n        <div class=\"row\">\n          <div class='col-md-12'>\n            <label class=\"control-label\">Espacio libre para informacion Adicional</label>\n            <textarea class=\"form-control\" rows=\"3\"></textarea>\n          </div>\n      </div>\n<br>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Varas Cuadradas de Terreno</label>\n              <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\"  placeholder=\"Terreno\">\n            </div>\n          </div>\n          <div class='col-xs-12'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Varas Cuadradas de Construccion</label>\n              <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Construccion\">\n            </div>\n          </div>\n        </div>\n\n        <h3 class=\"head text-center\">Precio y otros cargos</h3>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-6'>\n            <form class=\"form-inline\">\n              <div class=\"form-group mb-2\">\n                Monto\n              </div>\n            <div class=\"form-group mx-sm-2 mb-2\">\n              <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n            </div>\n          </form>\n          </div>\n        </div>\n        <h3 class=\"head text-center\">Otros Cargos (Sólo sí aplica. También puede crear otras opciones pulsando el botón Agregar)     </h3>\n        <app-other-charges class=\"todos\"></app-other-charges>\n      \n    <div class=\"form-group text-center space-40\">\n      <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n          class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n      <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n          class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/apartment-form/apartment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApartmentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApartmentFormComponent = /** @class */ (function () {
    function ApartmentFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
        this.complexTypes = [
            { id: 1, name: "Complejo de Apartamentos" },
            { id: 2, name: "Apartamento Independiente" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    ApartmentFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    ApartmentFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    ApartmentFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    ApartmentFormComponent.prototype.goToNext = function (form) {
        this.router.navigate(['/preview']);
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/preview']);
        }
    };
    ApartmentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apartment-form',
            template: __webpack_require__("../../../../../src/app/apartment-form/apartment-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/apartment-form/apartment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], ApartmentFormComponent);
    return ApartmentFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align {\n    padding: 3rem 1.5rem;\n    text-align: center;\n}\n.social:hover {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n}\n.social {\n    -webkit-transform: scale(0.8);\n    /* Browser Variations: */\n    \n    -moz-transform: scale(0.8);\n    -o-transform: scale(0.8);\n    -webkit-transition-duration: 0.5s;\n    -moz-transition-duration: 0.5s;\n    -o-transition-duration: 0.5s;\n}\n/*\n   Multicoloured Hover Variations\n*/\n#social-fb:hover {\n    color: #3B5998;\n}\n#social-tw:hover {\n    color: #4099FF;\n}\n#social-gp:hover {\n    color: #d34836;\n}\n#social-em:hover {\n    color: #f39c12;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css\" rel=\"stylesheet\">\n\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">InmoEscaner</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Inicio <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Categorias</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Perfil</a>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown>\n        <a dropdownToggle class=\"nav-link dropdown-toggle\" role=\"button\">Acerca de<span class=\"caret\"></span></a>\n        <ul *dropdownMenu class=\"dropdown-menu show\">\n\n          <li><a class=\"dropdown-item\" href=\"/about\">Acerca de</a></li>\n          <li><a class=\"dropdown-item\" href=\"/mission\">Mision y Vision</a></li>\n          <li><a class=\"dropdown-item\" href=\"values\">Valores</a></li>\n        </ul>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar\" aria-label=\"Search\">\n\n      <button routerLink=\"/user-type\" routerLinkActive=\"active\" class=\"btn btn-outline-success my-2 my-sm-0\">Registrarse</button>\n      <button routerLink=\"/login\" routerLinkActive=\"active\" class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Iniciar\n        Sesion\n      </button>\n    </form>\n  </div>\n</nav>\n<div class=\"align\"></div>\n\n<router-outlet></router-outlet>\n\n<div class=\"align\"></div>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <hr>\n    <div class=\"text-center center-block\">\n      <a href=\"https://www.facebook.com/bootsnipp\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n      <a href=\"https://twitter.com/bootsnipp\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n      <a href=\"https://plus.google.com/+Bootsnipp-page\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n      <a href=\"mailto:bootsnipp@gmail.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n      <p class=\"txt-railway\">- Copyright 2018 -</p>\n    </div>\n\n    <hr>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing__ = __webpack_require__("../../../../../src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__real_state_info_real_state_info_component__ = __webpack_require__("../../../../../src/app/real-state-info/real-state-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__personal_personal_component__ = __webpack_require__("../../../../../src/app/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__property_property_component__ = __webpack_require__("../../../../../src/app/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__other_charges_other_charges_component__ = __webpack_require__("../../../../../src/app/other-charges/other-charges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__values_values_component__ = __webpack_require__("../../../../../src/app/values/values.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mission_mission_component__ = __webpack_require__("../../../../../src/app/mission/mission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__property_category_property_category_component__ = __webpack_require__("../../../../../src/app/property-category/property-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_simple_slideshow__ = __webpack_require__("../../../../ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__house_form_house_form_component__ = __webpack_require__("../../../../../src/app/house-form/house-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__land_form_land_form_component__ = __webpack_require__("../../../../../src/app/land-form/land-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__estate_form_estate_form_component__ = __webpack_require__("../../../../../src/app/estate-form/estate-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__warehouse_form_warehouse_form_component__ = __webpack_require__("../../../../../src/app/warehouse-form/warehouse-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__building_form_building_form_component__ = __webpack_require__("../../../../../src/app/building-form/building-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shop_form_shop_form_component__ = __webpack_require__("../../../../../src/app/shop-form/shop-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng4_intl_phone__ = __webpack_require__("../../../../ng4-intl-phone/ng4-intl-phone.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__fb_login_fb_login_component__ = __webpack_require__("../../../../../src/app/fb-login/fb-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_type_user_type_component__ = __webpack_require__("../../../../../src/app/user-type/user-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__posts_list_posts_list_component__ = __webpack_require__("../../../../../src/app/posts-list/posts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__apartment_form_apartment_form_component__ = __webpack_require__("../../../../../src/app/apartment-form/apartment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_mask__ = __webpack_require__("../../../../ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__business_form_business_form_component__ = __webpack_require__("../../../../../src/app/business-form/business-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_31_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_31_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_31_angular5_social_login__["FacebookLoginProvider"]("2219580538358204")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__real_state_info_real_state_info_component__["a" /* RealStateInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__personal_personal_component__["a" /* PersonalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__property_property_component__["a" /* PropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__other_charges_other_charges_component__["a" /* OtherChargesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__values_values_component__["a" /* ValuesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__mission_mission_component__["a" /* MissionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__property_category_property_category_component__["a" /* PropertyCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__house_form_house_form_component__["a" /* HouseFormComponent */],
                __WEBPACK_IMPORTED_MODULE_22__land_form_land_form_component__["a" /* LandFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__estate_form_estate_form_component__["a" /* EstateFormComponent */],
                __WEBPACK_IMPORTED_MODULE_24__warehouse_form_warehouse_form_component__["a" /* WarehouseFormComponent */],
                __WEBPACK_IMPORTED_MODULE_25__building_form_building_form_component__["a" /* BuildingFormComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shop_form_shop_form_component__["a" /* ShopFormComponent */],
                __WEBPACK_IMPORTED_MODULE_27__preview_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_30__fb_login_fb_login_component__["a" /* FbLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__user_type_user_type_component__["a" /* UserTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__posts_list_posts_list_component__["a" /* PostsListComponent */],
                __WEBPACK_IMPORTED_MODULE_34__apartment_form_apartment_form_component__["a" /* ApartmentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_36__business_form_business_form_component__["a" /* BusinessFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_31_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_35_ngx_mask__["a" /* NgxMaskModule */].forRoot()
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_10__data_formData_service__["a" /* FormDataService */] }, { provide: __WEBPACK_IMPORTED_MODULE_31_angular5_social_login__["AuthServiceConfig"], useFactory: getAuthServiceConfigs
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/building-form/building-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/building-form/building-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n    <form class=\"form-horizontal\">\n       \n          <h3 class=\"head text-center\">Especificaciones del Edificio</h3>\n\n          <div class=\"form-group\">\n              <label class=\"control-label\" for=\"email\">Elija el diseño de la Edificacion</label>\n              <select class=\"form-control input-md\" [(ngModel)]=\"complexType\" name=\"tipoComplejo\">\n                <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n              </select>\n            </div>\n\n            <h3 class=\"head text-center\">Elije las Caracteristicas que posee</h3>\n            <div class=\"row\">\n              <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"firstname\">Numero de Oficinas</label>\n                  <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Oficinas\">\n    \n                </div>\n              </div>\n              \n              <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"lastname\">Numero de Baños</label>\n                  <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Baños\">\n    \n                </div>\n              </div>\n              <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"lastname\">Numero de Salas</label>\n                  <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Salas\">\n    \n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Varas Cuadradas de Terreno</label>\n                  <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Terreno\">\n                </div>\n              </div>\n              <div class='col-xs-12'>\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Varas Cuadradas de Construccion</label>\n                  <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Construccion\">\n                </div>\n              </div>\n            </div>\n          <h3 class=\"head text-center\">Elije las Amenidades que posee </h3>\n  \n          <div class=\"form-group\">\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"security\"> Seguridad\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"waterTank\"> Tanque de Agua\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"waterTank\"> Pozo\n              </label>\n            </div>\n            <div class=\"radio\">\n                <label>\n                  <input type=\"checkbox\" name=\"furniture\"> Amueblado\n                </label>\n              </div>\n     \n          </div>\n  \n          \n        \n          \n          <div class=\"row\">\n              <div class='col-md-12'>\n                <label class=\"control-label\">Informacion Adicional</label>\n                <textarea class=\"form-control\" rows=\"3\"></textarea>\n              </div>\n          </div>\n          <h3 class=\"head text-center\">Precio</h3>\n          <div class=\"row\">\n            <div class='col-xs-12 col-sm-6'>\n              <form class=\"form-inline\">\n                <div class=\"form-group mb-2\">\n                  Monto\n                </div>\n              <div class=\"form-group mx-sm-2 mb-2\">\n                <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n              </div>\n            </form>\n            </div>\n          </div>\n          <app-other-charges class=\"todos\"></app-other-charges>\n        \n      <div class=\"form-group text-center space-40\">\n        <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n            class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n        <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n            class=\"glyphicon glyphicon-arrow-right\"></span></button>\n      </div>\n  \n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/building-form/building-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingFormComponent = /** @class */ (function () {
    function BuildingFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
        this.complexTypes = [
            { id: 1, name: "Edificacion Horizontal" },
            { id: 2, name: "Edificacion Vertical" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    BuildingFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    BuildingFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    BuildingFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    BuildingFormComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    BuildingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-building-form',
            template: __webpack_require__("../../../../../src/app/building-form/building-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/building-form/building-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], BuildingFormComponent);
    return BuildingFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/business-form/business-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n    padding: 6px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    margin: 5px 2px;\n  }\n  \n  .fa:hover {\n      opacity: 0.7;\n  }\n  \n  .fa-facebook {\n    background: #3B5998;\n    color: white;\n  }\n  \n  .fa-twitter {\n      background: #55ACEE;\n      color: white;\n    }\n  \n  .fa-pinterest {\n      background: #cb2027;\n      color: white;\n    }\n  \n  .fa-instagram {\n      background: #125688;\n      color: white;\n    }\n  \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/business-form/business-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container col-md-10 \">\n    <ul class=\"nav justify-content-center nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">Informacion del Suscriptor</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Eleccion del plan de Servicio</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Informacion de la Publicacion</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Eleccion de Metodo de Pago</a>\n        </li>\n      </ul>\n</div>\n<br>\n<div class=\" container col-md-8 \">\n\n<form #personalForm=\"ngForm\" class=\"editForm\" >\n  <div >\n\n      \n      <br/>\n      <div class=\"row \">\n        <div class=\"col\">\n            <label class=\"control-label\" for=\"firstname\">Nombre de la Empresa</label>  \n            <input class=\"form-control input-md\" #firstname=\"ngModel\" required name=\"firstname\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"personal.firstName\">   \n            <div class=\"alert alert-danger\"  *ngIf=\"submitted && firstname.touched\"> Nombre es requerido</div>\n   \n        </div>\n        <div class=\"col\">\n\n            <label class=\"control-label\" for=\"birthday\">Fecha de Fundacion</label>  \n            <input class=\"form-control input-md\" #birthday=\"ngModel\" required name=\"birthday\" type=\"date\" placeholder=\"Fecha de Nacimiento\" [(ngModel)]=\"personal.birthday\">   \n            <div class=\"alert alert-danger\" *ngIf=\"birthday.invalid  && (birthday.dirty || birthday.touched)\">Fecha de nacimiento es requerida</div>\n\n        </div>\n      </div>\n      <br>\n      \n      \n      <div class=\"row \">\n          <div class=\"col\">\n              <label class=\"control-label\" for=\"email\">Correo Electronico</label>\n              <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" name=\"email\" type=\"text\" placeholder=\"Correo Electronico\" [(ngModel)]=\"personal.email\">\n                  <!--<div class=\"alert alert-danger\" [hidden]=\"email.valid\">Correo electronico es requerido</div>-->\n        \n          </div>\n          <div class=\"col\">\n  \n              <label class=\"control-label\" for=\"password\">Contraseña</label>  \n              <input class=\"form-control input-md\" #password=\"ngModel\" required name=\"password\" type=\"password\" [(ngModel)]=\"personal.password\">   \n                  <!--<div class=\"alert alert-danger\" [hidden]=\"password.valid\">Contraseña es requerida</div>-->\n       \n          </div>\n        </div>\n        <br>\n\n        <div class=\"row \">\n            <div class=\"col\">\n                <label class=\"control-label\" for=\"username\">Nombre de Usuario</label>  \n                <input class=\"form-control input-md\" #username=\"ngModel\" required name=\"username\" type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"personal.username\">   \n\n       </div>\n            <div class=\"col\">\n    \n                <label class=\"control-label\" for=\"password\">Confirmar Contraseña</label>  \n                  <input class=\"form-control input-md\" #password=\"ngModel\" required name=\"password\" type=\"password\" [(ngModel)]=\"personal.password\">   \n                    <!--  <div class=\"alert alert-danger\" [hidden]=\"password.valid\">Confirmar Contraseña</div>-->\n           \n            </div>\n          </div>\n<br>\n          <div class=\"row \">\n            <div class=\"col\">\n                <label class=\"control-label\" for=\"firstname\">Departamento de Ubicacion de la empresa</label>  \n                <select class=\"form-control\" [(ngModel)]=\"mainCategory\" name=\"mainCategory\">\n                  <option disabled [ngValue]=\"null\">-/-</option>\n                  <option [ngValue]=\"category\" *ngFor=\"let category of mainGroups\">{{category.title}}</option>\n                </select>\n                <div class=\"alert alert-danger\"  *ngIf=\"submitted && firstname.touched\"> Nombre es requerido</div>\n       \n            </div>\n            <div class=\"col\">\n    \n                <label class=\"control-label\" for=\"birthday\">Ciudad de Ubicacion de la empresa</label>  \n                <select class=\"form-control\" [(ngModel)]=\"subCategory\" name=\"subCategory\">\n                  <option [ngValue]=\"subcategory\" *ngFor=\"let subcategory of filterSubById(mainCategory.id)\">{{subcategory.title}}</option>\n                </select>\n                <div class=\"alert alert-danger\" *ngIf=\"birthday.invalid  && (birthday.dirty || birthday.touched)\">Fecha de nacimiento es requerida</div>\n    \n            </div>\n          </div>\n          <br><br><br>\n          <div class=\"row \">\n              <div class=\"col\">\n                  <label class=\"control-label\" for=\"phone\">Contacto 1</label>  \n                  <int-phone-prefix  #phone=\"ngModel\"  name=\"phone\"  placeholder=\"Telefono\" [(ngModel)]=\"personal.phone\"></int-phone-prefix>   \n                  <!--<div class=\"alert alert-danger\" [hidden]=\"phone.valid\">Telefono es requerido</div> -->\n              </div>\n              <div class=\"col\">\n      \n                  <label class=\"control-label\" for=\"phone\">Contacto 2</label> \n                <int-phone-prefix [(ngModel)]=\"personal.phone2\" name=\"phone2\" [locale]=\"'es'\"></int-phone-prefix>\n           \n              </div>\n            </div>\n            <br>\n            <br>\n\n            <div class=\"text-center\">\n              <h5>Extensiones de Redes Sociales</h5></div>\n                    <div class=\"row text-center\">\n                        <div class=\"col\">\n                  <span><a href=\"#\" class=\"fa fa-facebook\"></a></span> <input type=\"text\" placeholder=\"opcional\" class=\" input-md\">\n                   </div> \n                   <div class=\"col\">\n                      <span><a href=\"#\" class=\"fa fa-twitter\"></a></span> <input type=\"text\" placeholder=\"opcional\" class=\" input-md\">\n                       </div>         \n                </div>\n\n                <div class=\"row text-center\">\n                    <div class=\"col\">\n              <span><a href=\"#\" class=\"fa fa-instagram\"></a></span> <input type=\"text\" placeholder=\"opcional\"class=\" input-md\">\n               </div> \n               <div class=\"col\">\n                  <span><a href=\"#\" class=\"fa fa-pinterest\"></a></span> <input type=\"text\" placeholder=\"opcional\" class=\" input-md\">\n                   </div>         \n            </div>\n            <br>\n            <br>\n\n              <div class=\"form-group text-center space-40\">\n                  <button type=\"submit\" class=\"btn btn-outline-rounded btn-info \" (click)=\"goToNext(personalForm)\" >Siguiente</button>\n                </div>\n\n              \n          </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/business-form/business-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessFormComponent = /** @class */ (function () {
    function BusinessFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Informacion Personal';
        this.mainCategory = { title: 'Atlantida', id: 1 };
        this.subcategory = { itle: 'La Ceiba', parentId: 1 };
        this.mainGroups = [
            { id: 1, title: 'Atlantida', },
            { id: 2, title: 'Choluteca', },
            { id: 3, title: "Colón" },
            { id: 4, title: "Comayagua" },
            { id: 5, title: "Copán" },
            { id: 6, title: "Cortes" },
            { id: 7, title: "El Paraíso" },
            { id: 8, title: "Francisco Morazán" },
            { id: 9, title: "Gracias a Dios" },
            { id: 10, title: "Intibucá" },
            { id: 11, title: "Islas de la Bahía" },
            { id: 12, title: "La Paz" },
            { id: 13, title: "Lempira" },
            { id: 14, title: "Ocotepeque" },
            { id: 15, title: "Olancho" },
            { id: 16, title: "Santa Bárbara" },
            { id: 17, title: "Valle" },
            { id: 18, title: "Yoro" }
        ];
        this.subCategories = [{ title: 'La Ceiba', parentId: 1 },
            { title: 'Tela', parentId: 1 },
            { title: 'Jutiapa', parentId: 1 },
            { title: 'La Masica', parentId: 1 },
            { title: 'San Francisco', parentId: 1 },
            { title: 'Arizona', parentId: 1 },
            { title: 'Esparta', parentId: 1 },
            { title: 'El Porvenir', parentId: 1 },
            { title: 'Choluteca', parentId: 2 },
            { title: 'Apacilagua', parentId: 2 },
            { title: 'Concepción de María', parentId: 2 },
            { title: 'Duyure', parentId: 2 },
            { title: 'El Corpus', parentId: 2 },
            { title: 'El Triunfo', parentId: 2 },
            { title: 'Marcovia', parentId: 2 },
            { title: 'Morolica', parentId: 2 },
            { title: 'Namasigue', parentId: 2 },
            { title: 'Orocuina', parentId: 2 },
            { title: 'Pespire', parentId: 2 },
            { title: 'San Antonio de Flores', parentId: 2 },
            { title: 'San Isidro', parentId: 2 },
            { title: 'San José', parentId: 2 },
            { title: 'San Marcos de Colón', parentId: 2 },
            { title: 'Santa Ana de Yusguare', parentId: 2 },
            { title: 'Trujillo', parentId: 3 },
            { title: 'Balfate', parentId: 3 },
            { title: 'Iriona', parentId: 3 },
            { title: 'Limón', parentId: 3 },
            { title: 'Sabá', parentId: 3 },
            { title: 'Santa Fe', parentId: 3 },
            { title: 'Santa Rosa de Aguán', parentId: 3 },
            { title: 'Sonaguera', parentId: 3 },
            { title: 'Tocoa', parentId: 3 },
            { title: 'Bonito Oriental', parentId: 3 },
            { title: 'Comayagua', parentId: 4 },
            { title: 'Ajuterique', parentId: 4 },
            { title: 'El Rosario', parentId: 4 },
            { title: 'Esquías', parentId: 4 },
            { title: 'Humuya', parentId: 4 },
            { title: 'La libertad', parentId: 4 },
            { title: 'Lamaní', parentId: 4 },
            { title: 'La Trinidad', parentId: 4 },
            { title: 'Lejamani', parentId: 4 },
            { title: 'Meambar', parentId: 4 },
            { title: 'Minas de Oro', parentId: 4 },
            { title: 'Ojos de Agua', parentId: 4 },
            { title: 'San Jerónimo (Honduras)', parentId: 4 },
            { title: 'San José de Comayagua', parentId: 4 },
            { title: 'San José del Potrero', parentId: 4 },
            { title: 'San Luis', parentId: 4 },
            { title: 'San Sebastián', parentId: 4 },
            { title: 'Siguatepeque', parentId: 4 },
            { title: 'Villa de San Antonio', parentId: 4 },
            { title: 'Las Lajas', parentId: 4 },
            { title: 'Taulabé', parentId: 4 },
            { title: 'Santa Rosa de Copán', parentId: 5 },
            { title: 'Cabañas', parentId: 5 },
            { title: 'Concepción', parentId: 5 },
            { title: 'Copán Ruinas', parentId: 5 },
            { title: 'Corquín', parentId: 5 },
            { title: 'Cucuyagua', parentId: 5 },
            { title: 'Dolores', parentId: 5 },
            { title: 'Dulce Nombre', parentId: 5 },
            { title: 'El Paraíso', parentId: 5 },
            { title: 'Florida', parentId: 5 },
            { title: 'La Jigua', parentId: 5 },
            { title: 'La Unión', parentId: 5 },
            { title: 'Nueva Arcadia', parentId: 5 },
            { title: 'San Agustín', parentId: 5 },
            { title: 'San Antonio', parentId: 5 },
            { title: 'San Jerónimo', parentId: 5 },
            { title: 'San José', parentId: 5 },
            { title: 'San Juan de Opoa', parentId: 5 },
            { title: 'San Nicolás', parentId: 5 },
            { title: 'San Pedro', parentId: 5 },
            { title: 'Santa Rita', parentId: 5 },
            { title: 'Trinidad de Copán', parentId: 5 },
            { title: 'Veracruz', parentId: 5 },
            { title: 'San Pedro Sula', parentId: 6 },
            { title: 'Choloma', parentId: 6 },
            { title: 'Omoa', parentId: 6 },
            { title: 'Pimienta', parentId: 6 },
            { title: 'Potrerillos', parentId: 6 },
            { title: 'Puerto Cortés', parentId: 6 },
            { title: 'San Antonio de Cortés', parentId: 6 },
            { title: 'San Francisco de Yojoa', parentId: 6 },
            { title: 'San Manuel', parentId: 6 },
            { title: 'Santa Cruz de Yojoa', parentId: 6 },
            { title: 'Villanueva', parentId: 6 },
            { title: 'La Lima', parentId: 6 },
            { title: 'Yuscarán', parentId: 7 },
            { title: 'Alauca', parentId: 7 },
            { title: 'Danlí', parentId: 7 },
            { title: 'El Paraíso', parentId: 7 },
            { title: 'Güinope', parentId: 7 },
            { title: 'Jacaleapa', parentId: 7 },
            { title: 'Liure', parentId: 7 },
            { title: 'Morocelí', parentId: 7 },
            { title: 'Morocelí', parentId: 7 },
            { title: 'Potrerillos', parentId: 7 },
            { title: 'San Antonio de Flores', parentId: 7 },
            { title: 'San Lucas', parentId: 7 },
            { title: 'San Matías', parentId: 7 },
            { title: 'Soledad', parentId: 7 },
            { title: 'Teupasenti', parentId: 7 },
            { title: 'Texiguat', parentId: 7 },
            { title: 'Vado Ancho', parentId: 7 },
            { title: 'Yauyupe', parentId: 7 },
            { title: 'Trojes', parentId: 7 },
            { title: 'Distrito Central', parentId: 8 },
            { title: 'Alubarén', parentId: 8 },
            { title: 'Cedros', parentId: 8 },
            { title: 'Curarén', parentId: 8 },
            { title: 'El Porvenir', parentId: 8 },
            { title: 'Guaimaca', parentId: 8 },
            { title: 'La Libertad', parentId: 8 },
            { title: 'La Venta', parentId: 8 },
            { title: 'Lepaterique', parentId: 8 },
            { title: 'Maraita', parentId: 8 },
            { title: 'Marale', parentId: 8 },
            { title: 'Nueva Armenia', parentId: 8 },
            { title: 'Ojojona', parentId: 8 },
            { title: 'Orica', parentId: 8 },
            { title: 'Reitoca', parentId: 8 },
            { title: 'Sabanagrande', parentId: 8 },
            { title: 'San Antonio de Oriente', parentId: 8 },
            { title: 'San Buenaventura', parentId: 8 },
            { title: 'San Ignacio', parentId: 8 },
            { title: 'San Juan de Flores', parentId: 8 },
            { title: 'San Miguelito', parentId: 8 },
            { title: 'Santa Ana', parentId: 8 },
            { title: 'Santa Lucía', parentId: 8 },
            { title: 'Talanga', parentId: 8 },
            { title: 'Tatumbla', parentId: 8 },
            { title: 'Valle de Ángeles', parentId: 8 },
            { title: 'Villa de San Francisco', parentId: 8 },
            { title: 'Vallecillo', parentId: 8 },
            { title: 'Puerto Lempira', parentId: 9 },
            { title: 'Brus Laguna', parentId: 9 },
            { title: 'Ahuas', parentId: 9 },
            { title: 'Juan Francisco Bulnes', parentId: 9 },
            { title: 'Ramón Villeda Morales', parentId: 9 },
            { title: 'Wampusirpe', parentId: 9 },
            { title: 'La Esperanza', parentId: 10 },
            { title: 'Camasca', parentId: 10 },
            { title: 'Colomoncagua', parentId: 10 },
            { title: 'Concepción', parentId: 10 },
            { title: 'Dolores', parentId: 10 },
            { title: 'Intibucá', parentId: 10 },
            { title: 'Jesús de Otoro', parentId: 10 },
            { title: 'Magdalena', parentId: 10 },
            { title: 'Masaguara', parentId: 10 },
            { title: 'San Antonio', parentId: 10 },
            { title: 'San Isidro', parentId: 10 },
            { title: 'San Juan', parentId: 10 },
            { title: 'San Marcos de la Sierra', parentId: 10 },
            { title: 'San Miguel Guancapla', parentId: 10 },
            { title: 'Santa Lucía', parentId: 10 },
            { title: 'Yamaranguila', parentId: 10 },
            { title: 'San Francisco de Opalaca', parentId: 10 },
            { title: 'Roatán', parentId: 11 },
            { title: 'Guanaja', parentId: 11 },
            { title: 'José Santos Guardiola', parentId: 11 },
            { title: 'Utila', parentId: 11 },
            { title: 'La Paz', parentId: 12 },
            { title: 'Aguanqueterique', parentId: 12 },
            { title: 'Cabañas', parentId: 12 },
            { title: 'Cane', parentId: 12 },
            { title: 'Chinacla', parentId: 12 },
            { title: 'Guajiquiro', parentId: 12 },
            { title: 'Lauterique', parentId: 12 },
            { title: 'Marcala', parentId: 12 },
            { title: 'Mercedes de Oriente', parentId: 12 },
            { title: 'Opatoro', parentId: 12 },
            { title: 'San Antonio del Norte', parentId: 12 },
            { title: 'San José', parentId: 12 },
            { title: 'San Juan', parentId: 12 },
            { title: 'San Pedro de Tutule', parentId: 12 },
            { title: 'Santa Ana', parentId: 12 },
            { title: 'Santa Elena', parentId: 12 },
            { title: 'Santa María', parentId: 12 },
            { title: 'Santiago de Puringla', parentId: 12 },
            { title: 'Yarula', parentId: 12 },
            { title: 'Gracias', parentId: 13 },
            { title: 'Belén', parentId: 13 },
            { title: 'Candelaria', parentId: 13 },
            { title: 'Cololaca', parentId: 13 },
            { title: 'Erandique', parentId: 13 },
            { title: 'Gualcince', parentId: 13 },
            { title: 'Guarita', parentId: 13 },
            { title: 'La Campa', parentId: 13 },
            { title: 'La Iguala', parentId: 13 },
            { title: 'Las Flores', parentId: 13 },
            { title: 'La Unión', parentId: 13 },
            { title: 'La Virtud', parentId: 13 },
            { title: 'Lepaera', parentId: 13 },
            { title: 'Mapulaca', parentId: 13 },
            { title: 'Piraera', parentId: 13 },
            { title: 'San Andrés', parentId: 13 },
            { title: 'San Francisco', parentId: 13 },
            { title: 'San Juan Guarita', parentId: 13 },
            { title: 'San Manuel Colohete', parentId: 13 },
            { title: 'San Rafael', parentId: 13 },
            { title: 'San Sebastián', parentId: 13 },
            { title: 'Santa Cruz', parentId: 13 },
            { title: 'Talgua', parentId: 13 },
            { title: 'Tambla', parentId: 13 },
            { title: 'Tomalá', parentId: 13 },
            { title: 'Valladolid', parentId: 13 },
            { title: 'Virginia', parentId: 13 },
            { title: 'San Marcos de Caiquín', parentId: 13 },
            { title: 'Ocotepeque', parentId: 14 },
            { title: 'Belén Gualcho', parentId: 14 },
            { title: 'Concepción', parentId: 14 },
            { title: 'Dolores Merendón', parentId: 14 },
            { title: 'Fraternidad', parentId: 14 },
            { title: 'La Encarnación', parentId: 14 },
            { title: 'La Labor', parentId: 14 },
            { title: 'Lucerna', parentId: 14 },
            { title: 'Mercedes', parentId: 14 },
            { title: 'San Fernando', parentId: 14 },
            { title: 'San Francisco del Valle', parentId: 14 },
            { title: 'San Jorge', parentId: 14 },
            { title: 'San Marcos', parentId: 14 },
            { title: 'Santa Fe', parentId: 14 },
            { title: 'Sensenti', parentId: 14 },
            { title: 'Sinuapa', parentId: 14 },
            { title: 'Juticalpa', parentId: 15 },
            { title: 'Campamento', parentId: 15 },
            { title: 'Catacamas', parentId: 15 },
            { title: 'Concordia', parentId: 15 },
            { title: 'Dulce Nombre de Culmí', parentId: 15 },
            { title: 'El Rosario', parentId: 15 },
            { title: 'Esquipulas del Norte', parentId: 15 },
            { title: 'Gualaco', parentId: 15 },
            { title: 'Guarizama', parentId: 15 },
            { title: 'Guata', parentId: 15 },
            { title: 'Guayape', parentId: 15 },
            { title: 'Jano', parentId: 15 },
            { title: 'La Unión', parentId: 15 },
            { title: 'Mangulile', parentId: 15 },
            { title: 'Manto', parentId: 15 },
            { title: 'Salamá', parentId: 15 },
            { title: 'San Esteban', parentId: 15 },
            { title: 'San Francisco de Becerra', parentId: 15 },
            { title: 'San Francisco de la Paz', parentId: 15 },
            { title: 'Santa María del Real', parentId: 15 },
            { title: 'Silca', parentId: 15 },
            { title: 'Yocón', parentId: 15 },
            { title: 'Patuca', parentId: 15 },
            { title: 'Santa Bárbara', parentId: 16 },
            { title: 'Arada', parentId: 16 },
            { title: 'Atima', parentId: 16 },
            { title: 'Azacualpa', parentId: 16 },
            { title: 'Ceguaca', parentId: 16 },
            { title: 'Concepción del Norte', parentId: 16 },
            { title: 'Concepción del Sur', parentId: 16 },
            { title: 'Chinda', parentId: 16 },
            { title: 'El Níspero', parentId: 16 },
            { title: 'Gualala', parentId: 16 },
            { title: 'Ilama', parentId: 16 },
            { title: 'Las Vegas', parentId: 16 },
            { title: 'Macuelizo', parentId: 16 },
            { title: 'Naranjito', parentId: 16 },
            { title: 'Nuevo Celilac', parentId: 16 },
            { title: 'Nueva Frontera', parentId: 16 },
            { title: 'Petoa', parentId: 16 },
            { title: 'Protección', parentId: 16 },
            { title: 'Quimistán', parentId: 16 },
            { title: 'San Francisco de Ojuera', parentId: 16 },
            { title: 'San José de las Colinas', parentId: 16 },
            { title: 'San Luis', parentId: 16 },
            { title: 'San Marcos', parentId: 16 },
            { title: 'San Nicolás', parentId: 16 },
            { title: 'San Pedro Zacapa', parentId: 16 },
            { title: 'San Vicente Centenario', parentId: 16 },
            { title: 'Santa Rita', parentId: 16 },
            { title: 'Trinidad', parentId: 16 },
            { title: 'Nacaome', parentId: 17 },
            { title: 'Alianza', parentId: 17 },
            { title: 'Amapala', parentId: 17 },
            { title: 'Aramecina', parentId: 17 },
            { title: 'Caridad', parentId: 17 },
            { title: 'Goascorán', parentId: 17 },
            { title: 'Langue', parentId: 17 },
            { title: 'San Francisco de Coray', parentId: 17 },
            { title: 'San Lorenzo', parentId: 17 },
            { title: 'Yoro', parentId: 18 },
            { title: 'Arenal', parentId: 18 },
            { title: 'El Negrito', parentId: 18 },
            { title: 'El Progreso', parentId: 18 },
            { title: 'Jocón', parentId: 18 },
            { title: 'Morazán', parentId: 18 },
            { title: 'Olanchito', parentId: 18 },
            { title: 'Santa Rita', parentId: 18 },
            { title: 'Sulaco', parentId: 18 },
            { title: 'Victoria', parentId: 18 },
            { title: 'Yorito', parentId: 18 }
        ];
    }
    BusinessFormComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
        this.submitted = false;
    };
    BusinessFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            this.submitted = false;
            return false;
        }
        this.submitted = true;
        this.formDataService.setPersonal(this.personal);
        return true;
    };
    BusinessFormComponent.prototype.goToPrevious = function () {
        // Navigate to the personal page
        this.router.navigateByUrl('/user-type');
        ;
    };
    BusinessFormComponent.prototype.goToNext = function (form) {
        //if (this.save(form)) {
        // Navigate to the property page
        this.router.navigateByUrl('/pricing');
        //}
    };
    BusinessFormComponent.prototype.filterSubById = function (id) {
        return this.subCategories.filter(function (item) { return item.parentId === id; });
    };
    BusinessFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-business-form',
            template: __webpack_require__("../../../../../src/app/business-form/business-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/business-form/business-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], BusinessFormComponent);
    return BusinessFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export Personal */
/* unused harmony export Address */
/* unused harmony export TipoInmobiliario */
/* unused harmony export OtrosCargos */
var FormData = /** @class */ (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.password = '';
        this.birthday = '';
        this.username = '';
        this.phone = '';
        this.phone2 = '';
        this.cellphone = '';
        this.tipoInmobiliario = '';
        this.departamento = '';
        this.ciudad = '';
        this.direccion = '';
        this.imagenes = '';
        this.tipoTransaccion = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());

var Personal = /** @class */ (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.birthday = '';
        this.username = '';
        this.phone = '';
        this.phone2 = '';
        this.cellphone = '';
    }
    return Personal;
}());

var Address = /** @class */ (function () {
    function Address() {
        this.tipoInmobiliario = '';
        this.departamento = '';
        this.ciudad = '';
        this.direccion = '';
        this.imagenes = '';
        this.tipoTransaccion = '';
    }
    return Address;
}());

var TipoInmobiliario = /** @class */ (function () {
    function TipoInmobiliario() {
        this.tipoDeComplejo = '';
        this.amenidades = [];
        this.metrosCuadrados = 0;
        this.infoAdicionl = '';
        this.precio = 0;
        this.frecuencia = '';
        this.habitaciones = '';
        this.banos = '';
        this.parqueos = '';
        this.areas = '';
        this.varasCuadradasTerreno = '';
        this.varasCuadradasConstruccion = '';
        this.otrosCargos = {};
    }
    return TipoInmobiliario;
}());

var OtrosCargos = /** @class */ (function () {
    function OtrosCargos() {
        this.nombre = '';
        this.precio = 0;
        this.frecuencia = '';
    }
    return OtrosCargos;
}());



/***/ }),

/***/ "../../../../../src/app/data/formData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormDataService = /** @class */ (function () {
    function FormDataService() {
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            birthday: this.formData.birthday,
            password: this.formData.password,
            username: this.formData.username,
            phone: this.formData.phone,
            phone2: this.formData.phone2,
            cellphone: this.formData.cellphone
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.birthday = data.birthday;
        this.formData.phone = data.phone;
        this.formData.phone2 = data.phone2;
        this.formData.cellphone = data.cellphone;
    };
    FormDataService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
    };
    FormDataService.prototype.getAddress = function () {
        // Return the Address data
        var address = {
            tipoInmobiliario: this.formData.tipoInmobiliario,
            departamento: this.formData.departamento,
            ciudad: this.formData.ciudad,
            direccion: this.formData.direccion,
            imagenes: this.formData.imagenes,
            tipoTransaccion: this.formData.tipoTransaccion
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.tipoInmobiliario = data.tipoInmobiliario;
        this.formData.departamento = data.departamento;
        this.formData.ciudad = data.ciudad;
        this.formData.direccion = data.direccion;
        this.formData.imagenes = data.imagenes;
        this.formData.tipoTransaccion = data.tipoTransaccion;
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "../../../../../src/app/estate-form/estate-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/estate-form/estate-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n  <form class=\"form-horizontal\">\n\n    <h3 class=\"head text-center\">Especificaciones de la Finca</h3>\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"email\">Elija el tipo de topografia</label>\n      <select class=\"form-control input-md\" [(ngModel)]=\"especificaciones\" name=\"tipoComplejo\">\n        <option *ngFor=\"let c of estateTypes\" [ngValue]=\"c\">{{c.name}}</option>\n      </select>\n    </div>\n\n    <h3 class=\"head text-center\">Elije las Características </h3>\n\n    <div class=\"row\">\n      <div class='col-xs-12 col-sm-6'>\n        <div class=\"form-group\">\n          <label class=\"control-label\">Tamaño en Manzanas</label>\n          <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Terreno\">\n        </div>\n      </div>\n    </div>\n    <h3 class=\"head text-center\">Elije las Amenidades que posee l</h3>\n\n    <div class=\"form-group\">\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"carretera\"> Inmediaciones Carreteras\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"fuente\"> Fuentes de agua\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"cultivadas\"> Cultivadas\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"criaDeAnimales\"> Infraestructura para cria de animales\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"cercado\"> Cercado perimetral\n        </label>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class='col-md-12'>\n        <label class=\"control-label\">Informacion Adicional</label>\n        <textarea class=\"form-control\" rows=\"3\"></textarea>\n      </div>\n    </div>\n    <h3 class=\"head text-center\">Precio</h3>\n    <div class=\"row\">\n      <div class='col-xs-12 col-sm-6'>\n        <form class=\"form-inline\">\n          <div class=\"form-group mb-2\">\n            Monto\n          </div>\n        <div class=\"form-group mx-sm-2 mb-2\">\n          <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n        </div>\n      </form>\n      </div>\n    </div>\n    <app-other-charges class=\"todos\"></app-other-charges>\n\n    <div class=\"form-group text-center space-40\">\n      <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n          class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n      <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n          class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/estate-form/estate-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstateFormComponent = /** @class */ (function () {
    function EstateFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.estateTypes = [
            { id: 1, name: "Montaña" },
            { id: 2, name: "Planicie" },
            { id: 3, name: "Montaña y Planicie" }
        ];
        this.amenities = [
            { id: 1, name: "Inmediaciones Carreteras" },
            { id: 2, name: "Fuentes de agua" },
            { id: 2, name: "Montaña y Planicie" },
            { id: 2, name: "Cultivadas" },
            { id: 2, name: "Infraestructura para cria de animales" },
            { id: 2, name: "Cercado perimetral" },
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    EstateFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    EstateFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    EstateFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    EstateFormComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    EstateFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-estate-form',
            template: __webpack_require__("../../../../../src/app/estate-form/estate-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/estate-form/estate-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], EstateFormComponent);
    return EstateFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fb-login/fb-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fb-login/fb-login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a class=\"btn btn-block btn-social btn-facebook\" [routerLink]=\"socialSignIn('facebook')\">\n  <span class=\"fa fa-facebook\"></span> Registrarse con Facebook\n</a>\n<a class=\"btn btn-block btn-social btn-twitter\">\n  <span class=\"fa fa-twitter\"></span> Registrarse con Twitter\n</a>\n<a class=\"btn btn-block btn-social btn-pinterest\">\n  <span class=\"fa fa-pinterest\"></span> Registrarse con Pinterest\n</a>"

/***/ }),

/***/ "../../../../../src/app/fb-login/fb-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular5_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbLoginComponent = /** @class */ (function () {
    function FbLoginComponent(socialAuthService) {
        this.socialAuthService = socialAuthService;
    }
    FbLoginComponent.prototype.ngOnInit = function () {
    };
    FbLoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_1_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_1_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
        });
    };
    FbLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fb-login',
            template: __webpack_require__("../../../../../src/app/fb-login/fb-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fb-login/fb-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular5_social_login__["AuthService"]])
    ], FbLoginComponent);
    return FbLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"ui main text container\">\n    <h1 class=\"ui header\">Inicio</h1>\n    <p>This is a basic fixed menu template using fixed size containers.</p>\n    <p>A text container is used for the main container, which is useful for single column layouts</p>\n\n  </div>\n  <slideshow  [height]=\"'400px'\"\n              [imageUrls]=\"imageUrls\"\n              [autoPlay]=\"true\">\n  </slideshow>\n\n  <div class=\"ui big horizontal list\">\n    <div class=\"item\">\n      <img class=\"ui medium bordered image\" src=\"/assets/home.png\">\n      <div class=\"content\">\n        <div class=\"header\">Residencial</div>\n       \n      </div>\n    </div>\n    <div class=\"item\">\n      <img class=\"ui medium bordered image\" src=\"/assets/home.png\">\n      <div class=\"content\">\n        <div class=\"header\">Industrial</div>\n \n      </div>\n    </div>\n    <div class=\"item\">\n      <img class=\"ui medium bordered image\" src=\"/assets/home.png\">\n      <div class=\"content\">\n        <div class=\"header\">Comercial</div>\n       \n      </div>\n    </div>\n\n    <div class=\"item\">\n      <img class=\"ui medium bordered image\" src=\"/assets/home.png\">\n      <div class=\"content\">\n        <div class=\"header\">Terreno</div>\n       \n      </div>\n    </div>\n\n    <div class=\"item\">\n      <img class=\"ui medium bordered image\" src=\"/assets/home.png\">\n      <div class=\"content\">\n        <div class=\"header\">Finca</div>\n       \n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui inverted vertical footer segment\">\n    <div class=\"ui center aligned container\">\n      <div class=\"ui stackable inverted divided grid\">\n        <div class=\"three wide column\">\n          <h4 class=\"ui inverted header\">Group 1</h4>\n          <div class=\"ui inverted link list\">\n            <a href=\"#\" class=\"item\">Link One</a>\n            <a href=\"#\" class=\"item\">Link Two</a>\n            <a href=\"#\" class=\"item\">Link Three</a>\n            <a href=\"#\" class=\"item\">Link Four</a>\n          </div>\n        </div>\n        <div class=\"three wide column\">\n          <h4 class=\"ui inverted header\">Group 2</h4>\n          <div class=\"ui inverted link list\">\n            <a href=\"#\" class=\"item\">Link One</a>\n            <a href=\"#\" class=\"item\">Link Two</a>\n            <a href=\"#\" class=\"item\">Link Three</a>\n            <a href=\"#\" class=\"item\">Link Four</a>\n          </div>\n        </div>\n        <div class=\"three wide column\">\n          <h4 class=\"ui inverted header\">Group 3</h4>\n          <div class=\"ui inverted link list\">\n            <a href=\"#\" class=\"item\">Link One</a>\n            <a href=\"#\" class=\"item\">Link Two</a>\n            <a href=\"#\" class=\"item\">Link Three</a>\n            <a href=\"#\" class=\"item\">Link Four</a>\n          </div>\n        </div>\n        <div class=\"seven wide column\">\n          <h4 class=\"ui inverted header\">Footer Header</h4>\n          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>\n        </div>\n      </div>\n      <div class=\"ui inverted section divider\"></div>\n       <div class=\"ui horizontal inverted small divided link list\">\n        <a class=\"item\" href=\"#\">Site Map</a>\n        <a class=\"item\" href=\"#\">Contact Us</a>\n        <a class=\"item\" href=\"#\">Terms and Conditions</a>\n        <a class=\"item\" href=\"#\">Privacy Policy</a>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageUrls = [
            { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
            { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: function () { return alert('custom click function'); } },
            { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
            'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/house-form/house-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/house-form/house-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n  <form class=\"form-horizontal\">\n     \n        <h3 class=\"head text-center\">Ahora las Especificaciones</h3>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"email\">Elige el tipo de acomodacion habitacional</label>\n          <select class=\"form-control input-md\" [(ngModel)]=\"especificaciones\" name=\"tipoComplejo\">\n            <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n          </select>\n        </div>\n        <h3 class=\"head text-center\">Elige las caracteristicas</h3>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"firstname\">Numero de Habitaciones</label>\n              <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Habitaciones\">\n\n            </div>\n          </div>\n          \n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"lastname\">Numero de Baños</label>\n              <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Baños\">\n\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"lastname\">Parqueos disponibles</label>\n              <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Parqueos\">\n\n            </div>\n          </div>\n        </div>\n        <h3 class=\"head text-center\">Elige las areas que posee</h3>\n\n\n        <div class=\"form-group\">\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Sala</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Comedor</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Cocina</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Lavanderia</label>\n\n            <label class=\"radio\"><input type=\"checkbox\" name=\"optradio\" >Estudio</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Area de Entretenimiento</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Terraza</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Zona de esparcimiento</label>\n\n            <label class=\"radio-inline\"><input type=\"checkbox\" name=\"optradio\" >Gimnasio y/o spa</label>\n\n          \n        </div>\n\n        <h3 class=\"head text-center\">Elige las amenidades que posee</h3>\n        <div class=\"form-group\">\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"security\"> Seguridad\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"waterTank\"> Tanque de Agua\n              </label>\n            </div>\n            <div class=\"radio\">\n                <label>\n                  <input type=\"checkbox\" name=\"waterTank\"> Pozo\n                </label>\n              </div>\n            <div class=\"radio\">\n                <label>\n                  <input type=\"checkbox\" name=\"furniture\"> Amueblado\n                </label>\n              </div>\n     \n          </div>\n\n        <div class=\"row\">\n          <div class='col-md-12'>\n            <label class=\"control-label\">Espacio libre para informacion Adicional</label>\n            <textarea class=\"form-control\" rows=\"3\"></textarea>\n          </div>\n      </div>\n<br>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Varas Cuadradas de Terreno</label>\n              <input class=\"form-control input-md\" type=\"text\" suffix=\" V2\" mask=\"separator.2\" thousandSeparator=\",\"   placeholder=\"Terreno\">\n            </div>\n          </div>\n          <div class='col-xs-12'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Varas Cuadradas de Construccion</label>\n              <input class=\"form-control input-md\" type=\"text\" suffix=\" V2\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Construccion\">\n            </div>\n          </div>\n        </div>\n\n        <h3 class=\"head text-center\">Precio y otros cargos</h3>\n        <br>\n        <table class=\"table table-borderless\">\n\n          <tbody>\n            <tr>\n              <th scope=\"row\">Precio</th>\n    \n              <td scope=\"row\"><input mask=\"separator.2\" thousandSeparator=\",\" prefix=\"L.\" class=\"form-control\"  placeholder=\"Precio\">\n              </td>\n              </tr>\n          </tbody>\n        </table>\n        <!-- <div class=\"row text-center\">\n          <div class='col-xs-12 col-sm-6'>\n            <form class=\"form-inline text-center\">\n              <div class=\"form-group mb-2\">\n                Precio\n              </div>\n            <div class=\"form-group mx-sm-2 mb-2\">\n              <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n            </div>\n          </form>\n          </div>\n        </div> -->\n  \n         <app-other-charges class=\"todos\"></app-other-charges>\n      \n    <div class=\"form-group text-center space-40\">\n      <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n          class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n      <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n          class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/house-form/house-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HouseFormComponent = /** @class */ (function () {
    function HouseFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
        this.complexTypes = [
            { id: 1, name: "Complejo de viviendas" },
            { id: 2, name: "Vivienda apartada" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    HouseFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    HouseFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    HouseFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    HouseFormComponent.prototype.goToNext = function (form) {
        this.router.navigate(['/preview']);
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/preview']);
        }
    };
    HouseFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-house-form',
            template: __webpack_require__("../../../../../src/app/house-form/house-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/house-form/house-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], HouseFormComponent);
    return HouseFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/land-form/land-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/land-form/land-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n    <form class=\"form-horizontal\">\n       \n          <h3 class=\"head text-center\">Especificaciones del Terreno</h3>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"email\">Elija el tipo de actividad del Terreno</label>\n            <select class=\"form-control input-md\" [(ngModel)]=\"landType\" name=\"tipoTerreno\">\n              <option *ngFor=\"let c of landTypes\" [ngValue]=\"c\">{{c.name}}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"control-label\" for=\"email\">Elija el tipo de acomodacion</label>\n              <select class=\"form-control input-md\" [(ngModel)]=\"complexType\" name=\"tipoComplejo\">\n                <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n              </select>\n            </div>\n\n          <h3 class=\"head text-center\">Elije las caracteristicas</h3>\n    \n          <div class=\"row\">\n            <div class='col-xs-12 col-sm-6'>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Tamaño en varas Cuadradas</label>\n                <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\"  placeholder=\"Terreno\">\n              </div>\n            </div>\n          </div>\n          <h3 class=\"head text-center\">Elije las amenidades </h3>\n  \n          <div class=\"form-group\">\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"security\"> Seguridad\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"waterTank\"> Tanque de Agua\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"checkbox\" name=\"waterTank\"> Pozo\n              </label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class='col-md-12'>\n                <label class=\"control-label\">Informacion Adicional</label>\n                <textarea class=\"form-control\" rows=\"3\"></textarea>\n              </div>\n          </div>\n          <h3 class=\"head text-center\">Precio</h3>\n          <div class=\"row\">\n            <div class='col-xs-12 col-sm-6'>\n              <form class=\"form-inline\">\n                <div class=\"form-group mb-2\">\n                  Monto\n                </div>\n              <div class=\"form-group mx-sm-2 mb-2\">\n                <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n              </div>\n            </form>\n            </div>\n          </div>\n          <app-other-charges class=\"todos\"></app-other-charges>\n        \n      <div class=\"form-group text-center space-40\">\n        <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n            class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n        <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n            class=\"glyphicon glyphicon-arrow-right\"></span></button>\n      </div>\n  \n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/land-form/land-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandFormComponent = /** @class */ (function () {
    function LandFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.complexTypes = [
            { id: 1, name: "Privado" },
            { id: 2, name: "Independiente" }
        ];
        this.landTypes = [
            { id: 1, name: "Residencial" },
            { id: 2, name: "Comercial" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    LandFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    LandFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    LandFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    LandFormComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    LandFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-land-form',
            template: __webpack_require__("../../../../../src/app/land-form/land-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/land-form/land-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], LandFormComponent);
    return LandFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center container col-md-5 \">\n\n<form class=\"form-signin\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Iniciar Sesion</h1>\n      <label for=\"inputEmail\" class=\"sr-only\">Correo electronico</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Correo Electronico\" required=\"\" autofocus=\"\">\n      <label for=\"inputPassword\" class=\"sr-only\">Contraseña</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Contraseña\" required=\"\">\n      <div class=\"checkbox mb-3\">\n        <label>\n          <input type=\"checkbox\" value=\"remember-me\"> Recordar me\n        </label>\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Enviar</button>\n      <p class=\"mt-5 mb-3 text-muted\">© 2017-2018</p>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mission/mission.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mission/mission.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n<h1>Mision</h1>\n<p>\n  Somos una empresa en el sector inmobiliario en línea, radicada en la ciudad de El Progreso, cuyo objetivo es\n  generar acercamientos entre arrendatarios o vendedores del sector inmobiliario con potenciales inquilinos o\n  compradores por medio de una aplicación web.\n</p>\n<h1>Vision</h1>\n<p>\n  Convertirnos en el principal socio para oferentes inmobiliarios dado nuestra capacidad para conectarlos con\n  clientes y en la herramienta preferida para demandantes de bienes inmobiliarios gracias a su capacidad a la\n  capacidad de adaptación en la generación de resultados.\n</p>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/mission/mission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MissionComponent = /** @class */ (function () {
    function MissionComponent() {
    }
    MissionComponent.prototype.ngOnInit = function () {
    };
    MissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mission',
            template: __webpack_require__("../../../../../src/app/mission/mission.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mission/mission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MissionComponent);
    return MissionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/other-charges/other-charges.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box1 {\n    border: solid 1px #006699;\n    padding: 20px;\n    background: #f3f3f3;\n    border-radius: 5px;\n  }\n\n  .todos input.textfield {\n    width: 480px;\n    height: 36px;\n    margin-right: 20px;\n    font-size: 1.4em;\n    vertical-align: top;\n  }\n\n  .todos input.checkbox {\n    width: 20px;\n    height: 20px;\n  }\n\n  /* .todos .checked {\n    text-decoration: line-through;\n  } */\n\n  .todos button {\n    height: 36px;\n    font-size: 1.1em;\n    vertical-align: top;\n    border: solid 1px #999;\n    border-radius: 2px;\n  }\n\n  .todos .delete-icon {\n    diplay: inline-block;\n    cursor: pointer;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/other-charges/other-charges.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todos\">\n\n  <div>\n\n    <table class=\"table table-borderless\">\n\n      <tbody>\n        <tr>\n          <th scope=\"row\">Deposito en Garantia</th>\n\n          <td scope=\"row\"><input mask=\"separator.2\" thousandSeparator=\",\" prefix=\"L.\" class=\"form-control\"  placeholder=\"Precio\">\n          </td>\n          <td>         <select class=\"form-control\" required [(ngModel)]=\"selectedFrecuency1\" name=\"frecuency\" >\n            <option [ngValue]=\"null\" disabled>Frecuencia</option>\n            <option *ngFor=\"let c of frecuencies\" [value]=\"c\">{{c}} </option>\n            </select></td>\n          <td >       <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked\">\n            <label class=\"custom-control-label\" for=\"defaultUnchecked\">Reembolsable</label>\n        </div></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Seguridad</th>\n          <td scope=\"row\">  <input mask=\"separator.2\" thousandSeparator=\",\" prefix=\"L.\" class=\"form-control\"  placeholder=\"Precio\">\n          </td>\n          <td>        <select class=\"form-control\" required [(ngModel)]=\"selectedFrecuency2\" name=\"frecuency\" >\n           \n            <option *ngFor=\"let c of frecuencies\" [value]=\"c\">{{c}} </option>\n            </select></td>\n          <td>          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked2\">\n            <label class=\"custom-control-label\" for=\"defaultUnchecked2\">Reembolsable</label>\n        </div></td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Deposito de Mantenimiento</th>\n\n          <td scope=\"row\">  <input mask=\"separator.2\" thousandSeparator=\",\" prefix=\"L.\" class=\"form-control\"  placeholder=\"Precio\">\n          </td>\n          <td><select class=\"form-control\" required [(ngModel)]=\"selectedFrecuency3\" name=\"frecuency\" >\n           \n            <option *ngFor=\"let c of frecuencies\" [value]=\"c\">{{c}} </option>\n            </select></td>\n            <td>       <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked3\">\n              <label class=\"custom-control-label\" for=\"defaultUnchecked3\">Reembolsable</label>\n          </div>\n            </td>\n        </tr>\n        <tr   *ngFor=\"let todo of todos; let i=index\">\n          <!-- <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"todo.completed\" />Reembolsable -->\n          <th [ngClass]=\"{'checked': todo.completed}\"> {{ todo.newTodo }}</th>\n        <td>  <input type=\"text\" mask=\"separator.2\" thousandSeparator=\",\"  prefix=\" L.\"  class=\"form-control\" required [(ngModel)]=\"todo.price\"  (keyup.enter)=\"price=''\" name=\"price\" placeholder=\"Precio\"></td>\n    \n            <td><select class=\"form-control\" required [(ngModel)]=\"todo.frecuency\" name=\"frecuency\" >\n              <option [ngValue]=\"1\" ></option>\n              <option *ngFor=\"let c of frecuencies\" [value]=\"c\">{{c}} </option>\n              </select></td>    \n             <td><div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"todo.reembolsable\"id=\"defaultUnchecked4\">\n              <label class=\"custom-control-label\" for=\"defaultUnchecked4\">Reembolsable</label>\n          </div></td>\n          <td><span (click)=\"deleteTodo(i)\" class=\"delete-icon\">[Eliminar]</span></td>\n          \n        </tr>\n      </tbody>\n    </table>\n    <!-- <form class=\"form-inline\"  *ngFor=\"let todo of todos; let i=index\">\n       <span [ngClass]=\"{'checked': todo.completed}\"> {{ todo.newTodo }} \n        <input type=\"text\" mask=\"separator.2\" thousandSeparator=\",\"  prefix=\" L.\"  class=\"form-control\" required [(ngModel)]=\"todo.price\"  (keyup.enter)=\"price=''\" name=\"price\" placeholder=\"Precio\">\n\n         {{todo.frecuency}}</span>      <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked\">\n          <label class=\"custom-control-label\" for=\"defaultUnchecked\">Reembolsable</label>\n      </div>\n      <span (click)=\"deleteTodo(i)\" class=\"delete-icon\">[Eliminar]</span>\n      \n      </form> -->\n    <form *ngIf=\"isOn\"class=\"form-inline\" (submit)=\"addTodo($event)\">\n      <div class=\"form-group mb-2\">\n        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"newTodo\" (keyup.enter)=\"newTodo=''\" name=\"newTodo\" placeholder=\"Nombre\">\n      </div>\n      <div class=\"form-group mx-sm-2 mb-2\">\n        <input type=\"text\" mask=\"separator.2\" thousandSeparator=\",\"  prefix=\" L.\"  class=\"form-control\" required [(ngModel)]=\"price\"  (keyup.enter)=\"price=''\" name=\"price\" placeholder=\"Precio\">\n\n      </div>\n      <div class=\"form-group mr-sm-2 mb-2\">\n        <select class=\"form-control\" required [(ngModel)]=\"selectedFrecuency\" name=\"frecuency\" >\n          <option [ngValue]=\"1\" ></option>\n          <option *ngFor=\"let c of frecuencies\" [value]=\"c\">{{c}} </option>\n          </select>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"reembolsable\" id=\"defaultUnchecked4\">\n        <label class=\"custom-control-label\" for=\"defaultUnchecked4\">Reembolsable</label>\n    </div>\n\n      <button type=\"submit\" class=\"btn btn-success mb-2\" [disabled]=\"newTodo===''\">Guardar</button>\n\n    </form> \n\n  </div>\n\n\n  <!-- <div [hidden]=\"newTodo\">\n      Type in a new todo...\n    </div> -->\n\n  <div [hidden]=\"!newTodo\">\n    <!-- Another two-way binding example -->\n    <!-- Escribiendo: {{ newTodo }} -->\n  </div>\n\n\n\n  \n  <button class=\"btn btn-primary mb-2\"  (click)=\"isOn= true\">Agregar</button>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/other-charges/other-charges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherChargesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherChargesComponent = /** @class */ (function () {
    function OtherChargesComponent() {
        this.frecuencies = ["Mensual", "Anual"];
        this.selectedFrecuency = null;
        this.selectedFrecuency1 = null;
        this.reembolsable = false;
        this.selectedFrecuency2 = null;
        this.selectedFrecuency3 = null;
        this.newTodo = '';
        this.todos = [];
    }
    OtherChargesComponent.prototype.addTodo = function (event) {
        this.todoObj = {
            newTodo: this.newTodo,
            price: this.price,
            frecuency: this.selectedFrecuency,
            completed: false,
            reembolsable: this.reembolsable
        };
        console.log(this.todoObj);
        this.isOn = false;
        this.todos.push(this.todoObj);
        this.newTodo = '';
        this.price = 0;
        this.selectedFrecuency = '';
        this.reembolsable = false;
        event.preventDefault();
    };
    OtherChargesComponent.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    OtherChargesComponent.prototype.ngOnInit = function () {
    };
    OtherChargesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-other-charges',
            template: __webpack_require__("../../../../../src/app/other-charges/other-charges.component.html"),
            styles: [__webpack_require__("../../../../../src/app/other-charges/other-charges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherChargesComponent);
    return OtherChargesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/personal/personal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  padding: 6px;\n  font-size: 30px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n}\n\n.fa:hover {\n    opacity: 0.7;\n}\n\n.fa-facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n  }\n\n.fa-pinterest {\n    background: #cb2027;\n    color: white;\n  }\n\n.fa-instagram {\n    background: #125688;\n    color: white;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container col-md-10 \">\n    <ul class=\"nav justify-content-center nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">Informacion del Suscriptor</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Eleccion del plan de Servicio</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Informacion de la Publicacion</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Eleccion de Metodo de Pago</a>\n        </li>\n      </ul>\n</div>\n<br>\n<div class=\" container col-md-8 \">\n\n<form #personalForm=\"ngForm\" class=\"editForm\" >\n  <div >\n\n      \n      <br/>\n      <div class=\"row \">\n        <div class=\"col\">\n            <label class=\"control-label\" for=\"firstname\">Nombre</label>  \n            <input class=\"form-control input-md\" #firstname=\"ngModel\" required name=\"firstname\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"personal.firstName\">   \n            <div class=\"alert alert-danger\"  *ngIf=\"submitted && firstname.touched\"> Nombre es requerido</div>\n   \n        </div>\n        <div class=\"col\">\n\n            <label class=\"control-label\" for=\"birthday\">Fecha de Nacimiento</label>  \n            <input class=\"form-control input-md\" #birthday=\"ngModel\" required name=\"birthday\" type=\"date\" placeholder=\"Fecha de Nacimiento\" [(ngModel)]=\"personal.birthday\">   \n            <div class=\"alert alert-danger\" *ngIf=\"birthday.invalid  && (birthday.dirty || birthday.touched)\">Fecha de nacimiento es requerida</div>\n\n        </div>\n      </div>\n      <br>\n      <br>\n      <br>\n      <div class=\"row \">\n          <div class=\"col\">\n              <label class=\"control-label\" for=\"email\">Correo Electronico</label>\n              <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" name=\"email\" type=\"text\" placeholder=\"Correo Electronico\" [(ngModel)]=\"personal.email\">\n                  <!--<div class=\"alert alert-danger\" [hidden]=\"email.valid\">Correo electronico es requerido</div>-->\n        \n          </div>\n          <div class=\"col\">\n  \n              <label class=\"control-label\" for=\"password\">Contraseña</label>  \n              <input class=\"form-control input-md\" #password=\"ngModel\" required name=\"password\" type=\"password\" [(ngModel)]=\"personal.password\">   \n                  <!--<div class=\"alert alert-danger\" [hidden]=\"password.valid\">Contraseña es requerida</div>-->\n       \n          </div>\n        </div>\n\n        <div class=\"row \">\n            <div class=\"col\">\n                <label class=\"control-label\" for=\"username\">Nombre de Usuario</label>  \n                <input class=\"form-control input-md\" #username=\"ngModel\" required name=\"username\" type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"personal.username\">   \n\n       </div>\n            <div class=\"col\">\n    \n                <label class=\"control-label\" for=\"password\">Confirmar Contraseña</label>  \n                  <input class=\"form-control input-md\" #password=\"ngModel\" required name=\"password\" type=\"password\" [(ngModel)]=\"personal.password\">   \n                    <!--  <div class=\"alert alert-danger\" [hidden]=\"password.valid\">Confirmar Contraseña</div>-->\n           \n            </div>\n          </div>\n          <br><br><br>\n          <div class=\"row \">\n              <div class=\"col\">\n                  <label class=\"control-label\" for=\"phone\">Contacto 1</label>  \n                  <int-phone-prefix  #phone=\"ngModel\"  name=\"phone\"  placeholder=\"Telefono\" [(ngModel)]=\"personal.phone\"></int-phone-prefix>   \n                  <!--<div class=\"alert alert-danger\" [hidden]=\"phone.valid\">Telefono es requerido</div> -->\n              </div>\n              <div class=\"col\">\n      \n                  <label class=\"control-label\" for=\"phone\">Contacto 2</label> \n                <int-phone-prefix [(ngModel)]=\"personal.phone2\" name=\"phone2\" [locale]=\"'es'\"></int-phone-prefix>\n           \n              </div>\n            </div>\n            <br>\n            <br>\n\n            <div class=\"text-center\">\n              <h5>Extensiones de Redes Sociales</h5></div>\n                    <div class=\"row text-center\">\n                        <div class=\"col\">\n                  <span><a href=\"#\" class=\"fa fa-facebook\"></a></span> <input type=\"text\" class=\" input-md\">\n                   </div> \n                   <div class=\"col\">\n                      <span><a href=\"#\" class=\"fa fa-twitter\"></a></span> <input type=\"text\" class=\" input-md\">\n                       </div>         \n                </div>\n\n                <div class=\"row text-center\">\n                    <div class=\"col\">\n              <span><a href=\"#\" class=\"fa fa-instagram\"></a></span> <input type=\"text\" class=\" input-md\">\n               </div> \n               <div class=\"col\">\n                  <span><a href=\"#\" class=\"fa fa-pinterest\"></a></span> <input type=\"text\" class=\" input-md\">\n                   </div>         \n            </div>\n            <br>\n            <br>\n\n              <div class=\"form-group text-center space-40\">\n                  <button type=\"submit\" class=\"btn btn-outline-rounded btn-info \" (click)=\"goToNext(personalForm)\" >Siguiente</button>\n                </div>\n\n              \n          </div>\n\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Informacion Personal';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
        this.submitted = false;
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid) {
            this.submitted = false;
            return false;
        }
        this.submitted = true;
        this.formDataService.setPersonal(this.personal);
        return true;
    };
    PersonalComponent.prototype.goToPrevious = function () {
        // Navigate to the personal page
        this.router.navigateByUrl('/user-type');
        ;
    };
    PersonalComponent.prototype.goToNext = function (form) {
        //if (this.save(form)) {
        // Navigate to the property page
        this.router.navigateByUrl('/pricing');
        //}
    };
    PersonalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__("../../../../../src/app/personal/personal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/posts-list/posts-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts-list/posts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  posts-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/posts-list/posts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsListComponent = /** @class */ (function () {
    function PostsListComponent() {
    }
    PostsListComponent.prototype.ngOnInit = function () {
    };
    PostsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-posts-list',
            template: __webpack_require__("../../../../../src/app/posts-list/posts-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/posts-list/posts-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsListComponent);
    return PostsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1>\n    Resumen General\n </h1>\n  <p>\n  1. Titulo\n </p>\n <p>\n  Tipo de Inmobiliario: Casa\n </p>\n Direccion: \n\n</div>\n<br>\n\n\n<div class=\"form-group text-center space-40\">\n  <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n      class=\"glyphicon glyphicon-arrow-left\"></span> Atras</button>\n  <button class=\"btn btn-outline-rounded btn-info\" (click)=\"addPost(workForm)\"> Agregar Otro Post <span style=\"margin-left:10px;\"\n      class=\"glyphicon glyphicon-arrow-right\"></span></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(router, formDataService, location) {
        this.router = router;
        this.formDataService = formDataService;
        this.location = location;
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.addPost = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    PreviewComponent.prototype.goToPrevious = function (form) {
        this.location.back();
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__data_formData_service__["a" /* FormDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pricing/pricing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n   .zoom:hover { \n-webkit-transform: scale(1.3); \n        transform: scale(1.3);\n    \n   }\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1 class=\"text-center\">Escoge un Plan</h1>\n  <br>\n  <br>\n  <table class=\"text-center table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th class=\"zoom\" scope=\"col\">SERVICIOS</th>\n          <th class=\"zoom table-info\" scope=\"col\">BASICO</th>\n          <th class=\"zoom table-secondary\" scope=\"col\">ESTANDAR</th>\n          <th class=\"zoom table-info\" scope=\"col\">EMPRESARIAL</th>\n\n          <th class=\"zoom table-secondary\" scope=\"col\">INMOBILIARIA</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"col\">Publicaciones</th>\n          <td>1</td>\n          <td>3</td>\n          <td>7</td>\n          <td>15</td>\n        </tr>\n        <tr>\n          <th scope=\"col\">Categorias</th>\n          <td>1</td>\n          <td>1</td>\n          <td>3</td>\n          <td>4</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Fotos por Publicacion</th>\n          <td >5</td>\n          <td>5</td>\n          <td>8</td>\n          <td>8</td>\n        </tr>\n        <tr>\n            <th scope=\"row\">Videos Por Plan</th>\n            \n             <td>0</td>\n            <td>0</td>\n            <td>1</td>\n            <td>2</td>\n          </tr>\n          <tr>\n              <th scope=\"row\">Ficha de Perfil</th>\n              <td>Si</td>\n              <td>Si</td>\n              <td>No</td>\n              <td>No</td>\n            </tr>\n            <tr>\n                <th scope=\"row\">Sitio dentro de sitio</th>\n                <td>No</td>\n                <td>No</td>\n                <td>Si</td>\n                <td>Si</td>\n              </tr>\n              <tr>\n                <td></td>\n                <td>  <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n                </td>\n                <td>  <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n                </td>\n                <td>  <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n                </td>\n                <td>  <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n                </td>\n              </tr>\n      </tbody>\n    </table>\n  <!--<div class=\"card-deck mb-3 text-center\">\n      <div class=\"card mb-4 shadow-sm\">\n    <div class=\"card-header\">\n      <h3>Servicios</h3>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item \" >Publicaciones</li>\n      <li class=\"list-group-item list-group-item-dark\">Categorias</li>\n      <li class=\"list-group-item\">Fotos por Publicacion</li>\n      <li class=\"list-group-item list-group-item-dark\">Videos Por Plan</li>\n      <li class=\"list-group-item\">Ficha de Perfil</li>\n      <li class=\"list-group-item list-group-item-dark\">Sitio dentro de sitio</li>\n    </ul>\n    </div>\n     <div class=\"card mb-4 shadow-sm bg-danger zoom\">\n    <div class=\"card-header\">\n      <h3>Basico</h3>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">1</li>\n      <li class=\"list-group-item list-group-item-danger\">1</li>\n      <li class=\"list-group-item\">5</li>\n      <li class=\"list-group-item list-group-item-danger\">0</li>\n      <li class=\"list-group-item\">Si</li>\n      <li class=\"list-group-item list-group-item-danger\">No</li>\n    </ul>\n               <h1 class=\"card-title pricing-card-title\">L.150 <small class=\"text-muted\">/ Mes</small></h1>\n       <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n    </div>\n    <div class=\"card mb-4 shadow-sm bg-primary zoom\">\n      <div class=\"card-header\">\n        <h3>Estandar</h3>\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">3</li>\n        <li class=\"list-group-item list-group-item-primary\">1</li>\n        <li class=\"list-group-item\">5</li>\n        <li class=\"list-group-item list-group-item-primary\">0</li>\n        <li class=\"list-group-item\">Si</li>\n        <li class=\"list-group-item list-group-item-primary\">No</li>\n      </ul>\n                 <h1 class=\"card-title pricing-card-title\">L.300 <small class=\"text-muted\">/ Mes</small></h1>\n         <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n      </div>\n      <div class=\"card mb-4 shadow-sm bg-info zoom\">\n        <div class=\"card-header\">\n          <h3>Empresarial </h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">7</li>\n          <li class=\"list-group-item list-group-item-info\">3</li>\n          <li class=\"list-group-item\">8</li>\n          <li class=\"list-group-item list-group-item-info\">1</li>\n          <li class=\"list-group-item\">No</li>\n          <li class=\"list-group-item list-group-item-info\">Si</li>\n        </ul>\n                   <h1 class=\"card-title pricing-card-title\">L.500 <small class=\"text-muted\">/ Mes</small></h1>\n           <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n        </div>\n        <div class=\"card mb-4 shadow-sm bg-warning zoom\">\n          <div class=\"card-header\">\n            <h3>Immobiliaria</h3>\n          </div>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">15</li>\n            <li class=\"list-group-item list-group-item-warning\">4</li>\n            <li class=\"list-group-item\">8</li>\n            <li class=\"list-group-item list-group-item-warning\">2</li>\n            <li class=\"list-group-item\">No</li>\n            <li class=\"list-group-item list-group-item-warning\">Si</li>\n          </ul>\n            <h1 class=\"card-title pricing-card-title\">L.800 <small class=\"text-muted\">/ Mes</small></h1>\n             <button type=\"button\" class=\"btn btn-lg btn-block btn-dark\" (click)=\"goToNext(personalForm)\" >Elejir</button>\n          </div>\n  </div>--->\n</div>"

/***/ }),

/***/ "../../../../../src/app/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricingComponent = /** @class */ (function () {
    function PricingComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent.prototype.goToNext = function (form) {
        // Navigate to the property page
        this.router.navigateByUrl('/property-category');
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__("../../../../../src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/property-category/property-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/property-category/property-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n    <form #addressForm=\"ngForm\" novalidate class=\"form-horizontal\">\n\n        <h2 class=\"head text-center\">Empecemos a registrar tu formulario</h2>\n        <div class=\"form-group\">\n            <label class=\"control-label\" >Elige el tipo de inmobiliario que deseas publicar</label>\n            <select class=\"form-control\" [(ngModel)]=\"address.tipoInmobiliario\" name=\"tipoInmobiliario\">\n                <option *ngFor=\"let c of types\" [value]=\"c\">{{c}} </option>\n            </select>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Que desea hacer con su Inmobiliario</label>\n                    <select class=\"form-control input-md\" [(ngModel)]=\"tipoTransaccion\" name=\"tipoTransaccion\">\n                        <option *ngFor=\"let c of transactionTypes\" [ngValue]=\"c\">{{c.name}}</option>\n                    </select>\n                </div>\n        <div class=\"row\">\n            <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"departamento\">Departamento</label>\n                    <select class=\"form-control\" [(ngModel)]=\"mainCategory\" name=\"mainCategory\">\n                            <option disabled [ngValue]=\"null\">-/-</option>\n                            <option [ngValue]=\"category\" *ngFor=\"let category of mainGroups\">{{category.title}}</option>\n                          </select>\n                </div>\n            </div>\n            <div class='col-xs-12 col-sm-6'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"ciudades\">Ciudad</label>\n                    <select class=\"form-control\" [(ngModel)]=\"selectedSubCategory\" name=\"subCategory\">\n                            <option [ngValue]=\"subcategory\" *ngFor=\"let subcategory of filterSubById(mainCategory.id)\">{{subcategory.title}}</option>\n                          </select></div>\n          \n            </div>\n\n           \n        </div>\n        \n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"lastname\">Barrio o Colonia</label>\n            <input required class=\"form-control input-md\" type=\"select\" placeholder=\"Direccion\">\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"postName\">Titulo de la Publicacion</label>\n            <input required class=\"form-control input-md\" type=\"text\">\n        </div>\n        \n        <label class=\"control-label\" for=\"lastname\">Elige las Fotografias del Inmobiliario:</label>\n        <image-upload></image-upload>\n\n        <div class=\"form-group text-center space-40\">\n            <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(null)\"> <span style=\"margin-right:10px;\"\n                    class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n            <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext()\"> Next <span style=\"margin-left:10px;\"\n                    class=\"glyphicon glyphicon-arrow-right\"></span></button>\n        </div>\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/property-category/property-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyCategoryComponent = /** @class */ (function () {
    function PropertyCategoryComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Informacion de la Publicacion';
        this.types = ["Casa", "Apartamento", "Local Comercial", "Bodega o Almacen", "Edificio", "Terreno", "Finca"];
        this.complexTypes = [
            { id: 1, name: "Complejo de Viviendas" },
            { id: 2, name: "Vivienda Independiente" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
        this.departamentos = [
            { id: 1, name: "Atlántida" },
            { id: 2, name: "Choluteca" },
            { id: 3, name: "Colón" },
            { id: 4, name: "Comayagua" },
            { id: 5, name: "Copán" },
            { id: 6, name: "Cortes" },
            { id: 7, name: "El Paraíso" },
            { id: 8, name: "Francisco Morazán" },
            { id: 9, name: "Gracias a Dios" },
            { id: 10, name: "Intibucá" },
            { id: 11, name: "Islas de la Bahía" },
            { id: 12, name: "La Paz" },
            { id: 13, name: "Lempira" },
            { id: 14, name: "Ocotepeque" },
            { id: 15, name: "Olancho" },
            { id: 16, name: "Santa Bárbara" },
            { id: 17, name: "Valle" },
            { id: 18, name: "Yoro" }
        ];
        this.departamento = { id: 1, name: "Atlántida" };
        this.ciudad = { parentId: 1, name: "La Ceiba" };
        this.ciudades = [
            { parentId: 1, name: "La Ceiba" },
            { parentId: 1, name: "Tela" }, { parentId: 1, name: "Jutiapa" },
            { parentId: 1, name: "La Masica" }, { parentId: 1, name: "San Francisco" },
            { parentId: 1, name: "Arizona" }, { parentId: 1, name: "Esparta" },
            { parentId: 1, name: "El Porvenir" },
            { parentId: 3, name: "Trujillo" }, { parentId: 3, name: "Balfate" }
        ];
        this.mainCategory = { title: 'Atlantida', id: 1 };
        this.subcategory = { title: 'La Ceiba', parentId: 1 };
        this.mainGroups = [
            { id: 1, title: 'Atlantida', },
            { id: 2, title: 'Choluteca', },
            { id: 3, title: "Colón" },
            { id: 4, title: "Comayagua" },
            { id: 5, title: "Copán" },
            { id: 6, title: "Cortes" },
            { id: 7, title: "El Paraíso" },
            { id: 8, title: "Francisco Morazán" },
            { id: 9, title: "Gracias a Dios" },
            { id: 10, title: "Intibucá" },
            { id: 11, title: "Islas de la Bahía" },
            { id: 12, title: "La Paz" },
            { id: 13, title: "Lempira" },
            { id: 14, title: "Ocotepeque" },
            { id: 15, title: "Olancho" },
            { id: 16, title: "Santa Bárbara" },
            { id: 17, title: "Valle" },
            { id: 18, title: "Yoro" }
        ];
        this.subCategories = [{ title: 'La Ceiba', parentId: 1 },
            { title: 'Tela', parentId: 1 },
            { title: 'Jutiapa', parentId: 1 },
            { title: 'La Masica', parentId: 1 },
            { title: 'San Francisco', parentId: 1 },
            { title: 'Arizona', parentId: 1 },
            { title: 'Esparta', parentId: 1 },
            { title: 'El Porvenir', parentId: 1 },
            { title: 'Choluteca', parentId: 2 },
            { title: 'Apacilagua', parentId: 2 },
            { title: 'Concepción de María', parentId: 2 },
            { title: 'Duyure', parentId: 2 },
            { title: 'El Corpus', parentId: 2 },
            { title: 'El Triunfo', parentId: 2 },
            { title: 'Marcovia', parentId: 2 },
            { title: 'Morolica', parentId: 2 },
            { title: 'Namasigue', parentId: 2 },
            { title: 'Orocuina', parentId: 2 },
            { title: 'Pespire', parentId: 2 },
            { title: 'San Antonio de Flores', parentId: 2 },
            { title: 'San Isidro', parentId: 2 },
            { title: 'San José', parentId: 2 },
            { title: 'San Marcos de Colón', parentId: 2 },
            { title: 'Santa Ana de Yusguare', parentId: 2 },
            { title: 'Trujillo', parentId: 3 },
            { title: 'Balfate', parentId: 3 },
            { title: 'Iriona', parentId: 3 },
            { title: 'Limón', parentId: 3 },
            { title: 'Sabá', parentId: 3 },
            { title: 'Santa Fe', parentId: 3 },
            { title: 'Santa Rosa de Aguán', parentId: 3 },
            { title: 'Sonaguera', parentId: 3 },
            { title: 'Tocoa', parentId: 3 },
            { title: 'Bonito Oriental', parentId: 3 },
            { title: 'Comayagua', parentId: 4 },
            { title: 'Ajuterique', parentId: 4 },
            { title: 'El Rosario', parentId: 4 },
            { title: 'Esquías', parentId: 4 },
            { title: 'Humuya', parentId: 4 },
            { title: 'La libertad', parentId: 4 },
            { title: 'Lamaní', parentId: 4 },
            { title: 'La Trinidad', parentId: 4 },
            { title: 'Lejamani', parentId: 4 },
            { title: 'Meambar', parentId: 4 },
            { title: 'Minas de Oro', parentId: 4 },
            { title: 'Ojos de Agua', parentId: 4 },
            { title: 'San Jerónimo (Honduras)', parentId: 4 },
            { title: 'San José de Comayagua', parentId: 4 },
            { title: 'San José del Potrero', parentId: 4 },
            { title: 'San Luis', parentId: 4 },
            { title: 'San Sebastián', parentId: 4 },
            { title: 'Siguatepeque', parentId: 4 },
            { title: 'Villa de San Antonio', parentId: 4 },
            { title: 'Las Lajas', parentId: 4 },
            { title: 'Taulabé', parentId: 4 },
            { title: 'Santa Rosa de Copán', parentId: 5 },
            { title: 'Cabañas', parentId: 5 },
            { title: 'Concepción', parentId: 5 },
            { title: 'Copán Ruinas', parentId: 5 },
            { title: 'Corquín', parentId: 5 },
            { title: 'Cucuyagua', parentId: 5 },
            { title: 'Dolores', parentId: 5 },
            { title: 'Dulce Nombre', parentId: 5 },
            { title: 'El Paraíso', parentId: 5 },
            { title: 'Florida', parentId: 5 },
            { title: 'La Jigua', parentId: 5 },
            { title: 'La Unión', parentId: 5 },
            { title: 'Nueva Arcadia', parentId: 5 },
            { title: 'San Agustín', parentId: 5 },
            { title: 'San Antonio', parentId: 5 },
            { title: 'San Jerónimo', parentId: 5 },
            { title: 'San José', parentId: 5 },
            { title: 'San Juan de Opoa', parentId: 5 },
            { title: 'San Nicolás', parentId: 5 },
            { title: 'San Pedro', parentId: 5 },
            { title: 'Santa Rita', parentId: 5 },
            { title: 'Trinidad de Copán', parentId: 5 },
            { title: 'Veracruz', parentId: 5 },
            { title: 'San Pedro Sula', parentId: 6 },
            { title: 'Choloma', parentId: 6 },
            { title: 'Omoa', parentId: 6 },
            { title: 'Pimienta', parentId: 6 },
            { title: 'Potrerillos', parentId: 6 },
            { title: 'Puerto Cortés', parentId: 6 },
            { title: 'San Antonio de Cortés', parentId: 6 },
            { title: 'San Francisco de Yojoa', parentId: 6 },
            { title: 'San Manuel', parentId: 6 },
            { title: 'Santa Cruz de Yojoa', parentId: 6 },
            { title: 'Villanueva', parentId: 6 },
            { title: 'La Lima', parentId: 6 },
            { title: 'Yuscarán', parentId: 7 },
            { title: 'Alauca', parentId: 7 },
            { title: 'Danlí', parentId: 7 },
            { title: 'El Paraíso', parentId: 7 },
            { title: 'Güinope', parentId: 7 },
            { title: 'Jacaleapa', parentId: 7 },
            { title: 'Liure', parentId: 7 },
            { title: 'Morocelí', parentId: 7 },
            { title: 'Morocelí', parentId: 7 },
            { title: 'Potrerillos', parentId: 7 },
            { title: 'San Antonio de Flores', parentId: 7 },
            { title: 'San Lucas', parentId: 7 },
            { title: 'San Matías', parentId: 7 },
            { title: 'Soledad', parentId: 7 },
            { title: 'Teupasenti', parentId: 7 },
            { title: 'Texiguat', parentId: 7 },
            { title: 'Vado Ancho', parentId: 7 },
            { title: 'Yauyupe', parentId: 7 },
            { title: 'Trojes', parentId: 7 },
            { title: 'Distrito Central', parentId: 8 },
            { title: 'Alubarén', parentId: 8 },
            { title: 'Cedros', parentId: 8 },
            { title: 'Curarén', parentId: 8 },
            { title: 'El Porvenir', parentId: 8 },
            { title: 'Guaimaca', parentId: 8 },
            { title: 'La Libertad', parentId: 8 },
            { title: 'La Venta', parentId: 8 },
            { title: 'Lepaterique', parentId: 8 },
            { title: 'Maraita', parentId: 8 },
            { title: 'Marale', parentId: 8 },
            { title: 'Nueva Armenia', parentId: 8 },
            { title: 'Ojojona', parentId: 8 },
            { title: 'Orica', parentId: 8 },
            { title: 'Reitoca', parentId: 8 },
            { title: 'Sabanagrande', parentId: 8 },
            { title: 'San Antonio de Oriente', parentId: 8 },
            { title: 'San Buenaventura', parentId: 8 },
            { title: 'San Ignacio', parentId: 8 },
            { title: 'San Juan de Flores', parentId: 8 },
            { title: 'San Miguelito', parentId: 8 },
            { title: 'Santa Ana', parentId: 8 },
            { title: 'Santa Lucía', parentId: 8 },
            { title: 'Talanga', parentId: 8 },
            { title: 'Tatumbla', parentId: 8 },
            { title: 'Valle de Ángeles', parentId: 8 },
            { title: 'Villa de San Francisco', parentId: 8 },
            { title: 'Vallecillo', parentId: 8 },
            { title: 'Puerto Lempira', parentId: 9 },
            { title: 'Brus Laguna', parentId: 9 },
            { title: 'Ahuas', parentId: 9 },
            { title: 'Juan Francisco Bulnes', parentId: 9 },
            { title: 'Ramón Villeda Morales', parentId: 9 },
            { title: 'Wampusirpe', parentId: 9 },
            { title: 'La Esperanza', parentId: 10 },
            { title: 'Camasca', parentId: 10 },
            { title: 'Colomoncagua', parentId: 10 },
            { title: 'Concepción', parentId: 10 },
            { title: 'Dolores', parentId: 10 },
            { title: 'Intibucá', parentId: 10 },
            { title: 'Jesús de Otoro', parentId: 10 },
            { title: 'Magdalena', parentId: 10 },
            { title: 'Masaguara', parentId: 10 },
            { title: 'San Antonio', parentId: 10 },
            { title: 'San Isidro', parentId: 10 },
            { title: 'San Juan', parentId: 10 },
            { title: 'San Marcos de la Sierra', parentId: 10 },
            { title: 'San Miguel Guancapla', parentId: 10 },
            { title: 'Santa Lucía', parentId: 10 },
            { title: 'Yamaranguila', parentId: 10 },
            { title: 'San Francisco de Opalaca', parentId: 10 },
            { title: 'Roatán', parentId: 11 },
            { title: 'Guanaja', parentId: 11 },
            { title: 'José Santos Guardiola', parentId: 11 },
            { title: 'Utila', parentId: 11 },
            { title: 'La Paz', parentId: 12 },
            { title: 'Aguanqueterique', parentId: 12 },
            { title: 'Cabañas', parentId: 12 },
            { title: 'Cane', parentId: 12 },
            { title: 'Chinacla', parentId: 12 },
            { title: 'Guajiquiro', parentId: 12 },
            { title: 'Lauterique', parentId: 12 },
            { title: 'Marcala', parentId: 12 },
            { title: 'Mercedes de Oriente', parentId: 12 },
            { title: 'Opatoro', parentId: 12 },
            { title: 'San Antonio del Norte', parentId: 12 },
            { title: 'San José', parentId: 12 },
            { title: 'San Juan', parentId: 12 },
            { title: 'San Pedro de Tutule', parentId: 12 },
            { title: 'Santa Ana', parentId: 12 },
            { title: 'Santa Elena', parentId: 12 },
            { title: 'Santa María', parentId: 12 },
            { title: 'Santiago de Puringla', parentId: 12 },
            { title: 'Yarula', parentId: 12 },
            { title: 'Gracias', parentId: 13 },
            { title: 'Belén', parentId: 13 },
            { title: 'Candelaria', parentId: 13 },
            { title: 'Cololaca', parentId: 13 },
            { title: 'Erandique', parentId: 13 },
            { title: 'Gualcince', parentId: 13 },
            { title: 'Guarita', parentId: 13 },
            { title: 'La Campa', parentId: 13 },
            { title: 'La Iguala', parentId: 13 },
            { title: 'Las Flores', parentId: 13 },
            { title: 'La Unión', parentId: 13 },
            { title: 'La Virtud', parentId: 13 },
            { title: 'Lepaera', parentId: 13 },
            { title: 'Mapulaca', parentId: 13 },
            { title: 'Piraera', parentId: 13 },
            { title: 'San Andrés', parentId: 13 },
            { title: 'San Francisco', parentId: 13 },
            { title: 'San Juan Guarita', parentId: 13 },
            { title: 'San Manuel Colohete', parentId: 13 },
            { title: 'San Rafael', parentId: 13 },
            { title: 'San Sebastián', parentId: 13 },
            { title: 'Santa Cruz', parentId: 13 },
            { title: 'Talgua', parentId: 13 },
            { title: 'Tambla', parentId: 13 },
            { title: 'Tomalá', parentId: 13 },
            { title: 'Valladolid', parentId: 13 },
            { title: 'Virginia', parentId: 13 },
            { title: 'San Marcos de Caiquín', parentId: 13 },
            { title: 'Ocotepeque', parentId: 14 },
            { title: 'Belén Gualcho', parentId: 14 },
            { title: 'Concepción', parentId: 14 },
            { title: 'Dolores Merendón', parentId: 14 },
            { title: 'Fraternidad', parentId: 14 },
            { title: 'La Encarnación', parentId: 14 },
            { title: 'La Labor', parentId: 14 },
            { title: 'Lucerna', parentId: 14 },
            { title: 'Mercedes', parentId: 14 },
            { title: 'San Fernando', parentId: 14 },
            { title: 'San Francisco del Valle', parentId: 14 },
            { title: 'San Jorge', parentId: 14 },
            { title: 'San Marcos', parentId: 14 },
            { title: 'Santa Fe', parentId: 14 },
            { title: 'Sensenti', parentId: 14 },
            { title: 'Sinuapa', parentId: 14 },
            { title: 'Juticalpa', parentId: 15 },
            { title: 'Campamento', parentId: 15 },
            { title: 'Catacamas', parentId: 15 },
            { title: 'Concordia', parentId: 15 },
            { title: 'Dulce Nombre de Culmí', parentId: 15 },
            { title: 'El Rosario', parentId: 15 },
            { title: 'Esquipulas del Norte', parentId: 15 },
            { title: 'Gualaco', parentId: 15 },
            { title: 'Guarizama', parentId: 15 },
            { title: 'Guata', parentId: 15 },
            { title: 'Guayape', parentId: 15 },
            { title: 'Jano', parentId: 15 },
            { title: 'La Unión', parentId: 15 },
            { title: 'Mangulile', parentId: 15 },
            { title: 'Manto', parentId: 15 },
            { title: 'Salamá', parentId: 15 },
            { title: 'San Esteban', parentId: 15 },
            { title: 'San Francisco de Becerra', parentId: 15 },
            { title: 'San Francisco de la Paz', parentId: 15 },
            { title: 'Santa María del Real', parentId: 15 },
            { title: 'Silca', parentId: 15 },
            { title: 'Yocón', parentId: 15 },
            { title: 'Patuca', parentId: 15 },
            { title: 'Santa Bárbara', parentId: 16 },
            { title: 'Arada', parentId: 16 },
            { title: 'Atima', parentId: 16 },
            { title: 'Azacualpa', parentId: 16 },
            { title: 'Ceguaca', parentId: 16 },
            { title: 'Concepción del Norte', parentId: 16 },
            { title: 'Concepción del Sur', parentId: 16 },
            { title: 'Chinda', parentId: 16 },
            { title: 'El Níspero', parentId: 16 },
            { title: 'Gualala', parentId: 16 },
            { title: 'Ilama', parentId: 16 },
            { title: 'Las Vegas', parentId: 16 },
            { title: 'Macuelizo', parentId: 16 },
            { title: 'Naranjito', parentId: 16 },
            { title: 'Nuevo Celilac', parentId: 16 },
            { title: 'Nueva Frontera', parentId: 16 },
            { title: 'Petoa', parentId: 16 },
            { title: 'Protección', parentId: 16 },
            { title: 'Quimistán', parentId: 16 },
            { title: 'San Francisco de Ojuera', parentId: 16 },
            { title: 'San José de las Colinas', parentId: 16 },
            { title: 'San Luis', parentId: 16 },
            { title: 'San Marcos', parentId: 16 },
            { title: 'San Nicolás', parentId: 16 },
            { title: 'San Pedro Zacapa', parentId: 16 },
            { title: 'San Vicente Centenario', parentId: 16 },
            { title: 'Santa Rita', parentId: 16 },
            { title: 'Trinidad', parentId: 16 },
            { title: 'Nacaome', parentId: 17 },
            { title: 'Alianza', parentId: 17 },
            { title: 'Amapala', parentId: 17 },
            { title: 'Aramecina', parentId: 17 },
            { title: 'Caridad', parentId: 17 },
            { title: 'Goascorán', parentId: 17 },
            { title: 'Langue', parentId: 17 },
            { title: 'San Francisco de Coray', parentId: 17 },
            { title: 'San Lorenzo', parentId: 17 },
            { title: 'Yoro', parentId: 18 },
            { title: 'Arenal', parentId: 18 },
            { title: 'El Negrito', parentId: 18 },
            { title: 'El Progreso', parentId: 18 },
            { title: 'Jocón', parentId: 18 },
            { title: 'Morazán', parentId: 18 },
            { title: 'Olanchito', parentId: 18 },
            { title: 'Santa Rita', parentId: 18 },
            { title: 'Sulaco', parentId: 18 },
            { title: 'Victoria', parentId: 18 },
            { title: 'Yorito', parentId: 18 }
        ];
    }
    PropertyCategoryComponent.prototype.ngOnInit = function () {
        this.address = this.formDataService.getAddress();
        console.log('Work feature loaded!');
    };
    PropertyCategoryComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setAddress(this.address);
        return true;
    };
    PropertyCategoryComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/personal');
        ;
    };
    PropertyCategoryComponent.prototype.getCiudades = function (selectedDepartamentoId) {
        // return the branches of the selected ciudad
        return this.ciudades.filter(function (item) { return item.parentId === selectedDepartamentoId; });
    };
    ;
    PropertyCategoryComponent.prototype.filterSubById = function (id) {
        return this.subCategories.filter(function (item) { return item.parentId === id; });
    };
    PropertyCategoryComponent.prototype.goToNext = function () {
        //if (this.save(form)) {
        // Navigate to the address page
        console.log(this.address.tipoInmobiliario);
        if (this.address.tipoInmobiliario === 'Apartamento')
            this.router.navigate(['/apartment']);
        if (this.address.tipoInmobiliario === 'Casa')
            this.router.navigate(['/house']);
        if (this.address.tipoInmobiliario === 'Edificio')
            this.router.navigate(['/building']);
        if (this.address.tipoInmobiliario === 'Local Comercial')
            this.router.navigate(['/shop']);
        if (this.address.tipoInmobiliario === 'Bodega o Almacen')
            this.router.navigate(['/warehouse']);
        if (this.address.tipoInmobiliario === 'Finca')
            this.router.navigate(['/estate']);
        if (this.address.tipoInmobiliario === 'Terreno')
            this.router.navigate(['/land']);
        //}
    };
    PropertyCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property-category',
            template: __webpack_require__("../../../../../src/app/property-category/property-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/property-category/property-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], PropertyCategoryComponent);
    return PropertyCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div class=\"form-horizontal\">\n      <div >\n          <br/>\n          <h2 class=\"head text-center\">Informacion de la publicacion</h2>\n          <br/>\n          <div class='row'>\n              <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                  <div class=\"form-group\">\n                      <label class=\"control-label\" for=\"email\">Tipo de Inmobilario</label>\n                      <select class=\"form-control\" [(ngModel)]=\"selectedValue\" name=\"tipoInmobiliario\">\n                          <option *ngFor=\"let c of types\" [value]=\"c\" >{{c}} </option>\n                      </select>\n                  </div>\n                <div class=\"row\">\n                      <div class='col-xs-12 col-sm-6'>\n                          <div class=\"form-group\">\n                              <label class=\"control-label\" for=\"firstname\">Departamento</label>  \n                              <input class=\"form-control input-md\" type=\"select\" placeholder=\"Departamento\">   \n                              \n                          </div>\n                      </div>\n                      <div class='col-xs-12 col-sm-6'>\n                          <div class=\"form-group\">\n                              <label class=\"control-label\" for=\"lastname\">Ciudad</label>  \n                              <input class=\"form-control input-md\"  type=\"select\" placeholder=\"Ciudad\">\n                              \n                          </div>\n                      </div>\n                </div>  \n                <image-upload></image-upload>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Tipo de Transaccion</label>\n                    <select class=\"form-control input-md\" [(ngModel)]=\"tipoTransaccion\">\n                        <option *ngFor=\"let c of transactionTypes\" [ngValue]=\"c\">{{c.name}}</option>\n                    </select>\n                </div>\n\n\n          <h3 class=\"head text-center\">Especificaciones del Mobiliario</h3>\n          <div class=\"form-group\">\n              <label class=\"control-label\" for=\"email\">Tipo del Complejo</label>\n              <select class=\"form-control input-md\" [(ngModel)]=\"especificaciones\">\n                  <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n                </select>\n          </div>\n          <h3 class=\"head text-center\">Caracteristicas del Mobiliario</h3>\n            <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"firstname\">Numero de Habitaciones</label>  \n                        <input class=\"form-control input-md\" type=\"number\" placeholder=\"Habitaciones\">   \n                        \n                    </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"lastname\">Numero de Baños</label>  \n                        <input class=\"form-control input-md\"  type=\"number\" placeholder=\"Baños\">\n                        \n                    </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"lastname\">Parqueos disponibles</label>  \n                        <input class=\"form-control input-md\"  type=\"number\" placeholder=\"Parqueos\">\n                        \n                    </div>\n                </div>\n            </div> \n            <h3 class=\"head text-center\">Areas que posee el Complejo</h3>\n         \n            <div class=\"form-group\">\n                <div class=\"radio-inline\">\n                    <label>\n                        <input type=\"checkbox\"  name=\"livingRoom\"  value=\"Design\">\n                        Sala\n                    </label>\n                  </div>\n                <div class=\"radio-inline\">\n                    <label>\n                        <input type=\"checkbox\"  name=\"dinningRoom\"  value=\"Code\">\n                        Comedor\n                    </label>\n                </div>\n                <div class=\"radio-inline\">\n                    <label>\n                        <input type=\"checkbox\"  name=\"kitchen\" value=\"Deploy\">\n                        Cocina\n                    </label>\n                  </div>\n                  <div class=\"radio-inline\">\n                      <label>\n                          <input type=\"checkbox\"  name=\"laundryRoom\" value=\"Code\">\n                          Lavanderia\n                      </label>\n                  </div>\n                  <div class=\"radio-inline\">\n                      <label>\n                          <input type=\"checkbox\"  name=\"studyRoom\"  value=\"Code\">\n                          Estudio\n                      </label>\n                  </div>\n            </div>\n\n            <h3 class=\"head text-center\">Amenidades que posee el Complejo</h3>\n         \n            <div class=\"form-group\">\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"checkbox\" #work=\"ngModel\"  name=\"security\" [(ngModel)]=\"workType\" value=\"Design\">\n                        Seguridad\n                    </label>\n                  </div>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"checkbox\" #work=\"ngModel\" required name=\"waterTank\" [(ngModel)]=\"waterTank\" value=\"Code\">\n                        Tanque de Agua/Pozo\n                    </label>\n                  </div>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"checkbox\" #work=\"ngModel\" required name=\"furniture\" [(ngModel)]=\"furniture\" value=\"Deploy\">\n                        Amueblado\n                    </label>\n                  </div>\n            </div>\n\n            <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Varas Cuadradas de Terreno</label>  \n                        <input class=\"form-control input-md\" type=\"text\" placeholder=\"Varas Cuadradas de Terreno\" >   \n                     </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" >Varas Cuadradas de Construccion</label>  \n                        <input class=\"form-control input-md\" type=\"text\" placeholder=\"Varas Cuadradas de Construccion\">\n                      </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"form-group\">\n                <div class='col-xs-12 col-sm-6'>\n                        <label class=\"control-label\" >Informacion Adicional</label>  \n                        <textarea class=\"form-control\"  rows=\"3\"></textarea>\n                </div>\n            </div>\n            </div>\n            <h3 class=\"head text-center\">Precio</h3>\n            <div class=\"row\">\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Precio</label>  \n                        <input class=\"form-control input-md\" type=\"number\" placeholder=\"Precio\" >   \n                     </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" >Frecuencia</label>  \n                        <input class=\"form-control input-md\" type=\"text\" placeholder=\"Frecuencia\">\n                      </div>\n                </div>\n            </div>\n            <h3 class=\"head text-center\">Otros Cargos</h3>\n            <app-other-charges class=\"todos\"></app-other-charges>\n          </div>\n          </div>\n          <div class=\"form-group text-center space-40\">\n              <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n              <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!workForm.valid\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n          </div>\n      </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Informacion de la Publicacion';
        this.types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
        this.complexTypes = [
            { id: 1, name: "Complejo de Viviendas" },
            { id: 2, name: "Vivienda Independiente" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    PropertyComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    PropertyComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    PropertyComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigateByUrl('/register/(route1:personal)');
            ;
        }
    };
    PropertyComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    PropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property',
            template: __webpack_require__("../../../../../src/app/property/property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/property/property.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/real-state-info/real-state-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/real-state-info/real-state-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui form segment\">   \n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label for=\"GivenName\">Tipo de Inmobilario</label>\n      <input id=\"GivenName\"  type=\"select\" />\n    </div>\n\n    <div class=\"field\">\n      <label for=\"State\">Departamento</label>\n      <input id=\"State\"  type=\"text\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"City\">Ciudad</label>\n      <input id=\"City\"  type=\"text\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"Surname\">Nombre de la publicacion</label>\n      <input id=\"Surname\"  type=\"text\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"Photos\">Fotografias</label>\n      <input id=\"Photos\"  type=\"text\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"Surname\">Tipo de Transaccion</label>\n      <input id=\"Surname\"  type=\"select\">\n    </div>\n\n    <h2>Especificaciones del Inmobilario</h2>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/real-state-info/real-state-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealStateInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RealStateInfoComponent = /** @class */ (function () {
    function RealStateInfoComponent() {
    }
    RealStateInfoComponent.prototype.ngOnInit = function () {
    };
    RealStateInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-real-state-info',
            template: __webpack_require__("../../../../../src/app/real-state-info/real-state-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/real-state-info/real-state-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RealStateInfoComponent);
    return RealStateInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n padding-top: 30%;\n \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- Navigation Area (Circular Tabs) -->\n\n  <!-- End Navigation Area (Circular Tabs) -->\n\n  <app-personal></app-personal>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Multi-Step Wizard';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "formData", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal_component__ = __webpack_require__("../../../../../src/app/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_property_component__ = __webpack_require__("../../../../../src/app/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__values_values_component__ = __webpack_require__("../../../../../src/app/values/values.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mission_mission_component__ = __webpack_require__("../../../../../src/app/mission/mission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__property_category_property_category_component__ = __webpack_require__("../../../../../src/app/property-category/property-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__house_form_house_form_component__ = __webpack_require__("../../../../../src/app/house-form/house-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__estate_form_estate_form_component__ = __webpack_require__("../../../../../src/app/estate-form/estate-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__land_form_land_form_component__ = __webpack_require__("../../../../../src/app/land-form/land-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__warehouse_form_warehouse_form_component__ = __webpack_require__("../../../../../src/app/warehouse-form/warehouse-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__building_form_building_form_component__ = __webpack_require__("../../../../../src/app/building-form/building-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shop_form_shop_form_component__ = __webpack_require__("../../../../../src/app/shop-form/shop-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_type_user_type_component__ = __webpack_require__("../../../../../src/app/user-type/user-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__apartment_form_apartment_form_component__ = __webpack_require__("../../../../../src/app/apartment-form/apartment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__business_form_business_form_component__ = __webpack_require__("../../../../../src/app/business-form/business-form.component.ts");





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'user-type', component: __WEBPACK_IMPORTED_MODULE_18__user_type_user_type_component__["a" /* UserTypeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'personal', component: __WEBPACK_IMPORTED_MODULE_3__personal_personal_component__["a" /* PersonalComponent */] },
    { path: 'property', component: __WEBPACK_IMPORTED_MODULE_4__property_property_component__["a" /* PropertyComponent */] },
    { path: 'property-category', component: __WEBPACK_IMPORTED_MODULE_9__property_category_property_category_component__["a" /* PropertyCategoryComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: 'mission', component: __WEBPACK_IMPORTED_MODULE_7__mission_mission_component__["a" /* MissionComponent */] },
    { path: 'values', component: __WEBPACK_IMPORTED_MODULE_6__values_values_component__["a" /* ValuesComponent */] },
    { path: 'house', component: __WEBPACK_IMPORTED_MODULE_10__house_form_house_form_component__["a" /* HouseFormComponent */] },
    { path: 'estate', component: __WEBPACK_IMPORTED_MODULE_11__estate_form_estate_form_component__["a" /* EstateFormComponent */] },
    { path: 'land', component: __WEBPACK_IMPORTED_MODULE_12__land_form_land_form_component__["a" /* LandFormComponent */] },
    { path: 'warehouse', component: __WEBPACK_IMPORTED_MODULE_13__warehouse_form_warehouse_form_component__["a" /* WarehouseFormComponent */] },
    { path: 'building', component: __WEBPACK_IMPORTED_MODULE_14__building_form_building_form_component__["a" /* BuildingFormComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_15__shop_form_shop_form_component__["a" /* ShopFormComponent */] },
    { path: 'apartment', component: __WEBPACK_IMPORTED_MODULE_19__apartment_form_apartment_form_component__["a" /* ApartmentFormComponent */] },
    { path: 'business', component: __WEBPACK_IMPORTED_MODULE_20__business_form_business_form_component__["a" /* BusinessFormComponent */] },
    { path: 'preview', component: __WEBPACK_IMPORTED_MODULE_16__preview_preview_component__["a" /* PreviewComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_component__["a" /* PricingComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true });


/***/ }),

/***/ "../../../../../src/app/shop-form/shop-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop-form/shop-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n  <form class=\"form-horizontal\">\n\n    <h3 class=\"head text-center\">Especificaciones del Local Comercial</h3>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"email\">Elija el tipo de acomodacion </label>\n      <select class=\"form-control input-md\" [(ngModel)]=\"complexType\" name=\"tipoComplejo\">\n        <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n      </select>\n    </div>\n    <h3 class=\"head text-center\">Elije las Caracteristicas que posee</h3>\n\n    <div>\n      <label class=\"control-label\">Tamaño  en Metros Cuadrados</label>\n      <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Local Comercial\">\n    </div>\n\n    <h3 class=\"head text-center\">Elije las Amenidades que posee</h3>\n\n    <div class=\"form-group\">\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"security\"> Seguridad\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"waterTank\"> Tanque de Agua\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"pozo\"> Pozo\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"furniture\"> Amueblado\n        </label>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\">\n      <div class='col-md-12'>\n        <label class=\"control-label\">Informacion Adicional</label>\n        <textarea class=\"form-control\" rows=\"3\"></textarea>\n      </div>\n    </div>\n    <h3 class=\"head text-center\">Precio y otros cargos</h3>\n    <div class=\"row\">\n      <div class='col-xs-12 col-sm-6'>\n        <form class=\"form-inline\">\n          <div class=\"form-group mb-2\">\n            Monto\n          </div>\n        <div class=\"form-group mx-sm-2 mb-2\">\n          <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n        </div>\n      </form>\n      </div>\n    </div>\n    <h3 class=\"head text-center\">Otros Cargos</h3>\n    <app-other-charges class=\"todos\"></app-other-charges>\n\n    <div class=\"form-group text-center space-40\">\n      <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n          class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n      <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n          class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop-form/shop-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopFormComponent = /** @class */ (function () {
    function ShopFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
        this.complexTypes = [
            { id: 1, name: "Plaza Comercial/Centro Comercial" },
            { id: 2, name: "Independiente" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    ShopFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    ShopFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    ShopFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    ShopFormComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    ShopFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shop-form',
            template: __webpack_require__("../../../../../src/app/shop-form/shop-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop-form/shop-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], ShopFormComponent);
    return ShopFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-type/user-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-type/user-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container col-md-5 \">\n\n  <form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\" container col-md-5 \">\n\n<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div >\n        \n<h2>Tipo de Cuenta</h2>\n      <br/>\n<div class=\"radio\">\n  <label><input [(ngModel)]=\"tipo\" type=\"radio\" name=\"tipoPersonal\"  value=\"personal\" checked>Personal</label>\n</div>\n<div class=\"radio\">\n  <label><input [(ngModel)]=\"tipo\" type=\"radio\" name=\"tipoPersonal\" value=\"business\">Empresarial</label>\n</div>\n\n<div class=\"form-group text-center\">\n  <button class=\"btn btn-success btn-outline-rounded btn-info\" (click)=\"goToNext()\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n</div>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-type/user-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserTypeComponent = /** @class */ (function () {
    function UserTypeComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
    }
    UserTypeComponent.prototype.ngOnInit = function () {
    };
    UserTypeComponent.prototype.goToNext = function () {
        // Navigate to the property page
        if (this.tipo === "personal") {
            this.router.navigateByUrl('/personal');
        }
        else if (this.tipo === "business") {
            this.router.navigateByUrl('/business');
        }
    };
    UserTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-type',
            template: __webpack_require__("../../../../../src/app/user-type/user-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-type/user-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], UserTypeComponent);
    return UserTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/values/values.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/values/values.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n<h1>Valores</h1>\n<p>\n  Compromiso: Enfoque en nuestros diferentes segmentos de clientes por generar los resultados esperados tras el\n  uso de nuestro producto.\n</p>\n<p>\n  Innovación: Una búsqueda constante por mejorar nuestro producto en pro de las necesidades, exigencias,\n  intereses, conductas de uso y aplicación de nuestros diferentes segmentos de clientes.\n</p>  \n<p>\n  Trabajo en equipo: Comprendemos que nuestra empresa es una maquinaria de trabajo conjunto conformada por\n  una serie de piezas independientes pero complementarias que trabajando en armonía y orientadas a un objetivo\n  generan un producto de grandes dimensiones.\n</p>   \n<p>\n  Equidad: Todos nuestros clientes son importantes, no los subestimamos o marginamos por su generación de\n  ingresos a nuestra empresa.\n</p>   \n<p>\n  Respeto a la diversidad de opinión: Las opiniones, aportes y sugerencias tienen igualdad de importancia. Todos los\n  aportes independientemente de quien procedan pueden acarrear grandes iniciativas y mejoras a nuestra empresa,\n  una gran idea puede proceder de cualquier parte.\n</p>\n</main>"

/***/ }),

/***/ "../../../../../src/app/values/values.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValuesComponent = /** @class */ (function () {
    function ValuesComponent() {
    }
    ValuesComponent.prototype.ngOnInit = function () {
    };
    ValuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-values',
            template: __webpack_require__("../../../../../src/app/values/values.component.html"),
            styles: [__webpack_require__("../../../../../src/app/values/values.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValuesComponent);
    return ValuesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/warehouse-form/warehouse-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/warehouse-form/warehouse-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5 \">\n  <form class=\"form-horizontal\">\n\n    <h3 class=\"head text-center\">Especificaciones de la Almacen</h3>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"email\">Elija el tipo de acomodacion </label>\n      <select class=\"form-control input-md\" [(ngModel)]=\"complexType\" name=\"tipoComplejo\">\n        <option *ngFor=\"let c of complexTypes\" [ngValue]=\"c\">{{c.name}}</option>\n      </select>\n    </div>\n\n    <h3 class=\"head text-center\">Elije las Caracteristicas que posee la Almacen</h3>\n    <div class=\"row\">\n      <div class='col-xs-12 col-sm-6'>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"firstname\">Numero de Oficinas(Si Aplica)</label>\n          <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Oficinas\">\n\n        </div>\n      </div>\n      \n      <div class='col-xs-12 col-sm-6'>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"lastname\">Numero de Baños(Si Aplica)</label>\n          <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Baños\">\n\n        </div>\n      </div>\n      <div class='col-xs-12 col-sm-6'>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"lastname\">Numero de Salas(Si Aplica)</label>\n          <input class=\"form-control input-md\" type=\"number\" min=\"0\" placeholder=\"Salas\">\n\n        </div>\n      </div>\n    </div>\n    <div>\n      <label class=\"control-label\">Tamaño en Metros Cuadrados</label>\n      <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Local Comercial\">\n    </div>\n    <br>\n    <br>\n    <h5 >Elije las Areas que posee la Almacen</h5>\n\n    <div class=\"form-group\">\n\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"waterTank\"> Areas Comunes\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"furniture\"> Parqueo\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"oficinas\"> Oficinas Administrativas\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"esparcimiento\"> Zona de esparcimiento\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"cafeteria\"> Cafeteria\n        </label>\n      </div>\n    </div>\n    <h3 class=\"head text-center\">Amenidades que posee </h3>\n\n    <div class=\"form-group\">\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"security\"> Seguridad\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"waterTank\"> Tanque de Agua\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"waterTank\"> Pozo\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"checkbox\" name=\"furniture\"> Amueblado\n        </label>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\">\n      <div class='col-md-12'>\n        <label class=\"control-label\">Informacion Adicional</label>\n        <textarea class=\"form-control\" rows=\"3\"></textarea>\n      </div>\n    </div>\n    <h3 class=\"head text-center\">Precio y otros cargos</h3>\n    <div class=\"row\">\n      <div class='col-xs-12 col-sm-6'>\n        <form class=\"form-inline\">\n          <div class=\"form-group mb-2\">\n            Monto\n          </div>\n        <div class=\"form-group mx-sm-2 mb-2\">\n          <input class=\"form-control input-md\" type=\"text\" mask=\"separator.2\" thousandSeparator=\",\" placeholder=\"Precio\">\n        </div>\n      </form>\n      </div>\n    </div>\n    <app-other-charges class=\"todos\"></app-other-charges>\n\n    <div class=\"form-group text-center space-40\">\n      <button class=\"btn btn-outline-rounded btn-secondary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\"\n          class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n      <button class=\"btn btn-outline-rounded btn-info\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\"\n          class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/warehouse-form/warehouse-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WarehouseFormComponent = /** @class */ (function () {
    function WarehouseFormComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
        this.complexTypes = [
            { id: 1, name: "Complejo de bodegas o almacenes" },
            { id: 2, name: "Independiente" }
        ];
        this.transactionTypes = [
            { id: 1, name: "Alquilar" },
            { id: 2, name: "Vender" }
        ];
    }
    WarehouseFormComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    WarehouseFormComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    WarehouseFormComponent.prototype.goToPrevious = function (form) {
        this.router.navigateByUrl('/property-category');
        ;
    };
    WarehouseFormComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    WarehouseFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warehouse-form',
            template: __webpack_require__("../../../../../src/app/warehouse-form/warehouse-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/warehouse-form/warehouse-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], WarehouseFormComponent);
    return WarehouseFormComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map