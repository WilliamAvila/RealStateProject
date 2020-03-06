import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonalComponent }    from './personal/personal.component';
import { PropertyComponent }        from './property/property.component';
import { HomeComponent } from './home/home.component';
import { ValuesComponent } from './values/values.component';
import { MissionComponent } from './mission/mission.component';
import { AboutComponent } from './about/about.component';
import { PropertyCategoryComponent } from './property-category/property-category.component';
import { HouseFormComponent } from './house-form/house-form.component';
import { EstateFormComponent } from './estate-form/estate-form.component';
import { LandFormComponent } from './land-form/land-form.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { BuildingFormComponent } from './building-form/building-form.component';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { PreviewComponent } from './preview/preview.component';
import { PricingComponent } from './pricing/pricing.component';
import { UserTypeComponent } from './user-type/user-type.component';
import {ApartmentFormComponent} from './apartment-form/apartment-form.component';
import {BusinessFormComponent} from './business-form/business-form.component';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'user-type', component: UserTypeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'personal', component: PersonalComponent},
    { path: 'property', component: PropertyComponent},
    { path: 'property-category', component: PropertyCategoryComponent},
    { path: 'about', component: AboutComponent},
    { path: 'mission', component: MissionComponent},
    { path: 'values', component: ValuesComponent},
    { path: 'house', component: HouseFormComponent},
    { path: 'estate', component: EstateFormComponent},
    { path: 'land', component: LandFormComponent},
    { path: 'warehouse', component: WarehouseFormComponent},
    { path: 'building', component: BuildingFormComponent},
    { path: 'shop', component: ShopFormComponent},

    { path: 'apartment', component: ApartmentFormComponent},

    { path: 'business', component: BusinessFormComponent},


    { path: 'preview', component: PreviewComponent},

    { path: 'pricing', component: PricingComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes,
    { enableTracing: true } );