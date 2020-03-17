import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BottominfoComponent } from './bottominfo/bottominfo.component';
import { InventoryComponent } from './inventory/inventory.component';
import { IndexComponent } from './index/index.component';
import { Car1Component } from './car1/car1.component';
import { Car2Component } from './car2/car2.component';
import { Car3Component } from './car3/car3.component';
import { NewsComponent } from './news/news.component';
import { AbouttsaComponent } from './abouttsa/abouttsa.component';
import { AboutskylineComponent } from './aboutskyline/aboutskyline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BottominfoComponent,
    routingComponents,
    InventoryComponent,
    IndexComponent,
    Car1Component,
    Car2Component,
    Car3Component,
    NewsComponent,
    AbouttsaComponent,
    AboutskylineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }