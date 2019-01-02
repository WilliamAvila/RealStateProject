import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
  }

  goToNext(form: any) {
        // Navigate to the property page
        this.router.navigateByUrl('/property-category');
    
}

}
