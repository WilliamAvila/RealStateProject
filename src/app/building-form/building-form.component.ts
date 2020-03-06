import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent implements OnInit {

  workType: string;
  form: any;
  selectedValue: string;
  types = ["Casa", "Apartamento", "Plaza Comercial", "Bodega y Almacen"];
  waterTank: string;
  furniture: string;
  complexType: string;
  complexTypes = [
    { id: 1, name: "Edificacion Horizontal" },
    { id: 2, name: "Edificacion Vertical" }
  ];
  transactionTypes = [
    { id: 1, name: "Alquilar" },
    { id: 2, name: "Vender" }
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
