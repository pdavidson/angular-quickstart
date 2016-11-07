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
var ResultComponent = (function () {
    function ResultComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResultComponent.prototype, "exercise", void 0);
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'smart-search-result',
            template: "          \n    <div class=\"col-md4\">\n        <h1>{{exercise.exercise.exerciseName}}</h1>\n        <p>{{exercise.exercise.altName}}</p>\n        <a href=\"{{exercise.exercise.exerciseURLs['VIDEO_MALE_LONG']}}\" target=\"_blank\">\n            <img src=\"{{exercise.exercise.exerciseURLs['THUMB_IMAGE_MALE1']}}\" />\n        </a>\n        <a href=\"{{exercise.exercise.exerciseURLs['VIDEO_FEMALE_LONG']}}\" target=\"_blank\">\n            <img src=\"{{exercise.exercise.exerciseURLs['THUMB_IMAGE_FEMALE1']}}\" />\n        </a>            \n    </div>            \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
/*
{
      "exercise": {
        "exerciseId": 10,
        "exerciseName": "Wide-Grip Lat Pulldown",
        "exerciseNameSEO": "wide-grip-lat-pulldown",
        "exerciseType": {
          "typeID": 1,
          "typeName": "Strength",
          "exerciseCount": 0,
          "active": true
        },
        "mainMuscle": {
          "muscleID": 3,
          "muscleName": "Lats",
          "exerciseCount": 0,
          "active": true
        },
        "equipment": [
          {
            "equipmentID": 4,
            "equipmentName": "Cable",
            "exerciseCount": 0,
            "active": true
          }
        ],
        "level": {
          "levelID": 1,
          "levelName": "Beginner",
          "active": true
        },
        "rating": 8.6,
        "altName": "Wide Grip Lat Pulldown, Lat Pulldown",
        "exerciseURLs": {
          "THUMB_IMAGE_FEMALE1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Female/t/10_1.jpg",
          "THUMB_IMAGE_MALE1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Male/t/10_1.jpg",
          "VIDEO_FEMALE_LONG": "http://videos.bodybuilding.com/watch/50131/wide-grip-lat-pulldown",
          "DETAIL": "http://www.bodybuilding.com/exercises/detail/view/name/wide-grip-lat-pulldown",
          "VIDEO_FEMALE_SHORT": "http://videos.bodybuilding.com/watch/50561/wide-grip-lat-pulldown",
          "EQUIPMENT": "http://www.bodybuilding.com/exercises/finder/lookup/filter/equipment/id/4/equipment/cable",
          "VIDEO_MALE_SHORT": "http://videos.bodybuilding.com/watch/32681/wide-grip-lat-pulldown",
          "THUMB_IMAGE_MALE2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Male/t/10_2.jpg",
          "MAIN_MUSCLE": "http://www.bodybuilding.com/exercises/finder/lookup/filter/muscle/id/3/muscle/lats",
          "VIDEO_MALE_LONG": "http://videos.bodybuilding.com/watch/41441/wide-grip-lat-pulldown",
          "THUMB_IMAGE_FEMALE2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Female/t/10_2.jpg"
        },
        "active": true,
        "published": true
      }
    }
    */
//# sourceMappingURL=result.component.js.map