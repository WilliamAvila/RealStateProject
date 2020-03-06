import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
 
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  title = 'Informacion de la Publicacion';
  workType: string;
  form: any;
  selectedValue: string;
  types = [ "Casa", "Apartamento","Plaza Comercial","Bodega y Almacen"];
  waterTank: string;
  furniture: string;
  especificaciones: string;
  tipoTransaccion: string;
  complexTypes = [
    {id: 1, name: "Complejo de Viviendas"},
    {id: 2, name: "Vivienda Independiente"}
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
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigateByUrl('/register/(route1:personal)');;
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/address']);
      }
  }

}
