import React from 'react';

import { SpinnerContainer, Spinner } from '../styles/Styled';

export const LoadingSpinner = () => {
	return (
		<SpinnerContainer>
			<Spinner
				src={ require('../../../assets/images/C4IT faster.gif') }
			/>
		</SpinnerContainer>
	)
}