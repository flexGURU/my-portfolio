import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "#home", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "experience", component: ExperienceComponent},
    {path: "specialities", component: SpecialitiesComponent},
    {path: "home", component: HomeComponent},
    {path: '', redirectTo: "home",pathMatch: 'full'}




];
