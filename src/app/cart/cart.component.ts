import { Component, OnInit } from '@angular/core';

// Importe cartService
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Armazenar os produtos no carrinho
  items = this.cartService.getItems();

  // Injeção do serviço no constructor
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
