import type { IApiResult } from '@/models/IApiResult'
import type { IEmployee } from '@/models/IEmployee'
import { get } from './serviceBase'

export const getEmployees = async (pageNumber: number): Promise<IEmployee[]> => {
  const url = `https://reqres.in/api/users?page=${pageNumber}`

  const data = await get<IApiResult>(url)
  return data.data
}
