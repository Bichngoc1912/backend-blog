import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CategoryServices } from './category.services';
import { CategoryListRequest } from './category.types';

@Controller('/api/category')
export class CategoryController {
  constructor(private readonly categoryServices: CategoryServices) {}

  @Get()
  categoryList(@Query() param: CategoryListRequest) {
    const { page, limit } = param;
    return this.categoryServices.categoryList({ page: page, limit: limit });
  }

  @Post(':id')
  removeCategory(@Body() id: number) {
    return this.categoryServices.removeCategory(id);
  }

  @Post('/add')
  addCategory() {
    return this.categoryServices.addCategory();
  }
}
