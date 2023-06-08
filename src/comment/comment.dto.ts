import { BaseDto } from 'src/shared/base.dto';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CommentDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  userName: string;

  @IsNotEmpty()
  @Expose()
  content: string;

  @IsNotEmpty()
  @Expose()
  @IsNumber()
  page: number;
}
