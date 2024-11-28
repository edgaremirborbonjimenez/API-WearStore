import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Payment } from "./payment.entity";

@Entity({name: "user_product_bought"})
export class UserProductBought extends AbstractEntity{

    @Column({
        name: 'amount',
        type: 'int',
        nullable: false
    })
    amount:number;

    @Column({
        name: 'total_price',
        type: 'decimal',
        nullable: false
    })
    totalPrice:number;

    @ManyToOne(()=> User, user => user.products,{nullable: false})
    @JoinColumn({name:'user_id'})
    user:User;

    @ManyToOne(()=> Product, product => product.products,{nullable: false})
    @JoinColumn({name:'product_id'})
    product:Product;

    @ManyToOne(()=> Payment, payment => payment.products)
    @JoinColumn({name: 'payment_id'})
    payment:Payment;
}