import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const customTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#1EB980',
      background: '#424250',
      error: '#FF6859',
      secondary: '#045D56',
      info: '#72DEFF',
      warning: '#FFCF44',
      accent: '#21b4cc',
      'background-darken': '33333D',
    },
  };

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: customTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
