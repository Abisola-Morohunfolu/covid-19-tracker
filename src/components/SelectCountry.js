import React from 'react';
import { Select } from '@chakra-ui/core';

const selectCountry = props => {
	if (props.countries === null) return null;
	return (
		<Select
			value={props.value === null ? 'US' : props.value}
			// backgroundColor="#008080"
			borderColor="#008080"
			color="#008080"
			variant="flushed"
			size="sm"
			width={['50%', '50%', 'max-content']}
			mr="4"
			onChange={event => {
				event.preventDefault();
				props.select(event.target.value);
			}}
		>
			{props.countries.map(country => {
				return (
					<option value={country.name} key={country.name}>
						{country.name}
					</option>
				);
			})}
		</Select>
	);
};

export default selectCountry;
