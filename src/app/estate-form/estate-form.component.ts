import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-estate-form',
  templateUrl: './estate-form.component.html',
  styleUrls: ['./estate-form.component.css']
})
export class EstateFormComponent implements OnInit {
  workType: string;
  form: any;
  selectedValue: string;
  waterTank: string;
  furniture: string;
  estateTypes = [
    {id: 1, name: "Valle"},
    {id: 2, name: "Montaña"}
  ];
  amenities = [
    {id: 1, name: "Inmediaciones Carreteras"},
    {id: 2, name: "Fuentes de agua"},
    {id: 2, name: "Montaña y Planicie"},
    {id: 2, name: "Cultivadas"},
    {id: 2, name: "Infraestructura para cria de animales"},
    {id: 2, name: "Cercado perimetral"},

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
