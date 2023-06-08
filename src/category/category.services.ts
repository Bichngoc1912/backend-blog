import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryServices {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async categoryList(): Promise<string> {
    return 'category list';
  }

  async addCategory(): Promise<string> {
    return 'add category';
  }

  async removeCategory(id: number): Promise<string> {
    return 'remove category';
  }
}
