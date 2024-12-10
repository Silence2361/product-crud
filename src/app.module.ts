import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: '12345678',
      database: 'products_db',
      autoLoadModels: true,
      synchronize: true,
      sync: { force: true },
    }),
    ProductsModule,
  ],
})
export class AppModule {}
