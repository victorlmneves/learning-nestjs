import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { ProductsController } from './products/products.controller'
import { ProductsService } from './products/products.service'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [ProductsService]
})
export class AppModule {}
