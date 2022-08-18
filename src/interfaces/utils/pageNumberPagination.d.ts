export interface IPaginated {
  data_count: number;
  total_pages: number;
  page: number | null;
  per_page: number | null;
  previous: string | null;
  next: string | null;
  results: Array<any>;
}
