import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routing } from './routing';
import { RealStateInfoComponent } from './real-state-info/real-state-info.component';
import { PersonalComponent } from './personal/personal.component';
import { PropertyComponent } from './property/property.component';
import { FormDataService }    from './data/formData.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule }   from '@angular/forms';
import { ImageUploadModule } from "angular2-image-upload";
import { OtherChargesComponent } from './other-charges/other-charges.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './values/values.component';
import { MissionComponent } from './mission/mission.component';
import { PropertyCategoryComponent } from './property-category/property-category.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HouseFormComponent } from './house-form/house-form.component';
import { LandFormComponent } from './land-form/land-form.component';
import { EstateFormComponent } from './estate-form/estate-form.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { BuildingFormComponent } from './building-form/building-form.component';
import { ShopFormComponent } from './shop-form/shop-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RealStateInfoComponent,
    PersonalComponent,
    PropertyComponent,
    NavbarComponent,
    OtherChargesComponent,
    AboutComponent,
    ValuesComponent,
    MissionComponent,
    PropertyCategoryComponent,
    HouseFormComponent,
    LandFormComponent,
    EstateFormComponent,
    WarehouseFormComponent,
    BuildingFormComponent,
    ShopFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ImageUploadModule.forRoot(),
    BsDropdownModule.forRoot(),
    SlideshowModule

  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
