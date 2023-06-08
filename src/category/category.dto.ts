import { BaseDto } from 'src/shared/base.dto';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CategoryDto extends BaseDto {
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  id: number;

  @IsNotEmpty()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  page: number;
}
