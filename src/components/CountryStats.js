import React from 'react';
import { Flex, Box, Heading, Text, Spinner } from '@chakra-ui/core';
import SelectCountry from './SelectCountry';

const CountryStats = props => {
	if (props.allCountries === null || props.loading) {
		return (
			<Flex justify="center" p={3}>
				<Spinner size="xl" color="teal" />
			</Flex>
		);
	}

	if (props.country === null) {
		return (
			<Box borderBottom="1px solid gray">
				<Flex justify="space-between" alignItems="center">
					<Heading
						as="h4"
						textAlign={['center', 'center', 'left']}
						px="4"
						mt="3"
						fontSize={['16px', '24px', '32px']}
					>
						{props.country !== null ? props.country.name : 'Country'} Summary
					</Heading>
					<SelectCountry
						countries={props.allCountries}
						select={props.selectCountry}
						value={props.country !== null ? props.country.name : 'US'}
					/>
				</Flex>
				<Text textAlign="center" p="4" color="red" fontWeight="bold">
					No Reported case!!
				</Text>
			</Box>
		);
	}

	return (
		<Box borderBottom="1px solid gray">
			<Flex justify="space-between" alignItems="center">
				<Heading
					as="h4"
					textAlign={['center', 'center', 'left']}
					px="4"
					mt="3"
					fontSize={['16px', '24px', '32px']}
				>
					{props.country !== null ? props.country.name : 'Country'} Summary
				</Heading>
				<SelectCountry
					countries={props.allCountries}
					select={props.selectCountry}
					value={props.country !== null ? props.country.name : 'US'}
				/>
			</Flex>

			{props.country.data !== undefined || props.country !== null ? (
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
						<Heading as="h5">{props.country.data.confirmed.value}</Heading>
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
						<Heading as="h5">{props.country.data.deaths.value}</Heading>
						<Text>Deaths</Text>
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
						<Heading as="h5">{props.country.data.recovered.value}</Heading>
						<Text>Recovered</Text>
					</Box>
				</Flex>
			) : null}
		</Box>
	);
};

export default CountryStats;
