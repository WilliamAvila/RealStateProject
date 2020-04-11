import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToPrevious(form: any) {
    this.router.navigateByUrl('/property-category');
  }

  goToNext(form: any) {
    // TODO: implement navigation to the right route
  }

}
