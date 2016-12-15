/**
 * Created by sajmera on 12/14/16.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {AboutComponent} from './component/pages/about.component';
import {HomeComponent} from "./component/pages/home.component";
import {routing} from "./app.routing";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent,
        NavbarComponent,
        JumbotronComponent,
        AboutComponent,
        HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}