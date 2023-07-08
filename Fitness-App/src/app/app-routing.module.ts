import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalorieCalculatorComponent } from './calorie-calculator/calorie-calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'calculator', component: CalorieCalculatorComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'contacts', component: ContactUsComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'profile', component: MyProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }