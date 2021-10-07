import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common'

import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
  ) {
    const generatedId = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice)

    return { id: generatedId }
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts()
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getProduct(prodId)
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDescription, prodPrice)

    return `Product ${prodId} was updated`
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId)

    return `Product ${prodId} was deleted`
  }
}
