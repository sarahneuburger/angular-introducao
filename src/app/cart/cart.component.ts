import { Component, OnInit } from '@angular/core';

// Import cartService
import { CartService } from '../cart.service';

// Import FormBuilder - para formulário de interação com o usuário
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Armazenar os produtos no carrinho
  items = this.cartService.getItems();

  // Método para definir a  checkoutForm propriedade como um modelo de formulário contendo os campos namee address.
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  // Injeção do serviço de carrinho no constructor
  // Injeção do formulário no constructor. Este serviço faz parte do ReactiveFormsModule.
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  // Método para processar o formulário. Este método permite que os usuários enviem seus nomes e endereços. Além disso, esse método usa o clearCart()método de CartService para redefinir o formulário e limpar o carrinho.
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
