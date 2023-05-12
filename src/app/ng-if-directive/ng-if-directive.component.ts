import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit{
  x:number;
  y:number;
constructor(){
  this.x=100
  this.y=200
}

ngOnInit(): void {
  
}
}