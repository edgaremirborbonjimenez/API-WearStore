import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './classes/address.entity';
import { Payment } from './classes/payment.entity';
import { Product } from './classes/product.entity';
import { UserProductBought } from './classes/user-product-bought.entity';
import { User } from './classes/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Address,
    Payment,
    Product,
    UserProductBought,
    User
  ])],
  providers: [EntitiesService],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
