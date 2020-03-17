import React from 'react';
import { Box, Text, Link } from '@chakra-ui/core';

const attribution = () => {
	return (
		<Box textAlign="center" padding="4">
			<Text>
				Data API provided by{' '}
				<Link href="https://github.com/mathdroid/covid-19-api" isExternal fontWeight="bold">
					Matt Driod
				</Link>
			</Text>
			<Text as="code" color="teal.400">
				Developed By{' '}
				<Link href="https://github.com/abisola-morohunfolu" isExternal fontWeight="bold">
					Abisola
				</Link>
			</Text>
		</Box>
	);
};

export default attribution;
