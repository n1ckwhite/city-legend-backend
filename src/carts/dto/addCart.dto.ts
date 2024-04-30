import { Length } from 'class-validator';

export class AddCartDto {
  @Length(2, 40, {
    message: 'Введите корректное название!',
  })
  name: string;
}
