<template>
  <v-form v-model="valid" class="d-sm-flex" ref="form" @submit="formSubmit">
    <v-container class="w-sm-50">
      <v-text-field
        v-model.trim="login"
        label="Enter login"
        :rules="[(v) => !!v || 'Enter login']"
        required
        color="primary-l"
        @keyup.enter="formSubmit"
      ></v-text-field>
      <password-field
        :rules="[(v: string) => !!v || 'Enter login']"
        label="Password"
        required
        color="primary-l"
        v-model="password"
        @keyup.enter="formSubmit"
      />
    </v-container>
    <v-container class="w-sm-50 d-flex justify-center">
      <v-btn color="primary-d align-self-end" @click="formSubmit">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import PasswordField from './PasswordField';
import { Ref } from 'vue';
import { VForm } from 'vuetify/components';

const valid: Ref<boolean> = ref(true);
const login: Ref<string> = ref('');
const password: Ref<string> = ref('');
const form: Ref<VForm | null> = ref(null);

const formSubmit = () => {
  form.value?.validate();
  console.log(valid.value);
};
</script>

<style scoped></style>
