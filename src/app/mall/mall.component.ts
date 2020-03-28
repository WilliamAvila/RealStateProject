import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mall',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.css']
})
export class MallComponent implements OnInit {
  complexType: string;
  complexTypes = [
    {id: 1, name: "Plaza Comercial Vertical"},
    {id: 2, name: "Plaza Comercial Horizontal"}
  ];
  hasBathrooms = false;
  hasPrivateParking = false;
  constructor() { }

  ngOnInit() {
  }

}
