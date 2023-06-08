import { CategoryDto } from 'src/category/category.dto';
import { CategoryEntity } from 'src/category/category.entity';
import { CommentDto } from 'src/comment/comment.dto';
import { CommentEntity } from 'src/comment/comment.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'article',
})
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  isShow: boolean;

  @Column('text', { array: true })
  image: string[];

  @Column('text', { array: true })
  tags: string[];

  @OneToOne(() => CategoryEntity, (category: CategoryEntity) => category.id)
  category: CategoryDto[];

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.id)
  comment: CommentDto[];

  @Column()
  page: number;
}
