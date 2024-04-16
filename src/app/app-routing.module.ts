import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ContactUsComponent } from '../@angular/contact-us/contact-us.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full',
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'registration-page',
    component: RegistrationPageComponent,
  },
  {
    path: 'about-page',
    component: AboutPageComponent,
  },
  // {
  //   path: 'contact-us',
  //   component: ContactUsComponent,
  // },
  {
    path: 'weather-info',
    component: WeatherInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
