import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { User } from "./user.entity";
import { UserProductBought } from "./user-product-bought.entity";

@Entity({name:'payments'})
export class Payment extends AbstractEntity{

    @Column({
        name: 'total',
        type: 'decimal',
        nullable: false
    })
    totalPrice:number;

    @ManyToOne(()=> User, (user)=> user.payments)
    @JoinColumn({name:'user_id'})
    user:User;

    @OneToMany(()=> UserProductBought, (product)=> product.payment)
    products:UserProductBought[];

}