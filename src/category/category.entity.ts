import { ArticleDto } from 'src/article/article.dto';
import { ArticleEntity } from 'src/article/article.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'category',
})
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  page: number;

  @OneToMany(() => ArticleEntity, (article: ArticleEntity) => article)
  articleList: ArticleDto[];
}
