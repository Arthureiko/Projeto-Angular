import { Product } from "./../product.model";
import { ProductService } from "./../product.service";

import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-products-create",
  templateUrl: "./products-create.component.html",
  styleUrls: ["./products-create.component.css"],
})
export class ProductsCreateComponent {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMenssage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
