import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { EditCartDto } from './dto/editCart.dto';
import { AddCartDto } from './dto/addCart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async getCarts() {
    return this.cartsService.getCarts();
  }
  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(HttpStatus.OK)
  async addCart(@Body() dto: AddCartDto) {
    return this.cartsService.addCart(dto);
  }
  @UsePipes(new ValidationPipe())
  @Patch()
  @HttpCode(HttpStatus.OK)
  async editCart(@Body() dto: EditCartDto) {
    return this.cartsService.editCart(dto);
  }
  @UsePipes(new ValidationPipe())
  @Delete()
  @HttpCode(HttpStatus.OK)
  async deleteCart(@Body('id') id: string) {
    return this.cartsService.deleteCart(id);
  }
}
