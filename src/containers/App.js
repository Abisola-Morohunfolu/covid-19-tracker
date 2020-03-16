import React from 'react';
import { Button, useColorMode } from '@chakra-ui/core';
// import { customTheme } from '../Theme/theme';
import './App.css';
// import { ThemeProvider } from 'emotion-theming';
// import { customTheme } from '../Theme/theme';

function App({ children }) {
	const { colorMode, toggleColorMode } = useColorMode();
	console.log(colorMode);
	return (
		<Button variantColor="teal" size="md" onClick={toggleColorMode}>
			{colorMode}
		</Button>
	);
}

export default App;
