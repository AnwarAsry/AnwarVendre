<script setup lang="ts">
import Employee from './Employee.vue'

const props = defineProps(['employees'])
</script>

<template>
  <div class="wrapper">
    <Employee v-for="(emp, i) in props.employees" :employee="emp" :key="i"></Employee>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 750px;
  padding: 16px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media screen and (max-width: 835px) {
    // background-color: aqua;
    // grid-auto-flow: row;
    width: 400px;
    grid-template-columns: 1fr;
  }
}
</style>
