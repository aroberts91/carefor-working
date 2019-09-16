import React, { memo } from 'react';
import { TextField } from '@material-ui/core';

/*
	An input wrapper to ensure input values are never null (as this throws an error).
	Values are checked and assigned an empty string if null
 */

const FormInput = memo(({ value, select, children, ...rest }) => {
	if( value == null ) value = '';

	if( select ) {
		return (
			<TextField
				value={ value }
				select
				{ ...rest }
			>
				{ children }
			</TextField>
		)
	}

	return (
		<TextField
			{ ...rest }
		/>
	)
});

export { FormInput }