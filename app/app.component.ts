import { Component,Input} from "@angular/core";
import {matchDetail} from "./match-detail-component";

@Component({
        selector : 'the-app',
        templateUrl : './templates/app.html',
        styleUrls : ['./styles/app-style.css'],
        directives:[matchDetail]       
    })


export class AppComponent {
    text:string='';                      //takes in input string from the text-box(id:input)       
    regex:string='';                     //takes in regex from the input(id:reg-input)
    replaceWith:string='';               //takes in replace string  from input(id:replace-with)   
    replace:boolean=false;               //to toggle visibilty of the div(id:replace-box)   
    result:any;                          //TO-DO :assign this to get result of matches
//TODO:move regex object creation to seperate service
        /* live update the regex property and check for matches */
    onChange(newVal){
        this.regex=newVal;
        
        let pattern;
        try{
//TODO:make the following better
        pattern=(this.regex!=="")?new RegExp(this.regex,'g'):null;//DONT TAKE OUT 'g':browser lockdown if no 'g'
            if(pattern!==null)
                this.matchThis(pattern);
                        
        }catch(error){
            this.result=[];
            console.log(error);
        }
        
        
    }
   /*toggle component view*/ 
tabSwitch(event){
    switch(event){
            case 1:
                this.replace=false;
                break;
            case 2:
                this.replace=true;
                break;
            default:
                this.replace=true;
                break;
    }
}
/* execute the regex.exec() here to fetch matches*/
matchThis(patt){
       
    let mat;
    let arr=[]                              //push all result at once in result property
    while((mat=patt.exec(this.text))!==null){           //get all the matches
        console.log(arr.push(mat[0]+"next at"+patt.lastIndex));
        }
    this.result=arr;
    }
    
}
