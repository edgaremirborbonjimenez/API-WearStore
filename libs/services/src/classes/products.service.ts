import { Product } from '@app/entities/classes/product.entity';
import { Injectable } from '@nestjs/common';
import { retry } from 'rxjs';


@Injectable()
export class ProductsService {
    private Products = []

    findAll(){
        return this.Products
    }
    
    findOne(id: number){
        const product = this.Products.find(product => product.id === id)

        return product
    }
    
    create(product: {name: string, price: number, stock: number}){
        const productsByHighestId = [...this.Products].sort((a,b)=> b.id - a.id)
        const newProduct = {
            id: productsByHighestId[0].id + 1,
            ...product
        }
        this.Products.push(newProduct)
        return newProduct
    }

    update (id:number,updatedProduct:{name?: string, price?: number, stock? : number}){
        this.Products = this.Products.map(product => {
            if(product.id === id){
                return { ...product, ...updatedProduct }
            }
            return product
        })

        return this.findOne(id)
    }
    
    delete (id:number) {
        const removedProduct = this.findOne(id)

        this.Products = this.Products.filter(product => product.id !== id)

        return removedProduct
    }
}