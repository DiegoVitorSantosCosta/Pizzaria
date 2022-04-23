import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cardapio', component: CardapioComponent },

]

export const routing = RouterModule.forRoot(appRoutes)
