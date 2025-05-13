import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  colorScheme: {
    light : {
      primary: {
        50: '{indigo.100}',
        100: '{indigo.200}',
        200: '{indigo.200}',
        300: '{indigo.300}',
        400: '{indigo.400}',
        500: '{indigo.500}',
        600: '{indigo.600}',
        700: '{indigo.700}',
        800: '{indigo.800}',
        900: '{indigo.900}',
        950: '{indigo.950}'
      },
      formField: {
        hoverBorderColor: '{primary.color}'
      }
    },
    dark: {
      surface: {
        0: '#ffffff',
        50: '{slate.50}',
        100: '{slate.100}',
        200: '{slate.200}',
        300: '{slate.300}',
        400: '{slate.400}',
        500: '{slate.500}',
        600: '{slate.600}',
        700: '{slate.700}',
        800: '{slate.800}',
        900: '{slate.900}',
        950: '{slate.950}'
      },
      formField: {
        hoverBorderColor: '{primary.color}'
      }
    }
  }

});
