import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import { NavBarComponent } from './nav-bar.component';
import {MenubarModule} from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { routing } from 'src/app/app.routes';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
CommonModule,
    MenuModule,
    MenubarModule,
    TabViewModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    RouterModule,
    routing

  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
