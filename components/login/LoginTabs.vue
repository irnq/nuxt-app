<template>
  <v-card elevation="8" max-width="1200px" class="mx-auto">
    <v-tabs v-model="tab" color="primary" background-color="background">
      <v-tab value="signIn"> Sign in </v-tab>
      <v-tab value="signUp"> Sign up </v-tab>
    </v-tabs>
    <v-card-text class="bg-background-lighten">
      <v-window v-model="tab">
        <v-window-item value="signIn"> <login-form /> </v-window-item>
        <v-window-item value="signUp"> <registration-form /> </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import RegistrationForm from './RegistrationForm.vue';
import LoginForm from './LoginForm.vue';

const tab = ref(null);
</script>

<style scoped></style>
