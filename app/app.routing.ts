/**
 * Created by sajmera on 12/14/16.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './component/pages/home.component';
import {AboutComponent} from './component/pages/about.component';


const appRoutes:Routes =[
    {
        path:'',
        component:HomeComponent,

    },
    {
        path:'about',
        component:AboutComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes
);