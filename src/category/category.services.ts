import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import { CategoryListRequest, CategoryListResponse } from './category.types';
import { convertCategoryListPayload } from './category.utils';

@Injectable()
export class CategoryServices {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async categoryList(
    param: CategoryListRequest,
  ): Promise<CategoryListResponse> {
    try {
      const { page, limit } = param;

      const categoryList = await this.categoryRepository.findAndCount({
        skip: page ?? 0,
        take: limit ?? 20,
      });

      const result: CategoryListResponse = {
        code: 0,
        message: 'Success!',
        payload: convertCategoryListPayload(categoryList),
      };

      return result;
    } catch (e) {
      return {
        code: 500,
        message: 'Internal server!',
      };
    }
  }

  async addCategory(): Promise<string> {
    return 'add category';
  }

  async removeCategory(id: number): Promise<string> {
    return 'remove category';
  }
}
