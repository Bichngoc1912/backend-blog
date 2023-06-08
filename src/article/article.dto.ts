import { BaseDto } from 'src/shared/base.dto';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsBoolean, IsArray, IsNumber } from 'class-validator';

export class ArticleDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  title: string;

  @IsNotEmpty()
  @Expose()
  description: string;

  @IsNotEmpty()
  @Expose()
  content: string;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  isShow: boolean;

  @IsNotEmpty()
  @IsArray()
  @Expose()
  image: string[];

  @IsNotEmpty()
  @IsArray()
  @Expose()
  tags_id: string[];

  @Expose()
  comment: any;

  @Expose()
  @IsNumber()
  page: number;
}
