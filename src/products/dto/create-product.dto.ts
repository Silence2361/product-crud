import { IsNotEmpty, IsPositive, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Smartphone',
  })
  @IsNotEmpty({ message: 'Name is required' })
  @Length(1, 255, { message: 'Name must be between 1 and 255 characters' })
  name: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 699.99,
  })
  @IsPositive({ message: 'Price must be greater than zero' })
  price: number;

  @ApiProperty({
    description: 'Description of the product',
    example: 'A high-end smartphone.',
  })
  @Length(0, 255, { message: 'Description must not exceed 255 characters' })
  description: string;

  @ApiProperty({
    description: 'Category of the product',
    example: 'Electronics',
  })
  @IsNotEmpty({ message: 'Category is required' })
  @Length(1, 50, { message: 'Category must not exceed 50 characters' })
  category: string;
}
