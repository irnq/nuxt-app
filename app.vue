<template>
  <v-app>
    <v-main>
      <NuxtLayout>
        <v-app-bar class="bg-teal-darken-1 w-100">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-app-bar-title class="text-h4">Welcome</v-app-bar-title>
          <nav class="ml-auto w-25 d-flex justify-space-between">
            <Nuxt-link to="/login">Login</Nuxt-link>
            <Nuxt-link to="/">Home</Nuxt-link>
            <Nuxt-link to="/login">Login</Nuxt-link>
            <Nuxt-link to="/main">Main</Nuxt-link>
          </nav>
        </v-app-bar>
        <div class="w-100 h-100 bg-purple-lighten-4">
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
  color: black;
  letter-spacing: 2px;
  display: block;
  padding: 5px 15px;
  transition: all 0.4s;

  &:hover {
    background-color: rgba(255, 243, 73, 0.808);
  }

  &.router-link-active {
    background-color: rgba(255, 243, 73, 0.664);
    font-weight: bold;
    &:hover {
      background-color: rgba(255, 243, 73, 0.808);
    }
  }
}
</style>
