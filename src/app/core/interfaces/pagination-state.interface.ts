export interface PaginationState<T> {
  info: {
    page: number;
    results: number;
  };
  results: T;
}

export interface PaginationParams {
  page: number;
  results: number;
  seed: string;
  version: string;
}
