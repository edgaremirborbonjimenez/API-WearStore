
import { BeforeInsert, BeforeUpdate, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid', { 
    name: "id" 
  })
  id: string;

  @CreateDateColumn({ 
    name: "created_at", 
    type: "timestamp", 
    nullable: false 
  })
  createdAt: Date;

  @UpdateDateColumn({ 
    name: "updated_at", 
    type: "timestamp", 
    nullable: false 
  })
  updatedAt: Date;

  @BeforeInsert()
  private beforeInsert(): void{
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }

  @BeforeUpdate()
  private beforeUpdate(): void{
    this.updatedAt = new Date();
  }
}