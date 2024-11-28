import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from './config/typeorm.config';
import { EntitiesModule } from '@app/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmOptions),
    EntitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
