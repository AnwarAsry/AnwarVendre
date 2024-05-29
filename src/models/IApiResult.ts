import type { IEmployee } from './IEmployee'

export interface IApiResult {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: IEmployee[]
}
