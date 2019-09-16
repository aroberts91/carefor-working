import React from 'react';
import {
	Grid,
	MenuItem,
} from "@material-ui/core/index";
import ExPanel from '../../../global/components/ExPanel';

import GridContainer from '../../../global/components/GridContainer';
import { FormInput } from "../../../global/components/FormInput";

export default function PersonalDetails( props ) {
	const { onInputBlur, onSelectChange } = props;

	const {
		name,
		email,
		nhs_number,
		gender,
		telephone,
		mobile,
		answerphone,
		region,
	} = props;

	const {
		firstname,
		surname,
		title,
		preferred_name
	} = name;

	return (
		<>
			<ExPanel
				title='Personal Details'
			>
				<GridContainer spacing={3}>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormInput
								label='Title'
								id='title'
								value={ title }
								onChange={ onSelectChange( 'name.title' ) }
								fullWidth
								select
							>
								<MenuItem selected value='Miss'>Miss</MenuItem>
								<MenuItem value='Mr'>Mr</MenuItem>
								<MenuItem value='Mrs'>Mrs</MenuItem>
								<MenuItem value='Ms'>Ms</MenuItem>
							</FormInput>
						</Grid>
						<Grid item xs={4}>
							<FormInput
								label='First Name'
								id='name.firstname'
								defaultValue={ firstname }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormInput
								label='Surname'
								id='name.surname'
								defaultValue={ surname }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
					</GridContainer>
					<GridContainer spacing={ 10 }>
						<Grid item xs={ 4 }>
							<FormInput
								label='Preferred Name'
								id='name.preferred_name'
								defaultValue={ preferred_name }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
					</GridContainer>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormInput
								label='Email'
								id='email'
								defaultValue={ email }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormInput
								label='NHS Number'
								id='nhs_number'
								defaultValue={ nhs_number }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormInput
								label='Gender'
								id='gender'
								value={ gender }
								onChange={ onSelectChange( 'gender' ) }
								fullWidth
								select
							>
								<MenuItem value='male'>Male</MenuItem>
								<MenuItem value='female'>Female</MenuItem>
							</FormInput>
						</Grid>
					</GridContainer>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormInput
								label='Telephone'
								id='telephone.number'
								defaultValue={ telephone.number }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormInput
								label='Mobile'
								id='mobile.number'
								defaultValue={ mobile.number }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
								<FormInput
									label='Answerphone'
									id='answerphone'
									value={ answerphone }
									onChange={ onSelectChange( 'answerphone' ) }
									fullWidth
									select
								>
									<MenuItem value='Unknown'>Unknown</MenuItem>
									<MenuItem value={ true }>Yes</MenuItem>
									<MenuItem value={ false }>No</MenuItem>
								</FormInput>
						</Grid>
					</GridContainer>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormInput
								fullWidth
								label='Region'
								id='region'
								value={ region.id }
								select
								onChange={ onSelectChange( 'region.id' ) }
							>
								{
									props.region_list.map( ({ id, name }) => <MenuItem key={ id } value={ id }>{ name }</MenuItem>)
								}
							</FormInput>
						</Grid>
					</GridContainer>
				</GridContainer>
			</ExPanel>

		</>
	)
}