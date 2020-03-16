import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from './Theme/theme';

const ThemedApp = () => (
	<ThemeProvider theme={customTheme}>
		<ColorModeProvider>
			<CSSReset /> <App />{' '}
		</ColorModeProvider>
	</ThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
