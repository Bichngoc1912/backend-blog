import { Expose } from 'class-transformer';
import { plainToInstance } from 'class-transformer';
import dayjs from 'dayjs';
export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  static plainToInstance<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToInstance(this, obj, { excludeExtraneousValues: true });
  }
}
