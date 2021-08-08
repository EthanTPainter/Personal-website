<template>
  <router-view v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
