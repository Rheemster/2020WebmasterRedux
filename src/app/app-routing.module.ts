import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { AboutskylineComponent } from './aboutskyline/aboutskyline.component';
import { AbouttsaComponent } from './abouttsa/abouttsa.component';

import { InventoryComponent } from './inventory/inventory.component';

import { NewsComponent} from './news/news.component';

import {Car1Component} from './car1/car1.component';
import {Car2Component} from './car2/car2.component';
import {Car3Component} from './car3/car3.component';

const routes: Routes = [
  { path: '', component: IndexComponent},

  { path: 'inventory', component: InventoryComponent},

  { path: 'aboutskyline', component: AboutskylineComponent},
  { path: 'abouttsa', component: AbouttsaComponent},

  { path: 'news', component: NewsComponent},

  { path: 'car1', component: Car1Component},
  { path: 'car2', component: Car2Component},
  { path: 'car3', component: Car3Component},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InventoryComponent, IndexComponent, AboutskylineComponent, AbouttsaComponent]