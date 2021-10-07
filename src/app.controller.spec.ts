import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsController } from './products/products.controller'
import { ProductsService } from './products/products.service'
import { ProductsModule } from './products/products.module'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ProductsModule],
      controllers: [AppController, ProductsController],
      providers: [AppService, ProductsService]
    }).compile()
  })

  describe('getProducts', () => {
    it('should return []', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getProducts()).toStrictEqual([])
    })
  })
})
