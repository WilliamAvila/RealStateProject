import { Injectable }                        from '@angular/core';
 
import { FormData, Personal, Address }       from './formData.model';
 
@Injectable()
export class FormDataService {
 
    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
 
    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            birthday:this.formData.birthday,
            password: this.formData.password,
            username: this.formData.username,
            phone: this.formData.phone
        };
        return personal;
    }
 
    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
    }
 
    getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
    }
 
    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            tipoInmobiliario: this.formData.tipoInmobiliario,
            departamento: this.formData.departamento,
            ciudad: this.formData.ciudad,
            direccion: this.formData.direccion,
            imagenes: this.formData.imagenes,
            tipoTransaccion: this.formData.tipoTransaccion
        };
        return address;
    }
 
    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.tipoInmobiliario = data.tipoInmobiliario;
        this.formData.departamento = data.departamento;
        this.formData.ciudad = data.ciudad;
        this.formData.direccion = data.direccion;
        this.formData.imagenes = data.imagenes;
        this.formData.tipoTransaccion = data.tipoTransaccion;
    }
 
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }
 
    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }
 
    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }
}