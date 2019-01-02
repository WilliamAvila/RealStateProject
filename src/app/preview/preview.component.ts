import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private router: Router, private formDataService: FormDataService, private location: Location) {
  }


  ngOnInit() {
  }

  addPost(form: any) {

    this.router.navigateByUrl('/property-category');;

  }

  goToPrevious(form: any) {

    this.location.back();

  }

}
