import { Column, Entity, OneToMany } from "typeorm";
import { AbstractEntity } from "./abstract.entity"
import { UserProductBought } from "./user-product-bought.entity";

@Entity({ name: "products"})
export class Product extends AbstractEntity{
    
    @Column({
        name: 'name',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name:string;

    @Column({
        name: 'price',
        type: 'decimal',
        nullable: false
    })
    price:number;

    @Column({
        name: 'stock',
        type: 'int',
        nullable: false
    })
    stock:number;

    @OneToMany(()=> UserProductBought, (product) => product.product, {
        cascade: ["remove"]
    })
    products:UserProductBought[];

    

}