import {Routes,RouterModule} from '@angular/router';
import {ProductComponent} from './products/product-list.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductAddCompoment} from './products/product-add.component';

const routes:Routes = [

    {
        path:'welcome',
        component:WelcomeComponent
    },
    {
        path:'products',
        component:ProductComponent
    },
    {
        path:'products/:id',
        component:ProductDetailComponent 
    },
    {
        path:'addproduct',
        component:ProductAddCompoment
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];


export const routing = RouterModule.forRoot(routes);



