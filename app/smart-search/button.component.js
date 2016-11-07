"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SmartSearchButton = (function () {
    function SmartSearchButton() {
    }
    SmartSearchButton.prototype.onClickMe = function (el) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SmartSearchButton.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SmartSearchButton.prototype, "val", void 0);
    SmartSearchButton = __decorate([
        core_1.Component({
            selector: 'smart-search-button',
            template: "          \n    <label class=\"btn btn-primary active\" (click)=\"onClickMe()\">\n        <input type=\"checkbox\" checked autocomplete=\"off\" value=\"{{val}}\" name=\"{{name}}\"> {{val}}\n    </label>            \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SmartSearchButton);
    return SmartSearchButton;
}());
exports.SmartSearchButton = SmartSearchButton;
//# sourceMappingURL=button.component.js.map