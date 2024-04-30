import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { EditCartDto } from './dto/editCart.dto';
import { AddCartDto } from './dto/addCart.dto';

@Injectable()
export class CartsService {
  constructor(private readonly dataBase: DatabaseService) {}
  async getCarts() {
    try {
      return this.dataBase.cart.findMany();
    } catch (err) {
      throw new HttpException(
        'Не удалось отобразить карты',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async addCart(dto: AddCartDto) {
    try {
      return this.dataBase.cart.create({
        data: {
          name: dto.name,
          presents: 0,
          date: new Date(),
        },
      });
    } catch (err) {
      throw new HttpException(
        'Не удалось создать карту',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async editCart(dto: EditCartDto) {
    try {
      return await this.dataBase.cart.update({
        where: {
          id: dto.id,
        },
        data: {
          name: dto.name,
          date: dto.date,
          presents: dto.presents,
        },
      });
    } catch (err) {
      throw new HttpException(
        'Не удалось отредактировать карту',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async deleteCart(id: string) {
    try {
      return await this.dataBase.cart.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new HttpException(
        'Не удалось удалить карту',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
