import { Product } from '@app/entities/classes/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class ProductsService {
    
    constructor(@InjectRepository(Product) private readonly productsRepository: Repository<Product>){

    }

    async findAll(): Promise<Product[]>{
        return await this.productsRepository.find()
    }
    
    async findOne(id: string): Promise<Product>{
        const product = await this.productsRepository.findOne({where:{id}})

        return product
    }
    
    async create(products){
        const product = this.productsRepository.create({products})
        return this.productsRepository.save(product);
    }

    async update (id:string,{name, price, stock}){
        const product: Product = await this.productsRepository.preload({
            id,
            name,
            price,
            stock

        });
        if(!product){
            throw new NotFoundException('Resource not found')
        }
        return product;
    }
    
    async delete (id:string): Promise<void> {
        const product: Product = await this.productsRepository.findOne({where:{id}})
        
        if(!product){
            throw new NotFoundException('Resource not found')
        }
        
        this.productsRepository.remove(product);
    }
}