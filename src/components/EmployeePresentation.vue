<script setup lang="ts">
import Employee from './Employee.vue'

const props = defineProps(['employees'])
</script>

<template>
  <div class="wrapper">
    <Employee v-for="(emp, i) in props.employees" :employee="emp" :key="i"></Employee>
  </div>
</template>

<style scoped lang="scss"></style>
