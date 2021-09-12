import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import { StoreProvider } from './stores/store';
import App from "./App";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

const WrappedApp = () => (
    <StoreProvider>
        <App/>
    </StoreProvider>
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <WrappedApp/>
      </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
