/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'bootstrap/dist/css/bootstrap.css';
// impor/t 'bootstrap/scss/bootstrap-grid.scss';
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/mixins/_breakpoints.scss';

import ThemeProvider from './src/context/ThemeProvider';
export const wrapRootElement = ThemeProvider;

// import './src/styles/style.sass';
