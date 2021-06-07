import { Injectable } from '@angular/core';
import { Product, products } from './products';

// No Angular, um serviço é uma instância de uma classe que você pode disponibilizar para qualquer parte do seu aplicativo usando o sistema de injeção de dependência do Angular.

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Array para armazenar os itens no carrinho
  items: Product[] = [];

  // Adicionar itens no carrinho | array
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Pega os itens já adicionados ao carrinho
  getItems() {
    return this.items;
  }

  // Limpar os dados constantes no carrinho
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
