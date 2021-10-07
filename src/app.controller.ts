import { Controller, Get } from '@nestjs/common'

import { ProductsService } from './products/products.service'

@Controller()
export class AppController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): any[] {
    return this.productsService.getProducts()
  }
}
