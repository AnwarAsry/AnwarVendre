<script setup lang="ts">
import Employee from './Employee.vue'

const props = defineProps(['employees', 'pageNumbers', 'totalPages'])

const emit = defineEmits<{
  (e: 'changePage', page: number): void
}>()
</script>

<template>
  <div class="employeeList">
    <div class="employeeList__wrapper">
      <Employee v-for="emp in props.employees" :employee="emp" :key="emp.id"></Employee>
    </div>
    <nav class="employeeList__pagination">
      <ul class="pagination">
        <li
          class="noselect pagination__item active"
          @click="emit('changePage', pageNumber)"
          v-for="pageNumber in props.totalPages"
        >
          {{ pageNumber }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.employeeList {
  width: 100%;

  &__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media screen and (max-width: 700px) {
      width: fit-content;
      justify-items: center;
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

        &.noselect {
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        }
      }
    }
  }
}
</style>
