export interface MetaDataPageAPI {
  current_page: number;
  first_page: number;
  first_page_url: string;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  per_page: number;
  previous_page_url: string | null;
  total: number;
}

/**
 * @description interface que define o formato de uma página de dados da API.
 * @template Data Tipo do dado da página.
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
