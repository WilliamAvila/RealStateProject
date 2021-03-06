import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonalComponent } from './personal/personal.component';
import { PropertyComponent } from './property/property.component';
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
import { PrivateOfficeComponent } from './private-office/private-office.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { PrivateOfficeComplexComponent } from './private-office-complex/private-office-complex.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';
import { MallComponent } from './mall/mall.component';
import { AuditoriumComponent } from './auditorium/auditorium.component';
import { EventHallComponent } from './event-hall/event-hall.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user-type', component: UserTypeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'property', component: PropertyComponent },
    { path: 'property-category', component: PropertyCategoryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'values', component: ValuesComponent },
    { path: 'house', component: HouseFormComponent },
    { path: 'estate', component: EstateFormComponent },
    { path: 'land', component: LandFormComponent },
    { path: 'warehouse', component: WarehouseFormComponent },
    { path: 'building', component: BuildingFormComponent },
    { path: 'shop', component: ShopFormComponent },
    { path: 'private-office', component: PrivateOfficeComponent },
    { path: 'apartment', component: ApartmentFormComponent },
    { path: 'business', component: BusinessFormComponent },
    { path: 'preview', component: PreviewComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'workspace', component: WorkspaceComponent },
    { path: 'private-office-complex', component: PrivateOfficeComplexComponent },
    { path: 'meeting-room', component: MeetingRoomComponent },
    { path: 'mall', component: MallComponent },
    { path: 'auditorium', component: AuditoriumComponent },
    { path: 'event-hall', component: EventHallComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes,
    { enableTracing: true } );
