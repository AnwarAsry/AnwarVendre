<script setup lang="ts">
const props = defineProps(['employee'])
</script>

<template>
  <div class="card">
    <img class="card__avatar" :src="props.employee.avatar" alt="yes" />
    <div class="card__info">
      <h1 class="card__info__name">
        <span>{{ `${props.employee.first_name} ${props.employee.last_name}` }}</span>
      </h1>
      <a class="card__info__email">{{ props.employee.email }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 330px;
  display: flex;
  gap: 16px;

  &__avatar {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__name {
      letter-spacing: -1px;
      font-size: 1.8rem;
    }

    &__email {
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
}
</style>
