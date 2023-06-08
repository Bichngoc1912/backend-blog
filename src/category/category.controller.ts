import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryServices } from './category.services';

@Controller('/api/category')
export class CategoryController {
  constructor(private readonly categoryServices: CategoryServices) {}

  @Get()
  categoryList() {
    return this.categoryServices.categoryList();
  }

  @Post()
  removeCategory(@Body() id: number) {
    return this.categoryServices.removeCategory(id);
  }

  @Post()
  addCategory() {
    return this.categoryServices.addCategory();
  }
}
