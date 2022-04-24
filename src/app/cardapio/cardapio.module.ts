import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MegaMenuModule} from 'primeng/megamenu';
import { CardapioComponent } from './cardapio.component';
import { CardModule } from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    CardapioComponent
  ],
  imports: [
CommonModule,
    MegaMenuModule,
    CardModule,
    TabMenuModule,
    ButtonModule

  ],
  exports: [
    CardapioComponent
  ]
})
export class CardapioModule { }
