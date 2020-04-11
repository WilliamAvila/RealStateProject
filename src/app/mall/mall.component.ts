import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
