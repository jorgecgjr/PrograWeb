<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <header v-if="route.name === 'home'">
    <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

