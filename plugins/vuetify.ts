import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
      primary: '#1EB980',
      'primary-d': '#008853',
      'primary-l': '#62ecb0',
      background: '#424250',
      error: '#FF6859',
      secondary: '#045D56',
      info: '#72DEFF',
      warning: '#FFCF44',
      accent: '#21b4cc',
      'background-darken': '#1a1b27',
      'background-lighten': '#6d6d7c',
      'text-p': '#e0e0e0',
    },
  };
  const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#0d47a1',
      'text-p': '#000',
      'primary-d': '#002171',
      'primary-l': '#5472d3',
      background: '#c8e6c9',
      error: '#FF6859',
      secondary: '#045D56',
      info: '#72DEFF',
      warning: '#FFCF44',
      accent: '#21b4cc',
      'background-darken': '#97b498',
      'background-lighten': '#fbfffc',
    },
  };

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: darkTheme,
        light: lightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
