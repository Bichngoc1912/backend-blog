import { Controller, Get, Post, Put } from '@nestjs/common';
import { ArticleService } from './article.services';

@Controller('/api/article')
export class ArticleController {
  constructor(private readonly articleServices: ArticleService) {}

  @Post('/create')
  createArticle(): Promise<string> {
    return this.articleServices.createArticle();
  }

  @Put('/update/:id')
  updateArticle(): Promise<string> {
    return this.articleServices.updateArticle();
  }

  @Get(':id')
  getArticleById(): Promise<string> {
    return this.articleServices.getArticleById();
  }

  @Get()
  getArticleList(): Promise<string> {
    return this.articleServices.getArticleList();
  }
}
