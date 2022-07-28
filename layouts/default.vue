<template>
  <v-app class="h-100 bg-background">
    <Navbar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/navbar.vue';
</script>
