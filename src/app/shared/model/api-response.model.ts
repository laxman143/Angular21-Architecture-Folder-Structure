export interface ListResponse<T> {
  items: T[];
  total: number;
  skip:number,
  limit:number
}