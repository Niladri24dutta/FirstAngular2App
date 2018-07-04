"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ProductAddCompoment = (function () {
    function ProductAddCompoment() {
        this.pageTitle = "Add a new Product";
    }
    ProductAddCompoment.prototype.ngOnInit = function () {
        this.product = new forms_1.FormGroup({
            productInfo: new forms_1.FormGroup({
                productId: new forms_1.FormControl('', [forms_2.Validators.required, forms_2.Validators.minLength(3)]),
                productName: new forms_1.FormControl('', forms_2.Validators.required),
                productCode: new forms_1.FormControl('', forms_2.Validators.required)
            }),
            releaseInfo: new forms_1.FormGroup({
                releaseDate: new forms_1.FormControl('', forms_2.Validators.required),
                description: new forms_1.FormControl('', forms_2.Validators.required),
                price: new forms_1.FormControl('', forms_2.Validators.required),
                starRating: new forms_1.FormControl('', forms_2.Validators.required)
            })
        });
    };
    ProductAddCompoment.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    return ProductAddCompoment;
}());
ProductAddCompoment = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-add.component.html',
        styleUrls: ['app/products/product-add.component.css']
    })
], ProductAddCompoment);
exports.ProductAddCompoment = ProductAddCompoment;
//# sourceMappingURL=product-add.component.js.map