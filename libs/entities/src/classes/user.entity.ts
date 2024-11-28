import { Column, Entity, OneToMany } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Address } from "./address.entity";
import { UserProductBought } from "./user-product-bought.entity";
import { Payment } from "./payment.entity";

@Entity({ name: "users"})
export class User extends AbstractEntity{

    @Column({
        name: 'name',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name:string;

    @Column({
        name: 'user_name',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    userName:string;

    @Column({
        name: 'password',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    password:string;

    @Column({
        name: 'email',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    email:string;

    @Column({
        name: 'cellphone',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    cellphone:string;

    @OneToMany(()=> Address, (address) => address.user, {
        cascade: ["remove"]
    })
    addresses:Address[];

    @OneToMany(()=> UserProductBought, (product) => product.user, {
        cascade: ["insert","remove"]
    })
    products:UserProductBought[];

    @OneToMany(()=>Payment, (payment)=> payment.user)
    payments:Payment[];

}