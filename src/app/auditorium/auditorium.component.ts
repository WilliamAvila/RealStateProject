import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css']
})
export class AuditoriumComponent implements OnInit {


  hasFurniture = false;
  hasBathrooms = false;
  hasMeetingRooms = false;
  hasPrivateParking = false;
  constructor() { }

  ngOnInit() {
  }

}
