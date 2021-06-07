import { Component, OnInit } from '@angular/core';
// Configurar o ProductAlertsComponent para recebimento de dados do produto,
import { Input } from '@angular/core';
// Interação de filha para classe mãe, utilizada no evento qdo clica para notificar.
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// Por padrão, os seletores de componentes começam com o prefixo app-, seguido do nome do componente.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // Indica que o valor da propriedade passa do pai do componente
  @Input() product!: Product;

  // Permite emitir um evento qdo a propriedade é alterada.
  @Output() notify = new EventEmitter();

  // Gerados automaticamente
  constructor() {}
  ngOnInit() {}
}
