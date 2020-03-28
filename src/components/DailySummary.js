import React from 'react';
import { Flex, Box, Heading, Text, Spinner } from '@chakra-ui/core';

const dailySummary = props => {
	if (props.dailySummary === null) {
		return (
			<Flex justify="center" p={3}>
				<Spinner size="xl" color="teal" />
			</Flex>
		);
	}

	let currentDay = props.dailySummary[0];
	let prevDay = props.dailySummary[1];
	return (
		<Box borderBottom="1px solid gray">
			<Heading
				as="h4"
				textAlign={['center', 'center', 'left']}
				px="4"
				mt="3"
				fontSize={['16px', '24px', '32px']}
			>
				Daily Summary
			</Heading>
			<Flex
				justifyContent="space-around"
				p="5"
				flexDirection={['column', 'column', 'row']}
				alignItems={['center', 'center', 'stretch']}
			>
				<Box
					border="1px solid teal"
					textAlign="center"
					borderRadius="4px"
					boxShadow="0 5px 15px rgba(0, 0, 0, 0.411)"
					p={10}
					m={2}
					w={['90vw', '80vw', '1fr']}
				>
					<Heading as="h5">{currentDay.deltaConfirmed}</Heading>
					<Text>Cases</Text>
					<Text fontSize="12px" color="red.400">
						Yesterday: {prevDay.deltaConfirmed} Confirmed Cases
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default dailySummary;
