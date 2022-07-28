<template>
  <v-app-bar class="bg-background w-100">
    <v-app-bar-title class="text-h4 text-primary">Welcome</v-app-bar-title>

    <nav class="ml-auto w-25 d-flex justify-space-between">
      <v-hover v-slot="{ isHovering, props }">
        <Nuxt-link
          class="rounded-pill text-primary px-5 py-2"
          :class="isHovering ? 'text-primary ' : 'text-primary-d'"
          exact-active-class="bg-background text-primary-l"
          to="/login"
          v-bind="props"
          >Login</Nuxt-link
        >
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <Nuxt-link
          class="rounded-pill text-primary px-5 py-2"
          :class="isHovering ? 'text-primary ' : 'text-primary-d'"
          exact-active-class="bg-background text-primary-l"
          to="/"
          v-bind="props"
          >Home</Nuxt-link
        >
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <Nuxt-link
          class="rounded-pill text-primary px-5 py-2"
          :class="isHovering ? 'text-primary' : 'text-primary-d'"
          exact-active-class="bg-background text-primary-l"
          to="/main"
          v-bind="props"
          >Main</Nuxt-link
        >
      </v-hover>
    </nav>
    <v-btn icon @click="toggleTheme" color="primary"
      ><v-icon>{{
        theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
      }}</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>

<style lang="scss">
a {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: all 0.4s;
}
</style>
