import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { InvalidloginComponent } from './components/invalidlogin/invalidlogin.component';
import { LoginComponent } from './components/login/login.component';
import { MoredetailsComponent } from './components/moredetails/moredetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesGuard } from './guards/categories.guard';

const routes :Routes  = [
    {path: 'home', component: HomeComponent},
    {path: 'categories', component: CategoriesComponent, canActivate: [CategoriesGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'invalidlogin', component: InvalidloginComponent},
    {path: 'details/:id', component: DetailsComponent, 
       children: [
           {path: 'moredetails/:productid', component: MoredetailsComponent}
       ]
    },
    {path: 'products/:category', component: ProductsComponent},
   
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }