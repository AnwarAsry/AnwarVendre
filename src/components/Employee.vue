<script setup lang="ts">
const props = defineProps(['employee'])
</script>

<template>
  <div class="card">
    <img class="card__avatar" :src="props.employee.avatar" alt="yes" />
    <div class="card__info">
      <p class="card__info__name">
        <span>{{ `${props.employee.first_name} ${props.employee.last_name}` }}</span>
      </p>
      <a class="card__info__email">{{ props.employee.email }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;

  &__avatar {
    border-radius: 100%;
  }
  &__info {
    &__name {
      font-size: 2rem;
    }
    &__email {
      font-size: 1.1rem;
    }
  }
}
</style>
