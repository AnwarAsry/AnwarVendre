import type { IApiResult } from '@/models/IApiResult'
import type { IEmployee } from '@/models/IEmployee'
import { get } from './serviceBase'

export const getEmployees = async (searchText: string): Promise<IEmployee[]> => {
  const url = 'http://omdbapi.com?apikey=416ed51a&s=' + searchText

  const data = await get<IApiResult>(url)
  return data.data
}
