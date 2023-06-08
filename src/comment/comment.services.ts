import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentServices {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  async commentListById(idArticle: number): Promise<string> {
    return 'comment list by id';
  }

  async postComment(idArticle: number, content: string): Promise<string> {
    return 'post comment';
  }
}
