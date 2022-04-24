import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  constructor() { }

   items: MegaMenuItem[];

  activeItem: any;
    ngOnInit() {
      this.items = [
          // cardapio hamburguers
        {
          label: 'Hamburguers',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),


        },
        {
          label: 'Pizzas',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        },
        {
          label: 'Bebidas',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        },
        {
          label: 'Sobremesas',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        },
        {
          label: 'Bolos',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        },
        {
          label: 'Doces',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        },
        {
          label: 'Salgados',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        },
        {
          label: 'Lanches',
          icon: 'pi pi-fw pi-bars',
          command: (event) => this.menuItem(event),
        }

      ]
      this.activeItem = this.items[0];
      this.produtos = this.hamburguers;

    }
  menuItem(event) {
    if (event.item.label == 'Pizzas') {
      this.produtos = this.pizzas;
    }
    else if(event.item.label == 'Hamburguers'){
      this.produtos = this.hamburguers;
    }
  }

  hamburguers: any = [
    {
      nome: 'X-tudo',
      descricao: 'Hamburguer de carne, queijo, bacon, alface, tomate, cebola e molho de tomate.',
      preco: 'R$ 15,00',
      url: "https://firebasestorage.googleapis.com/v0/b/teste-adde4.appspot.com/o/kzXCTbnv-removebg-preview.png?alt=media&token=505f943f-54dc-414e-9748-5dbf09128162"

    },
    {
      nome: 'Hamburguer de carne',
      descricao: 'Hamburguer de carne, queijo, bacon, alface, tomate, cebola e molho de tomate.',
      preco: 'R$ 25,00',
      url: "https://firebasestorage.googleapis.com/v0/b/teste-adde4.appspot.com/o/kzXCTbnv-removebg-preview.png?alt=media&token=505f943f-54dc-414e-9748-5dbf09128162"
    }
  ]
  produtos: any[];

  pizzas: any = [
    {
      nome: 'Pizza de calabresa',
      descricao: 'Pizza de calabresa, queijo, bacon, alface, tomate, cebola e molho de tomate.',
      preco: 'R$ 55,00',
      url: "https://firebasestorage.googleapis.com/v0/b/teste-adde4.appspot.com/o/pizza2.png?alt=media&token=79bdcf4a-eb11-4e06-ac27-ee4a2981959d"
    },
    {
      nome: 'Pizza de calabresa',
      descricao: 'Pizza de calabresa, queijo, bacon, alface, tomate, cebola e molho de tomate.',
      preco: 'R$ 55,00',
      url: "https://firebasestorage.googleapis.com/v0/b/teste-adde4.appspot.com/o/pizza2.png?alt=media&token=79bdcf4a-eb11-4e06-ac27-ee4a2981959d"
    }
  ];

}
