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
var smart_search_service_1 = require('./smart-search.service');
var SmartSearch = (function () {
    function SmartSearch(smartSearchService) {
        this.smartSearchService = smartSearchService;
    }
    SmartSearch.prototype.ngOnInit = function () {
        var _this = this;
        this.smartSearchService.getCriteria()
            .subscribe(function (data) {
            console.log("Got data ", data);
            _this.criteria = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    SmartSearch = __decorate([
        core_1.Component({
            selector: 'smart-search',
            providers: [smart_search_service_1.SmartSearchService],
            template: "\n    <div>\n      <div class=\"title-muscles\">Muscles</div>\n      <ul>\n      <li *ngFor=\"let muscle of criteria?.muscles\" class=\"selectable\">{{muscle}}</li>\n      </ul>\n      <div class=\"title-equipment\">Equipment</div>\n      <ul>\n        <li *ngFor=\"let equipment of criteria?.equipment\" class=\"selectable\">{{equipment}}</li>\n      </ul>\n      <div class=\"title-exerciseType\">Exercise Type</div>\n      <ul>\n        <li *ngFor=\"let et of criteria?.exerciseType\" class=\"selectable\">{{et}}</li>\n      </ul>\n    </div>  \n  "
        }), 
        __metadata('design:paramtypes', [smart_search_service_1.SmartSearchService])
    ], SmartSearch);
    return SmartSearch;
}());
exports.SmartSearch = SmartSearch;
//# sourceMappingURL=smart-search.component.js.map