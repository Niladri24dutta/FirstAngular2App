"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var product_list_component_1 = require("./products/product-list.component");
var welcome_component_1 = require("./home/welcome.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_add_component_1 = require("./products/product-add.component");
var routes = [
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'products',
        component: product_list_component_1.ProductComponent
    },
    {
        path: 'products/:id',
        component: product_detail_component_1.ProductDetailComponent
    },
    {
        path: 'addproduct',
        component: product_add_component_1.ProductAddCompoment
    },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map