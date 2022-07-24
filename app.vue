<template>
  <v-app>
    <v-main>
      <NuxtLayout>
        <v-app-bar class="bg-background-darken w-100">
          <v-app-bar-title class="text-h4 text-primary">Welcome</v-app-bar-title>
          <nav class="ml-auto w-25 d-flex justify-space-between">
            <v-hover v-slot="{ isHovering, props }">
              <Nuxt-link
                class="rounded-pill text-primary px-5 py-2"
                :class="isHovering ? 'bg-background' : 'text-secondary'"
                exact-active-class="bg-background text-teal"
                to="/login"
                v-bind="props"
                >Login</Nuxt-link
              >
            </v-hover>
            <v-hover v-slot="{ isHovering, props }">
              <Nuxt-link
                class="rounded-pill text-primary px-5 py-2"
                :class="isHovering ? 'bg-background' : 'text-secondary'"
                exact-active-class="bg-background text-teal"
                to="/"
                v-bind="props"
                >Home</Nuxt-link
              >
            </v-hover>
            <v-hover v-slot="{ isHovering, props }">
              <Nuxt-link
                class="rounded-pill text-primary px-5 py-2"
                :class="isHovering ? 'bg-background' : 'text-secondary'"
                exact-active-class="bg-background text-teal"
                to="/main"
                v-bind="props"
                >Main</Nuxt-link
              >
            </v-hover>
          </nav>
        </v-app-bar>
        <div class="w-100 h-100 bg-background">
          <NuxtPage />
        </div>
      </NuxtLayout>
    </v-main>
  </v-app>
</template>

<style lang="scss">
a {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: all 0.4s;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
