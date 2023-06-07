import { Module } from '@nestjs/common';
import { CategoryController } from './comment.controller';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CommentModule],
})
export class CommentModule {}
