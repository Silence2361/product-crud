import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
})
export class Product extends Model<Product> {
  @ApiProperty({ example: 1, description: 'Unique identifier of the product' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Smartphone', description: 'Name of the product' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @ApiProperty({ example: 699.99, description: 'Price of the product' })
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @ApiProperty({
    example: 'A high-end smartphone.',
    description: 'Description of the product',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @ApiProperty({
    example: 'Electronics',
    description: 'Category of the product',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;
}
