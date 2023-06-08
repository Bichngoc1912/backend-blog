import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_CONFIGS } from './configs/app';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.services';
import { ArticleEntity } from './article/article.entity';
import { ArticleModule } from './article/article.module';
import { CategoryEntity } from './category/category.entity';
import { CommentEntity } from './comment/comment.entity';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: APP_CONFIGS.NEST_APP_DB_USERNAME,
      password: APP_CONFIGS.NEST_APP_DB_PASSWORD,
      database: APP_CONFIGS.NEST_APP_DB_NAME,
      entities: [ArticleEntity, CategoryEntity, CommentEntity],
      synchronize: true,
    }),
    ArticleModule,
    CategoryModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
