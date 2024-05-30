<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getEmployees } from './services/getEmployees'
import type { IEmployee } from './models/IEmployee'
import EmployeePresentation from './components/EmployeePresentation.vue'

const employees = ref<IEmployee[]>([])
const data = {
  itemsPerPage: 6,
  currentPage: 1
}

onMounted(async () => {
  const apiData = await getEmployees()
  employees.value = apiData
})
</script>

<template>
  <EmployeePresentation :employees="employees"></EmployeePresentation>
</template>

<style scoped></style>
