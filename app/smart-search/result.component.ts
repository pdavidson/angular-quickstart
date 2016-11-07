import { Component, Input } from '@angular/core';

@Component({ 
  selector: 'smart-search-result',  
  template: `          
    <div class="col-md4">
        <h1>{{exercise.exercise.exerciseName}}</h1>
        <p>{{exercise.exercise.altName}}</p>
        <a href="{{exercise.exercise.exerciseURLs['VIDEO_MALE_LONG']}}" target="_blank">
            <img src="{{exercise.exercise.exerciseURLs['THUMB_IMAGE_MALE1']}}" />
        </a>
        <a href="{{exercise.exercise.exerciseURLs['VIDEO_FEMALE_LONG']}}" target="_blank">
            <img src="{{exercise.exercise.exerciseURLs['THUMB_IMAGE_FEMALE1']}}" />
        </a>            
    </div>            
  `
})
export class ResultComponent {
    @Input() exercise: Object;
}
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

