<template>
  <v-form v-model="valid" class="d-sm-flex" ref="form">
    <v-container class="w-sm-50">
      <v-text-field
        v-model.trim="login"
        :rules="[Rule.required, Rule.minNameLength, Rule.maxLength]"
        label="Enter login"
        required
        :counter="maxNameLength"
        color="primary-l"
      ></v-text-field>
      <v-text-field
        v-model.trim="name"
        :rules="[Rule.required, Rule.minNameLength, Rule.maxLength]"
        label="Enter name"
        required
        :counter="maxNameLength"
        color="primary-l"
      ></v-text-field>
      <v-text-field
        v-model.trim="email"
        :rules="[Rule.required, Rule.email]"
        label="Enter email"
        required
        color="primary-l"
      >
      </v-text-field>
      <password-field
        :rules="[Rule.required, Rule.minPasswordLength, Rule.password]"
        label="Enter password"
        required
        color="primary-l"
        v-model="password"
      />
      <password-field
        :rules="[Rule.passwordTest]"
        label="Repeat password"
        required
        color="primary-l"
        v-model="passwordTest"
      />
    </v-container>
    <v-container class="w-sm-50 d-flex justify-center">
      <v-btn color="primary-d align-self-end" @click="formSubmit">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { VForm } from 'vuetify/components';
import PasswordField from './PasswordField.vue';

const maxNameLength = 20;
const minPasswordLength = 8;
const minNameLength = 2;

const valid: Ref<boolean> = ref(true);
const login: Ref<string> = ref('');
const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const passwordTest: Ref<string> = ref('');
const form: Ref<VForm | null> = ref(null);

const Rule = {
  passwordTest: (value: string): true | string =>
    value === password.value || 'The passwords must match',
  maxLength: (value: string): true | string =>
    value.length <= maxNameLength || `Max length ${maxNameLength} characters`,
  required: (value: string): true | string => !!value || `Required value`,
  minPasswordLength: (value: string): true | string =>
    value.length >= minPasswordLength || `Min length ${minPasswordLength} characters`,
  minNameLength: (value: string): true | string =>
    value.length >= minNameLength || `Min length ${minNameLength} characters`,
  email: (value: string): true | string => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
  password: (value: string): true | string =>
    (/\d/gi.test(value) &&
      /[\!\@\#\$\%\^\&\*\,\.\<\>\[\]\{\}]/gi.test(value) &&
      /[a-z]/gi.test(value)) ||
    `Should contain letter, digit, and special symbol`,
};

const formSubmit = () => {
  console.log(valid.value);
  form.value?.validate();
};
</script>

<style scoped></style>
