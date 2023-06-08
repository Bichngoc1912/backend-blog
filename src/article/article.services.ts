import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async createArticle(): Promise<any> {
    return 'create article';
  }

  async updateArticle(): Promise<string> {
    return 'update article';
  }

  async filterByTag(): Promise<string> {
    return 'filter by tag';
  }

  async filterByCategory(): Promise<string> {
    return 'filter by category';
  }

  async getArticleList(): Promise<any> {
    return this.articleRepository.find();
  }

  async getArticleById(): Promise<string> {
    return 'get article by id';
  }
}
