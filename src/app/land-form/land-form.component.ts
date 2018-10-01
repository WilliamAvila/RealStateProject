import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-land-form',
  templateUrl: './land-form.component.html',
  styleUrls: ['./land-form.component.css']
})
export class LandFormComponent implements OnInit {
  workType: string;
  form: any;
  selectedValue: string;
  waterTank: string;
  furniture: string;
  complexTypes = [
    {id: 1, name: "Privado"},
    {id: 2, name: "Independiente"}
  ];
  landTypes = [
    {id: 1, name: "Residencial"},
    {id: 2, name: "Comercial"}
  ];
  transactionTypes = [
    {id: 1, name: "Alquilar"},
    {id: 2, name: "Vender"}
  ];
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.workType = this.formDataService.getWork();
      console.log('Work feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      
      this.formDataService.setWork(this.workType);
      return true;
  }

  goToPrevious(form: any) {

    this.router.navigateByUrl('/property-category');;

  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/address']);
      }
  }

}
