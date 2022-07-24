<script setup lang="ts">
import Navbar from '~/components/layout/navbar.vue';
</script>

<template>
  <v-app>
    <v-main class="h-100 bg-background">
      <Navbar />
      <slot />
    </v-main>
  </v-app>
</template>
