"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var welcome_component_1 = require("./home/welcome.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var product_add_component_1 = require("./products/product-add.component");
var product_service_1 = require("./products/product.service");
require("rxjs/Rx");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, forms_1.FormsModule, http_1.HttpModule, forms_2.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductComponent, product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent, product_detail_component_1.ProductDetailComponent, welcome_component_1.WelcomeComponent, product_add_component_1.ProductAddCompoment],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_service_1.ProductService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map