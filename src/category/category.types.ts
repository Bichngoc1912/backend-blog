import { ApiResponse } from 'src/common/http.types';

export interface CategoryListRequest {
  page?: number;
  limit?: number;
}

export interface CategoryListPayload {
  list: {
    id: number;
    name: string;
    page: number;
  }[];
  total: number;
}

export type CategoryListResponse = ApiResponse<CategoryListPayload>;
