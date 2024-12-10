import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

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
    }),
  ],
})
export class AppModule {}
