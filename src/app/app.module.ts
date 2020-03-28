import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angular5-social-login';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routing } from './routing';
import { RealStateInfoComponent } from './real-state-info/real-state-info.component';
import { PersonalComponent } from './personal/personal.component';
import { PropertyComponent } from './property/property.component';
import { FormDataService } from './data/formData.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { OtherChargesComponent } from './other-charges/other-charges.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './about/about.component';
import { ValuesComponent } from './values/values.component';
import { MissionComponent } from './mission/mission.component';
import { PropertyCategoryComponent } from './property-category/property-category.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HouseFormComponent } from './house-form/house-form.component';
import { LandFormComponent } from './land-form/land-form.component';
import { EstateFormComponent } from './estate-form/estate-form.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { BuildingFormComponent } from './building-form/building-form.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { PreviewComponent } from './preview/preview.component';
import { PricingComponent } from './pricing/pricing.component';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { FbLoginComponent } from './fb-login/fb-login.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { BusinessFormComponent } from './business-form/business-form.component';
import { PrivateOfficeComponent } from './private-office/private-office.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { PrivateOfficeComplexComponent } from './private-office-complex/private-office-complex.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('2219580538358204')
        }
      ]);
  return config;
}

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
    ShopFormComponent,
    PreviewComponent,
    PricingComponent,
    FbLoginComponent,
    UserTypeComponent,
    PostsListComponent,
    ApartmentFormComponent,
    BusinessFormComponent,
    PrivateOfficeComponent,
    WorkspaceComponent,
    PrivateOfficeComplexComponent,
    MeetingRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ImageUploadModule.forRoot(),
    BsDropdownModule.forRoot(),
    SlideshowModule,
    InternationalPhoneModule,
    SocialLoginModule,
    NgxMaskModule.forRoot()

  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }, {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
