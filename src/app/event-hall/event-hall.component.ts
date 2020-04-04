import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-hall',
  templateUrl: './event-hall.component.html',
  styleUrls: ['./event-hall.component.css']
})
export class EventHallComponent implements OnInit {

  hasFurniture = false;
  hasBathrooms = false;
  hasMeetingRooms = false;
  hasPrivateParking = false;
  constructor() { }

  ngOnInit() {
  }

}
