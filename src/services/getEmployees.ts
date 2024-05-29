import type { IApiResult } from '@/models/IApiResult'
import type { IEmployee } from '@/models/IEmployee'
import { get } from './serviceBase'

export const getEmployees = async (): Promise<IEmployee[]> => {
  const url = 'https://reqres.in/api/users'

  const data = await get<IApiResult>(url)
  return data.data
}
