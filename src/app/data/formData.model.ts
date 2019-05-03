export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    password: string = '';
    birthday: string = '';
    username: string = '';
    phone: string = '';
    phone2: string = '';
    cellphone: string = '';
    tipoInmobiliario: string = '';
    departamento: string = '';
    ciudad: string = '';
    direccion: string = '';
    imagenes: string = '';
    tipoTransaccion: string = '';
 
    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
 
export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    password: string = '';
    birthday: string = '';
    username: string = '';
    phone: string = '';
    phone2: string = '';
    cellphone: string = '';
}
 
export class Address {
    tipoInmobiliario: string = '';
    departamento: string = '';
    ciudad: string = '';
    direccion: string = '';
    imagenes: string = '';
    tipoTransaccion: string = '';
}

export class TipoInmobiliario {
    tipoDeComplejo: string = '';
    amenidades: string[] = [];
    metrosCuadrados: number = 0;
    infoAdicionl: string = '';
    precio: number = 0;
    frecuencia: string = '';
    habitaciones: string = '';
    banos: string = '';
    parqueos: string = '';
    areas: string = '';
    varasCuadradasTerreno: string = '';
    varasCuadradasConstruccion: string = '';

    otrosCargos: Object = {};
}

export class OtrosCargos{
    nombre: string = '';
    precio: number = 0;
    frecuencia: string = '';
}