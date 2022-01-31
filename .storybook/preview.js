import { muiTheme } from 'storybook-addon-material-ui5';
//import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../src/theme/CustomTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
	muiTheme(customTheme)
];