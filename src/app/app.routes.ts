import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [

    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'product/:id',
        component:ProductComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'logout',
        component:LogoutComponent
    }

];
