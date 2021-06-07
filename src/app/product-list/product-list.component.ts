import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  // Função para apresentar uma mensagem, caso clique no botão "share"
  share() {
    window.alert('The product has been shared!');
  }

  // Função para apresentar uma mensagem quando clicado no botão de notificação
  onNotify() {
    window.alert(
      'Você será notificado quando este produto estiver disponível.'
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
