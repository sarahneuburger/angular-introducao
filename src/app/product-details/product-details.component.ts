import { Component, OnInit } from '@angular/core';
// Importação do router para exibir informações dos products
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
// Importando serviço cart
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // Propriedade product
  product: Product | undefined;

  // Gerados automaticamente
  // Injeção do route como parâmetro do constructor
  // ActivatedRoute é específico para cada componente
  // Injetando o serviço no constructor
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    // Primeiro pega o id através da rota vigente
    // snapshot - contém infos da rota ativa naquele momento
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encontra o produto correspondente
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // Implementando método de adicionar ao carrinho do serviço
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho.');
  }
}
