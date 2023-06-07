import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryServices } from './category.services';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryServices],
})
export class CategoryModule {}
