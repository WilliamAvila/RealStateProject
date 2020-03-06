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
    postName: any;
    selectedType: string;
    types = ["Casa", "Apartamento", "Local Comercial", "Bodega o Almacen", "Edificio", "Terreno", "Finca"];
    waterTank: string;
    furniture: string;
    especificaciones: string;
    tipoTransaccion: string;
    selectedSubCategory: string;
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
    departamento = { id: 1, name: "Atlántida" };
    ciudad= {parentId:1, name: "La Ceiba"};

    ciudades = [
        {parentId:1, name: "La Ceiba"},
        {parentId:1, name: "Tela"}, {parentId:1, name:"Jutiapa"},
        {parentId:1, name: "La Masica"}, {parentId:1, name:"San Francisco"},
        {parentId:1, name:"Arizona"},{parentId:1, name:"Esparta"}, 
        {parentId:1, name:"El Porvenir"},
        {parentId:3,name:"Trujillo"}, {parentId:3,name:"Balfate"}];

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

   getCiudades(selectedDepartamentoId) {

   
    
        // return the branches of the selected ciudad
        return this.ciudades.filter(item => item.parentId === selectedDepartamentoId);
    };
  mainCategory = {title: 'Atlantida',id: 1};
  subcategory = {title: 'La Ceiba',parentId: 1};

  mainGroups = [
    { id: 1, title: 'Atlantida', },
    { id:2, title: 'Choluteca',},
    { id: 3, title: "Colón" },
    { id: 4, title: "Comayagua" },
    { id: 5, title: "Copán" },
    { id: 6, title: "Cortes" },
    { id: 7, title: "El Paraíso" },
    { id: 8, title: "Francisco Morazán" },
    { id: 9, title: "Gracias a Dios" },
    { id: 10, title: "Intibucá" },
    { id: 11, title: "Islas de la Bahía" },
    { id: 12, title: "La Paz" },
    { id: 13, title: "Lempira" },
    { id: 14, title: "Ocotepeque" },
    { id: 15, title: "Olancho" },
    { id: 16, title: "Santa Bárbara" },
    { id: 17, title: "Valle" },
    { id: 18, title: "Yoro" }
  ]

  subCategories = [ {title: 'La Ceiba',parentId: 1 },
    { title: 'Tela', parentId: 1 },
    { title: 'Jutiapa', parentId: 1 },
    { title: 'La Masica', parentId: 1 },
    { title: 'San Francisco', parentId: 1 },
    { title: 'Arizona', parentId: 1 },
    { title: 'Esparta', parentId: 1 },
    { title: 'El Porvenir', parentId: 1 },
    { title: 'Choluteca', parentId: 2 },
    { title: 'Apacilagua', parentId: 2 },
    { title: 'Concepción de María', parentId: 2 },
    { title: 'Duyure', parentId: 2 },
    { title: 'El Corpus', parentId: 2 },
    { title: 'El Triunfo', parentId: 2 },
    { title: 'Marcovia', parentId: 2 },
    { title: 'Morolica', parentId: 2 },
    { title: 'Namasigue', parentId: 2 },
    { title: 'Orocuina', parentId: 2 },
    { title: 'Pespire', parentId: 2 },
    { title: 'San Antonio de Flores', parentId: 2 },
    { title: 'San Isidro', parentId: 2 },
    { title: 'San José', parentId: 2 },
    { title: 'San Marcos de Colón', parentId: 2 },
    { title: 'Santa Ana de Yusguare', parentId: 2 },
    { title: 'Trujillo', parentId: 3 },
    { title: 'Balfate', parentId: 3 },
    { title: 'Iriona', parentId: 3 },
    { title: 'Limón', parentId: 3 },
    { title: 'Sabá', parentId: 3 },
    { title: 'Santa Fe', parentId: 3 },
    { title: 'Santa Rosa de Aguán', parentId: 3 },
    { title: 'Sonaguera', parentId: 3 },
    { title: 'Tocoa', parentId: 3 },
    { title: 'Bonito Oriental', parentId: 3 },
    { title: 'Comayagua', parentId: 4 },
    { title: 'Ajuterique', parentId: 4 },
    { title: 'El Rosario', parentId: 4 },
    { title: 'Esquías', parentId: 4 },
    { title: 'Humuya', parentId: 4 },
    { title: 'La libertad', parentId: 4 },
    { title: 'Lamaní', parentId: 4 },
    { title: 'La Trinidad', parentId: 4 },
    { title: 'Lejamani', parentId: 4 },
    { title: 'Meambar', parentId: 4 },
    { title: 'Minas de Oro', parentId: 4 },
    { title: 'Ojos de Agua', parentId: 4 },
    { title: 'San Jerónimo (Honduras)', parentId: 4 },
    { title: 'San José de Comayagua', parentId: 4 },
    { title: 'San José del Potrero', parentId: 4 },
    { title: 'San Luis', parentId: 4 },
    { title: 'San Sebastián', parentId: 4 },
    { title: 'Siguatepeque', parentId: 4 },
    { title: 'Villa de San Antonio', parentId: 4 },
    { title: 'Las Lajas', parentId: 4 },
    { title: 'Taulabé', parentId: 4 },
    { title: 'Santa Rosa de Copán', parentId: 5 },
    { title: 'Cabañas', parentId: 5 },
    { title: 'Concepción', parentId: 5 },
    { title: 'Copán Ruinas', parentId: 5 },
    { title: 'Corquín', parentId: 5 },
    { title: 'Cucuyagua', parentId: 5 },
    { title: 'Dolores', parentId: 5 },
    { title: 'Dulce Nombre', parentId: 5 },
    { title: 'El Paraíso', parentId: 5 },
    { title: 'Florida', parentId: 5 },
    { title: 'La Jigua', parentId: 5 },
    { title: 'La Unión', parentId: 5 },
    { title: 'Nueva Arcadia', parentId: 5 },
    { title: 'San Agustín', parentId: 5 },
    { title: 'San Antonio', parentId: 5 },
    { title: 'San Jerónimo', parentId: 5 },
    { title: 'San José', parentId: 5 },
    { title: 'San Juan de Opoa', parentId: 5 },
    { title: 'San Nicolás', parentId: 5 },
    { title: 'San Pedro', parentId: 5 },
    { title: 'Santa Rita', parentId: 5 },
    { title: 'Trinidad de Copán', parentId: 5 },
    { title: 'Veracruz', parentId: 5 },
    { title: 'San Pedro Sula', parentId: 6 },
    { title: 'Choloma', parentId: 6 },
    { title: 'Omoa', parentId: 6 },
    { title: 'Pimienta', parentId: 6 },
    { title: 'Potrerillos', parentId: 6 },
    { title: 'Puerto Cortés', parentId: 6 },
    { title: 'San Antonio de Cortés', parentId: 6 },
    { title: 'San Francisco de Yojoa', parentId: 6 },
    { title: 'San Manuel', parentId: 6 },
    { title: 'Santa Cruz de Yojoa', parentId: 6 },
    { title: 'Villanueva', parentId: 6 },
    { title: 'La Lima', parentId: 6 },
    { title: 'Yuscarán', parentId: 7 },
    { title: 'Alauca', parentId: 7 },
    { title: 'Danlí', parentId: 7 },
    { title: 'El Paraíso', parentId: 7 },
    { title: 'Güinope', parentId: 7 },
    { title: 'Jacaleapa', parentId: 7 },
    { title: 'Liure', parentId: 7 },
    { title: 'Morocelí', parentId: 7 },
    { title: 'Morocelí', parentId: 7 },
    { title: 'Potrerillos', parentId: 7 },
    { title: 'San Antonio de Flores', parentId: 7 },
    { title: 'San Lucas', parentId: 7 },
    { title: 'San Matías', parentId: 7 },
    { title: 'Soledad', parentId: 7 },
    { title: 'Teupasenti', parentId: 7 },
    { title: 'Texiguat', parentId: 7 },
    { title: 'Vado Ancho', parentId: 7 },
    { title: 'Yauyupe', parentId: 7 },
    { title: 'Trojes', parentId: 7 },
    { title: 'Distrito Central', parentId: 8 },
    { title: 'Alubarén', parentId: 8 },
    { title: 'Cedros', parentId: 8 },
    { title: 'Curarén', parentId: 8 },
    { title: 'El Porvenir', parentId: 8 },
    { title: 'Guaimaca', parentId: 8 },
    { title: 'La Libertad', parentId: 8 },
    { title: 'La Venta', parentId: 8 },
    { title: 'Lepaterique', parentId: 8 },
    { title: 'Maraita', parentId: 8 },
    { title: 'Marale', parentId: 8 },
    { title: 'Nueva Armenia', parentId: 8 },
    { title: 'Ojojona', parentId: 8 },
    { title: 'Orica', parentId: 8 },
    { title: 'Reitoca', parentId: 8 },
    { title: 'Sabanagrande', parentId: 8 },
    { title: 'San Antonio de Oriente', parentId: 8 },
    { title: 'San Buenaventura', parentId: 8 },
    { title: 'San Ignacio', parentId: 8 },
    { title: 'San Juan de Flores', parentId: 8 },
    { title: 'San Miguelito', parentId: 8 },
    { title: 'Santa Ana', parentId: 8 },
    { title: 'Santa Lucía', parentId: 8 },
    { title: 'Talanga', parentId: 8 },
    { title: 'Tatumbla', parentId: 8 },
    { title: 'Valle de Ángeles', parentId: 8 },
    { title: 'Villa de San Francisco', parentId: 8 },
    { title: 'Vallecillo', parentId: 8 },
    { title: 'Puerto Lempira', parentId: 9 },
    { title: 'Brus Laguna', parentId: 9 },
    { title: 'Ahuas', parentId: 9 },
    { title: 'Juan Francisco Bulnes', parentId: 9 },
    { title: 'Ramón Villeda Morales', parentId: 9 },
    { title: 'Wampusirpe', parentId: 9 },
    { title: 'La Esperanza', parentId: 10 },
    { title: 'Camasca', parentId: 10 },
    { title: 'Colomoncagua', parentId: 10 },
    { title: 'Concepción', parentId: 10 },
    { title: 'Dolores', parentId: 10 },
    { title: 'Intibucá', parentId: 10 },
    { title: 'Jesús de Otoro', parentId: 10 },
    { title: 'Magdalena', parentId: 10 },
    { title: 'Masaguara', parentId: 10 },
    { title: 'San Antonio', parentId: 10 },
    { title: 'San Isidro', parentId: 10 },
    { title: 'San Juan', parentId: 10 },
    { title: 'San Marcos de la Sierra', parentId: 10 },
    { title: 'San Miguel Guancapla', parentId: 10 },
    { title: 'Santa Lucía', parentId: 10 },
    { title: 'Yamaranguila', parentId: 10 },
    { title: 'San Francisco de Opalaca', parentId: 10 },
    { title: 'Roatán', parentId: 11 },
    { title: 'Guanaja', parentId: 11 },
    { title: 'José Santos Guardiola', parentId: 11 },
    { title: 'Utila', parentId: 11 },
    { title: 'La Paz', parentId: 12 },
    { title: 'Aguanqueterique', parentId: 12 },
    { title: 'Cabañas', parentId: 12 },
    { title: 'Cane', parentId: 12 },
    { title: 'Chinacla', parentId: 12 },
    { title: 'Guajiquiro', parentId: 12 },
    { title: 'Lauterique', parentId: 12 },
    { title: 'Marcala', parentId: 12 },
    { title: 'Mercedes de Oriente', parentId: 12 },
    { title: 'Opatoro', parentId: 12 },
    { title: 'San Antonio del Norte', parentId: 12 },
    { title: 'San José', parentId: 12 },
    { title: 'San Juan', parentId: 12 },
    { title: 'San Pedro de Tutule', parentId: 12 },
    { title: 'Santa Ana', parentId: 12 },
    { title: 'Santa Elena', parentId: 12 },
    { title: 'Santa María', parentId: 12 },
    { title: 'Santiago de Puringla', parentId: 12 },
    { title: 'Yarula', parentId: 12 },
    { title: 'Gracias', parentId: 13 },
    { title: 'Belén', parentId: 13 },
    { title: 'Candelaria', parentId: 13 },
    { title: 'Cololaca', parentId: 13 },
    { title: 'Erandique', parentId: 13 },
    { title: 'Gualcince', parentId: 13 },
    { title: 'Guarita', parentId: 13 },
    { title: 'La Campa', parentId: 13 },
    { title: 'La Iguala', parentId: 13 },
    { title: 'Las Flores', parentId: 13 },
    { title: 'La Unión', parentId: 13 },
    { title: 'La Virtud', parentId: 13 },
    { title: 'Lepaera', parentId: 13 },
    { title: 'Mapulaca', parentId: 13 },
    { title: 'Piraera', parentId: 13 },
    { title: 'San Andrés', parentId: 13 },
    { title: 'San Francisco', parentId: 13 },
    { title: 'San Juan Guarita', parentId: 13 },
    { title: 'San Manuel Colohete', parentId: 13 },
    { title: 'San Rafael', parentId: 13 },
    { title: 'San Sebastián', parentId: 13 },
    { title: 'Santa Cruz', parentId: 13 },
    { title: 'Talgua', parentId: 13 },
    { title: 'Tambla', parentId: 13 },
    { title: 'Tomalá', parentId: 13 },
    { title: 'Valladolid', parentId: 13 },
    { title: 'Virginia', parentId: 13 },
    { title: 'San Marcos de Caiquín', parentId: 13 },
    { title: 'Ocotepeque', parentId: 14},
    { title: 'Belén Gualcho', parentId: 14 },
    { title: 'Concepción', parentId: 14 },
    { title: 'Dolores Merendón', parentId: 14 },
    { title: 'Fraternidad', parentId: 14 },
    { title: 'La Encarnación', parentId: 14 },
    { title: 'La Labor', parentId: 14 },
    { title: 'Lucerna', parentId: 14 },
    { title: 'Mercedes', parentId: 14 },
    { title: 'San Fernando', parentId: 14 },
    { title: 'San Francisco del Valle', parentId: 14 },
    { title: 'San Jorge', parentId: 14 },
    { title: 'San Marcos', parentId: 14 },
    { title: 'Santa Fe', parentId: 14 },
    { title: 'Sensenti', parentId: 14 },
    { title: 'Sinuapa', parentId: 14 },
    { title: 'Juticalpa', parentId: 15 },
    { title: 'Campamento', parentId: 15 },
    { title: 'Catacamas', parentId: 15 },
    { title: 'Concordia', parentId: 15 },
    { title: 'Dulce Nombre de Culmí', parentId: 15 },
    { title: 'El Rosario', parentId: 15 },
    { title: 'Esquipulas del Norte', parentId: 15 },
    { title: 'Gualaco', parentId: 15 },
    { title: 'Guarizama', parentId: 15 },
    { title: 'Guata', parentId: 15 },
    { title: 'Guayape', parentId: 15 },
    { title: 'Jano', parentId: 15 },
    { title: 'La Unión', parentId: 15 },
    { title: 'Mangulile', parentId: 15 },
    { title: 'Manto', parentId: 15 },
    { title: 'Salamá', parentId: 15 },
    { title: 'San Esteban', parentId: 15 },
    { title: 'San Francisco de Becerra', parentId: 15 },
    { title: 'San Francisco de la Paz', parentId: 15 },
    { title: 'Santa María del Real', parentId: 15 },
    { title: 'Silca', parentId: 15 },
    { title: 'Yocón', parentId: 15 },
    { title: 'Patuca', parentId: 15 },
    { title: 'Santa Bárbara', parentId: 16 },
    { title: 'Arada', parentId: 16 },
    { title: 'Atima', parentId: 16 },
    { title: 'Azacualpa', parentId: 16 },
    { title: 'Ceguaca', parentId: 16 },
    { title: 'Concepción del Norte', parentId: 16 },
    { title: 'Concepción del Sur', parentId: 16 },
    { title: 'Chinda', parentId: 16 },
    { title: 'El Níspero', parentId: 16 },
    { title: 'Gualala', parentId: 16 },
    { title: 'Ilama', parentId: 16 },
    { title: 'Las Vegas', parentId: 16 },
    { title: 'Macuelizo', parentId: 16 },
    { title: 'Naranjito', parentId: 16 },
    { title: 'Nuevo Celilac', parentId: 16 },
    { title: 'Nueva Frontera', parentId: 16 },
    { title: 'Petoa', parentId: 16 },
    { title: 'Protección', parentId: 16 },
    { title: 'Quimistán', parentId: 16 },
    { title: 'San Francisco de Ojuera', parentId: 16 },
    { title: 'San José de las Colinas', parentId: 16 },
    { title: 'San Luis', parentId: 16 },
    { title: 'San Marcos', parentId: 16 },
    { title: 'San Nicolás', parentId: 16 },
    { title: 'San Pedro Zacapa', parentId: 16 },
    { title: 'San Vicente Centenario', parentId: 16 },
    { title: 'Santa Rita', parentId: 16 },
    { title: 'Trinidad', parentId: 16 },
    { title: 'Nacaome', parentId: 17 },
    { title: 'Alianza', parentId: 17 },
    { title: 'Amapala', parentId: 17 },
    { title: 'Aramecina', parentId: 17 },
    { title: 'Caridad', parentId: 17 },
    { title: 'Goascorán', parentId: 17 },
    { title: 'Langue', parentId: 17 },
    { title: 'San Francisco de Coray', parentId: 17 },
    { title: 'San Lorenzo', parentId: 17 },
    { title: 'Yoro', parentId: 18 },
    { title: 'Arenal', parentId: 18 },
    { title: 'El Negrito', parentId: 18 },
    { title: 'El Progreso', parentId: 18 },
    { title: 'Jocón', parentId: 18 },
    { title: 'Morazán', parentId: 18 },
    { title: 'Olanchito', parentId: 18 },
    { title: 'Santa Rita', parentId: 18 },
    { title: 'Sulaco', parentId: 18 },
    { title: 'Victoria', parentId: 18 },
    { title: 'Yorito', parentId: 18 }
    
    
    
    

  ]

  filterSubById(id) {
    return this.subCategories.filter(item => item.parentId === id);
  }

    

    goToNext() {

      
        //if (this.save(form)) {
        // Navigate to the address page
            console.log(this.address.tipoInmobiliario);
            if (this.address.tipoInmobiliario === 'Apartamento')
            this.router.navigate(['/apartment']);
            if (this.address.tipoInmobiliario === 'Casa')
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
