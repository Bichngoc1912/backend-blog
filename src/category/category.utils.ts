import { CategoryEntity } from './category.entity';
import { CategoryListPayload } from './category.types';

export function convertCategoryListPayload(
  payload: [CategoryEntity[], number],
): CategoryListPayload {
  return {
    list: payload[0],
    total: payload[1],
  };
}
