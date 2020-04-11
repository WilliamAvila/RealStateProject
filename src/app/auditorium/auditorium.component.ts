import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
