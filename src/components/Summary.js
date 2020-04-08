import React from 'react';
import { Flex, Box, Heading, Text, Spinner } from '@chakra-ui/core';

const formatString = (numb) => {
	return numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const Summary = (props) => {
	if (props.summary === null) {
		return (
			<Flex justify="center" p={3}>
				<Spinner size="xl" color="teal" />
			</Flex>
		);
	}
	let confirmed = props.summary.confirmed.value;
	let deaths = props.summary.deaths.value;
	let recovered = props.summary.recovered.value;

	return (
		<Box borderBottom="1px solid gray">
			<Heading
				as="h4"
				textAlign={['center', 'center', 'left']}
				px="4"
				mt="3"
				fontSize={['16px', '24px', '32px']}
			>
				Global Summary
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
					<Heading as="h5">{formatString(confirmed)}</Heading>
					<Text>Cases</Text>
				</Box>
				<Box
					border="1px solid teal"
					textAlign="center"
					borderRadius="3px"
					boxShadow="0 5px 15px rgba(0, 0, 0, 0.411)"
					p={10}
					m={2}
					w={['90vw', '80vw', '1fr']}
				>
					<Heading as="h5">{formatString(deaths)}</Heading>
					<Text>Deaths</Text>
					<Text fontSize="12px" color="red.400">
						{((deaths / confirmed) * 100).toFixed(2)}% fatality rate
					</Text>
				</Box>
				<Box
					border="1px solid teal"
					textAlign="center"
					borderRadius="3px"
					boxShadow="0 5px 15px rgba(0, 0, 0, 0.411)"
					p={10}
					m={2}
					w={['90vw', '80vw', '1fr']}
				>
					<Heading as="h5">{formatString(recovered)}</Heading>
					<Text>Recovered</Text>
					<Text fontSize="12px" color="green.400">
						{((recovered / confirmed) * 100).toFixed(2)}% recovery rate
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default Summary;
