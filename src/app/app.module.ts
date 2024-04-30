import { Module } from '@nestjs/common';
import { CartsController } from '../carts/carts.controller';
import { CartsModule } from '../carts/carts.module';
import { CartsService } from '../carts/carts.service';
@Module({
  imports: [CartsModule],
  controllers: [CartsController],
  providers: [CartsService],
})
export class AppModule {}
