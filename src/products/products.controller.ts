import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './products.model';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Create a new product',
    type: Product,
  })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<{ id: number }> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Return all products',
    type: [Product],
  })
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Return a product by ID',
    type: Product,
  })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update a product', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<void> {
    await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete a product', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.productsService.remove(id);
  }
}
