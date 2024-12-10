import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { ICreateProduct, IUpdateProduct } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async create(params: ICreateProduct): Promise<{ id: number }> {
    const { name } = params;

    const existingProduct = await this.productModel.findOne({
      where: { name },
    });

    if (existingProduct) {
      throw new ConflictException(`Product with name "${name}" already exists`);
    }

    const product = await this.productModel.create(params);

    return {
      id: product.id,
    };
  }

  async findAll() {
    return this.productModel.findAll();
  }

  async findOne(id: number) {
    const product = await this.productModel.findByPk(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  async update(id: number, updateData: IUpdateProduct): Promise<void> {
    const product = await this.productModel.findByPk(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    await this.productModel.update(updateData, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    const product = await this.productModel.findByPk(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    await this.productModel.destroy({ where: { id } });
  }
}
