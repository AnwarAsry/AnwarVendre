<script setup lang="ts">
import Employee from './Employee.vue'

const props = defineProps(['employees'])
</script>

<template>
  <div class="employeeList">
    <div class="employeeList__wrapper">
      <Employee v-for="(emp, i) in props.employees" :employee="emp" :key="i"></Employee>
    </div>
    <nav class="employeeList__pagination">
      <ul class="pagination">
        <li class="pagination__item active">1</li>
        <li class="pagination__item">1</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.employeeList {
  margin: 0 auto;
  &__wrapper {
    width: 750px;
    padding: 16px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media screen and (max-width: 835px) {
      width: 400px;
      grid-template-columns: 1fr;
    }
  }

  &__pagination {
    width: 200px;
    margin: 32px auto 0;
    display: flex;
    justify-content: center;

    .pagination {
      display: flex;
      list-style: none;

      &__item {
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(161, 161, 161);
        font-size: 1.2rem;

        &.active {
          color: black;
          background-color: rgb(161, 161, 161);
        }
      }
    }
  }
}
</style>
