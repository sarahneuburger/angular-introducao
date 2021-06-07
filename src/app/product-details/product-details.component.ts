import { Component, OnInit } from '@angular/core';
// Importação do router para exibir informações dos products
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

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
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Primeiro pega o id através da rota vigente
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encontra o produto correspondente
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
