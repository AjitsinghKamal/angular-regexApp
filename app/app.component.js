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
var core_1 = require("@angular/core");
var match_detail_component_1 = require("./match-detail-component");
var AppComponent = (function () {
    function AppComponent() {
        this.text = ''; //takes in input string from the text-box(id:input)       
        this.regex = ''; //takes in regex from the input(id:reg-input)
        this.replaceWith = ''; //takes in replace string  from input(id:replace-with)   
        this.replace = false; //to toggle visibilty of the div(id:replace-box)   
    }
    /* live update the regex property and check for matches */
    AppComponent.prototype.onChange = function (newVal) {
        this.regex = newVal;
        var pattern;
        try {
            //TODO:make the following better
            pattern = (this.regex !== "") ? new RegExp(this.regex, 'g') : null; //DONT TAKE OUT 'g':browser lockdown if no 'g'
            if (pattern !== null)
                this.matchThis(pattern);
        }
        catch (error) {
            this.result = [];
            console.log(error);
        }
    };
    /*toggle component view*/
    AppComponent.prototype.tabSwitch = function (event) {
        switch (event) {
            case 1:
                this.replace = false;
                break;
            case 2:
                this.replace = true;
                break;
            default:
                this.replace = true;
                break;
        }
    };
    /* execute the regex.exec() here to fetch matches*/
    AppComponent.prototype.matchThis = function (patt) {
        var mat;
        var arr = []; //push all result at once in result property
        while ((mat = patt.exec(this.text)) !== null) {
            console.log(arr.push(mat[0] + "next at" + patt.lastIndex));
        }
        this.result = arr;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'the-app',
            templateUrl: './templates/app.html',
            styleUrls: ['./styles/app-style.css'],
            directives: [match_detail_component_1.matchDetail]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map