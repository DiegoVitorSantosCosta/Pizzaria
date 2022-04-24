import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  menus: any[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/home']
    },
    {
      label: 'Cardapio',
      icon: 'pi pi-fw pi-bars',
      routerLink: ['/cardapio']
    },
    {
      label: 'Promoções',
      icon: 'pi pi-fw pi-star',
      routerLink: ['/promocoes']

    },
    {
      label: 'Atendimento',
      icon: 'pi pi-fw pi-phone',
      routerLink: ['/atendimento']
    },
    {
      label: "Quem somos",
      icon: "pi pi-fw pi-users",
      routerLink: ['/quem-somos']
    }
  ];
  rota(rota: any) {
    this.router.navigate(rota)
  }

  static  height: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit() {

    var lastScrollTop = 0;
    var navbar: any = document.querySelector('nav');
    var navbarHeight = navbar.offsetHeight + 5;
    NavBarComponent.height.emit(navbarHeight);


var lastScrollTop = 0;

window.addEventListener('scroll', function (e:any) {

    // mesma posição
    // if (e.scrollY === lastScrollTop) return;

    this.scrollY < lastScrollTop ? navbar.style.opacity =1 :  navbar.style.opacity =0;

    lastScrollTop = this.scrollY;

  }, true)

    }

}
