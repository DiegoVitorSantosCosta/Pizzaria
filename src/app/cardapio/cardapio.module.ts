import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MegaMenuModule} from 'primeng/megamenu';
import { CardapioComponent } from './cardapio.component';
import { CardModule } from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';




@NgModule({
  declarations: [
    CardapioComponent
  ],
  imports: [
  CommonModule,
    MegaMenuModule,
    CardModule,
    TabMenuModule

  ],
  exports: [
    CardapioComponent
  ]
})
export class CardapioModule { }
