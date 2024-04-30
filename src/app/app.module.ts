import { Module } from '@nestjs/common';
import { CartsController } from '../carts/carts.controller';
import { CartsModule } from '../carts/carts.module';
import { CartsService } from '../carts/carts.service';
import { DatabaseService } from '../database/database.service';
@Module({
  imports: [CartsModule],
  controllers: [CartsController],
  providers: [CartsService, DatabaseService],
})
export class AppModule {}
