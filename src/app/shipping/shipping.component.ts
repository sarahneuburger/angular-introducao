import { Component, OnInit } from '@angular/core';

// Adequar para o cartService obter dados do shipping
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  // Modificação do shippingComponent para recuperar dados de envio via HTTP do shipping.jsonarquivo.

  // Injetando o serviço do carrinho no constructor
  constructor(private cartService: CartService) {}

  // Método ligado a leitura do json via API
  shippingCosts = this.cartService.getShippingPrices();

  ngOnInit() {}
}
