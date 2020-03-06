import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { Personal }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  title = 'Informacion Personal';
  personal: Personal;
  form: any;
  submitted: boolean;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.personal = this.formDataService.getPersonal();
      console.log('Personal feature loaded!');
      this.submitted = false;
  }

  save(form: any): boolean {
      if (!form.valid) {
        this.submitted = false;
          return false;
      }
       this.submitted = true;   
      this.formDataService.setPersonal(this.personal);
      return true;
  }
  goToPrevious() {
        // Navigate to the personal page
        this.router.navigateByUrl('/user-type');;
    
}

  goToNext(form: any) {
      //if (this.save(form)) {
          // Navigate to the property page
          this.router.navigateByUrl('/pricing');
      //}
  }

}
