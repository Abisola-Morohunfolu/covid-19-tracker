import React from 'react';
import { IconButton, useColorMode, Flex, Heading } from '@chakra-ui/core';

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex justifyContent="space-between" padding={3} borderBottom="1px" borderColor="gray.200">
			<Heading>Covid-19</Heading>
			<IconButton
				onClick={toggleColorMode}
				aria-label="Color Mode Toggle"
				icon={colorMode === 'light' ? 'icon1' : 'icon2'}
				backgroundColor="transparent"
			/>
		</Flex>
	);
};

export default Header;
