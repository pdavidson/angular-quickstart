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
    SmartSearch.prototype.search = function () {
        console.log("Clicked Search");
    };
    SmartSearch = __decorate([
        core_1.Component({
            selector: 'smart-search',
            providers: [smart_search_service_1.SmartSearchService],
            template: "\n    \n    <div class=\"row\">\n      <h2>Muscles</h2>\n      <div class=\"btn-group\">\n        <smart-search-button *ngFor=\"let muscle of criteria?.muscles\"\n          [name]=\"'muscle'\"\n          [val]=\"muscle\">\n        </smart-search-button>              \n      </div>      \n    </div>\n\n    <div class=\"row\">\n      <h2>Equipment</h2>\n      <div class=\"btn-group\">\n          <smart-search-button *ngFor=\"let equipment of criteria?.equipment\"\n            [name]=\"'equipment'\"\n            [val]=\"equipment\">\n          </smart-search-button>              \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <h2>Exercise Type</h2>\n      <div class=\"btn-group\">\n          <smart-search-button *ngFor=\"let exerciseType of criteria?.exerciseType\"\n            [name]=\"'exerciseType'\"\n            [val]=\"exerciseType\">\n          </smart-search-button>              \n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <label>Show Exercises Per Muscle Group <input type=\"number\" value=\"{{criteria?.maxExercisesPerMuscle}}\"/></label>    \n    </div>\n\n    <div class=\"row\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"search()\">Search</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [smart_search_service_1.SmartSearchService])
    ], SmartSearch);
    return SmartSearch;
}());
exports.SmartSearch = SmartSearch;
//# sourceMappingURL=smart-search.component.js.map