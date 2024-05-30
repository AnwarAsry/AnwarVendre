<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getEmployees } from './services/getEmployees'
import type { IEmployee } from './models/IEmployee'
import EmployeePresentation from './components/EmployeePresentation.vue'
import type { IApiResult } from './models/IApiResult'

interface IPageInfo {
  currentPage: number
  per_page: number
  total_pages: number
}

const employees = ref<IEmployee[]>([])
const pageInfo = ref<IPageInfo>({
  currentPage: 1,
  per_page: 6,
  total_pages: 2
})

const changePage = async (pageNumber: number) => {
  pageInfo.value.currentPage = pageNumber
  const updatedEmployeeList = await getEmployees(pageInfo.value.currentPage)
  employees.value = updatedEmployeeList
}

onMounted(async () => {
  const apiData = await getEmployees(pageInfo.value.currentPage)
  employees.value = apiData
})
</script>

<template>
  <EmployeePresentation
    :employees="employees"
    @change-page="changePage"
    :total-pages="pageInfo.total_pages"
  ></EmployeePresentation>
</template>

<style scoped></style>
