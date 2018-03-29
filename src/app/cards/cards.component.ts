import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() text:string;
@Input() number:number;
userKey="";
  constructor() { console.log(this.text)}
  ngOnInit() {
    console.log(this.text)
  }

}
