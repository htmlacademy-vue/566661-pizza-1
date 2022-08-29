<template>
  <div class="user">
    <picture>
      <source
        type="image/webp"
        srcset="
          @/assets/img/users/user5@2x.webp 1x,
          @/assets/img/users/user5@4x.webp 2x
        "
      />
      <img
        src="@/assets/img/users/user5@2x.jpg"
        srcset="@/assets/img/users/user5@4x.jpg"
        alt="Василий Ложкин"
        width="72"
        height="72"
      />
    </picture>
    <div :class="['user__wrapper']">
      <div class="user__name">
        <span>{{ user.name }}</span>
      </div>
      <p class="user__phone">
        Контактный телефон: <span>{{ user.phone }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProfile",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.user {
  &__wrapper {
    text-align: left;
    margin-left: 1em;
  }
  &__name {
    margin-bottom: 0.5em;
    margin-left: revert;
  }
}
</style>
