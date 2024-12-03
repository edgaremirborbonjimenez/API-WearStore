import { Body, Controller, Delete, Get, Post, Param, Patch } from '@nestjs/common';
import { ProductsService } from 'libs/services/src/classes/products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService){

  }

  @Post()
  create(@Body()product: {name: string, price: number, stock: number}) {
    return this.productsService.create(product)
  }

  @Get()
  findAll() {
    return this.productsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.productsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() productUpdate: {name?: string, price?: number, stock? : number}){
    return this.productsService.update(+id,productUpdate)
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.productsService.delete(+id)
  }
}