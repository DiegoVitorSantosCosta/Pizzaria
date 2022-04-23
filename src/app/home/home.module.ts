import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
CommonModule,
    CarouselModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
