import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'comment',
})
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  content: string;

  @Column()
  page: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
