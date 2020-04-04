import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-office-complex',
  templateUrl: './private-office-complex.component.html',
  styleUrls: ['./private-office-complex.component.css']
})
export class PrivateOfficeComplexComponent implements OnInit {
  hasFurniture = false;
  hasBathrooms = false;
  hasCommonBathrooms = false;
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
