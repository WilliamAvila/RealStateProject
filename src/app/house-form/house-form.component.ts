import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit {
  workType: string;
  form: any;
  selectedValue: string;
  types = [ "Casa", "Apartamento","Plaza Comercial","Bodega y Almacen"];
  waterTank: string;
  furniture: string;
  especificaciones: string;
  complexTypes = [
    {id: 1, name: "Complejo de viviendas"},
    {id: 2, name: "Vivienda apartada"}
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
    this.router.navigate(['/preview']);
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/preview']);
      }
  }

}
