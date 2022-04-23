import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './core/nav-bar/nav-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { routing } from './app.routes';
import { FooterModule } from './core/footer/footer.module';
import { CardapioModule } from './cardapio/cardapio.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavBarModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    routing,
    FooterModule,
    CardapioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
