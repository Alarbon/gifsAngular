import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearhBoxComponent } from './searh-box/searh-box.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HomePageComponent,
    SearhBoxComponent,
    CardListComponent
   
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
