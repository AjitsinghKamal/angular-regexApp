import {Component,Input} from '@angular/core';
    @Component({
        selector:'match-detail',
        templateUrl:'./templates/match-detail.html',
        styleUrls:['./styles/detail-style.css']
    })
export class matchDetail{
    @Input() match='';          //get result property of parent component and binds to 'match'
    
}