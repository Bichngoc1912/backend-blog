import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentServices } from './comment.services';

@Controller('/api/comment')
export class CommentController {
  constructor(private readonly commentService: CommentServices) {}

  @Post()
  postComment(@Body() idArticle: number, @Body() content: string) {
    return this.commentService.postComment(idArticle, content);
  }

  @Get()
  getCommentListByIdArticle(@Param() id: number) {
    return this.commentService.commentListById(id);
  }
}
