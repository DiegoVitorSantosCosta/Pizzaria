import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


]

export const routing = RouterModule.forRoot(appRoutes)
