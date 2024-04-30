import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { DatabaseService } from '../database/database.service';
@Module({
  imports: [],
  controllers: [CartsController],
  providers: [CartsService, DatabaseService],
})
export class CartsModule {}
