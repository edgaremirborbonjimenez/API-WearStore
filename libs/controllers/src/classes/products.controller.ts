import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  create(@Body()product: {}) {
    return product
  }

  @Get()
  findAll() {
    return []
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return { id }
  }
}