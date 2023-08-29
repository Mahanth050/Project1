import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'', redirectTo:'/register',pathMatch:'full'},
  {path:'dashbord',component:DashbordComponent},
  {path:'register',component:RegisterComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
