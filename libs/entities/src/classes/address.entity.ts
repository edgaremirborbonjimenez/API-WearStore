import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { User } from "./user.entity";

@Entity({ name: "addresses"})
export class Address extends AbstractEntity{

    @Column({
        name: 'street',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    name:string;

    @ManyToOne(()=> User, (user) => user.id,{
        nullable: false
    })
    @JoinColumn({name:'user_id'})
    user:User;

}