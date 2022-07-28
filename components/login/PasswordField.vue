<template>
  <v-text-field
    :label="label"
    :required="required"
    :color="color"
    :rules="rules"
    :hint="hint"
    :type="showPassword ? 'text' : 'password'"
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    @click:append-inner="showPassword = !showPassword"
  ></v-text-field>
</template>

<script setup lang="ts">
defineProps<{
  rules?: ((v: string) => true | string)[];
  label: string;
  required: boolean;
  color: string;
  hint?: string;
}>();

const showPassword = ref(false);
</script>

<style scoped></style>
