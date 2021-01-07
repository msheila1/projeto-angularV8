import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
//import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  //  AdminLayoutsComponent
  ],
  imports: [
   // BrowserModule,
    AppRoutingModule,
   // ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
