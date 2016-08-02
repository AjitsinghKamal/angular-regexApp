import {Component,Input} from '@angular/core';

@Component({
    selector:'text-replace',
    templateUrl:'./templates/text-replace.html',
    
})

export class replaceComponent{
    @Input() rTxt:string;
    @Input() rx:string;
    replaceWith:string;
    output:string;
    
    doReplace(){
    let r=new RegExp(rx);
    this.output=rTxt.replace(r,replaceWith) 
    }
}