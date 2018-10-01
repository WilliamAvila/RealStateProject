import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Address } from '../data/formData.model';

@Component({
    selector: 'app-property-category',
    templateUrl: './property-category.component.html',
    styleUrls: ['./property-category.component.css']
})
export class PropertyCategoryComponent implements OnInit {
    title = 'Informacion de la Publicacion';
    address: Address;
    form: any;
    selectedType: string;
    types = ["Casa", "Apartamento", "Local Comercial", "Bodega o Almacen", "Edificio", "Terreno", "Finca"];
    waterTank: string;
    furniture: string;
    complexTypes = [
        { id: 1, name: "Complejo de Viviendas" },
        { id: 2, name: "Vivienda Independiente" }
    ];
    transactionTypes = [
        { id: 1, name: "Alquilar" },
        { id: 2, name: "Vender" }
    ];
    departamentos = [
        { id: 1, name: "Atlántida" },
        { id: 2, name: "Choluteca" },
        { id: 3, name: "Colón" },
        { id: 4, name: "Comayagua" },
        { id: 5, name: "Copán" },
        { id: 6, name: "Cortes" },
        { id: 7, name: "El Paraíso" },
        { id: 8, name: "Francisco Morazán" },
        { id: 9, name: "Gracias a Dios" },
        { id: 10, name: "Intibucá" },
        { id: 11, name: "Islas de la Bahía" },
        { id: 12, name: "La Paz" },
        { id: 13, name: "Lempira" },
        { id: 14, name: "Ocotepeque" },
        { id: 15, name: "Olancho" },
        { id: 16, name: "Santa Bárbara" },
        { id: 17, name: "Valle" },
        { id: 18, name: "Yoro" }
    ];

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setAddress(this.address);
        return true;
    }

    goToPrevious(form: any) {

        this.router.navigateByUrl('/personal');;

    }

    goToNext(form: any) {

      
        //if (this.save(form)) {
        // Navigate to the address page
            console.log(this.address.tipoInmobiliario);
            if (this.address.tipoInmobiliario === 'Casa' || this.address.tipoInmobiliario === 'Apartamento')
                this.router.navigate(['/house']);
            if (this.address.tipoInmobiliario === 'Edificio')
                this.router.navigate(['/building']);
            if (this.address.tipoInmobiliario === 'Local Comercial')
                this.router.navigate(['/shop']);
            if (this.address.tipoInmobiliario === 'Bodega o Almacen')
                this.router.navigate(['/warehouse']);
            if (this.address.tipoInmobiliario === 'Finca')
                this.router.navigate(['/estate']);
            if (this.address.tipoInmobiliario === 'Terreno')
                this.router.navigate(['/land']);
       //}

    }
}
