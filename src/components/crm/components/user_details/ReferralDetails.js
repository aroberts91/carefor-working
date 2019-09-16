import React from 'react';
import ExPanel from "../../../global/components/ExPanel";
import GridContainer from "../../../global/components/GridContainer";
import {Grid, MenuItem } from "@material-ui/core/index";
import { FormInput } from "../../../global/components/FormInput";
import { FormDatePicker } from "../../../global/components/FormDatePicker";


export default function ReferralDetails( props ) {
	const { onInputBlur, onSelectChange, onDateChange } = props;

	const {
		referral_received,
		referred_for,
		user_aware_of_referral,
		weekly_hours,
		contract_date,
		service_start_date,
		expected_end_date,
		service_end_date,
		service_type_list,
		reason_left,
		date_deceased,
		place_of_death,
	} = props;

	return (
		<>
			<ExPanel
				title='Referral Details'
			>
				<GridContainer spacing={3}>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormDatePicker
								label='Referral Received'
								id='referral_received'
								value={ referral_received }
								onChange={ onDateChange( 'referral_received' ) }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormInput
								label='Referred For'
								id='referred_for'
								value={ referred_for.id }
								onChange={ onSelectChange( 'referred_for.id' ) }
								fullWidth
								disabled
								select
							>
								{
									service_type_list.map( ({ id, name }) => {
										return <MenuItem key={ id } value={ id } >{ name }</MenuItem>
									} )
								}
							</FormInput>
						</Grid>
						<Grid item xs={4}>
								<FormInput
									label='User aware of referral'
									id='user_aware_of_referral'
									value={ user_aware_of_referral }
									onChange={ onSelectChange( 'user_aware_of_referral' ) }
									fullWidth
									select
								>
									<MenuItem value='unknown'>Unknown</MenuItem>
									<MenuItem value='true'>Yes</MenuItem>
									<MenuItem value='false'>No</MenuItem>
								</FormInput>
						</Grid>
					</GridContainer>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormInput
								label='Weekly Hours'
								id='weekly_hours'
								defaultValue={ weekly_hours }
								onBlur={ onInputBlur }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormDatePicker
								label='Contract Date'
								id='contract_date'
								value={ contract_date }
								onChange={ onDateChange( 'contract_date' ) }
								fullWidth
							/>
						</Grid>
					</GridContainer>
					<GridContainer spacing={10}>
						<Grid item xs={4}>
							<FormDatePicker
								label='Service Start'
								id='service_start'
								value={ service_start_date }
								onChange={ onDateChange( 'service_start_date' ) }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormDatePicker
								label='Expected End'
								id='expected_end'
								value={ expected_end_date }
								onChange={ onDateChange( 'expected_end_date' ) }
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<FormDatePicker
								label='Service End'
								id='service_end'
								value={ service_end_date }
								onChange={ onDateChange( 'service_end_date' ) }
								fullWidth
							/>
						</Grid>
					</GridContainer>
				</GridContainer>
			</ExPanel>
		</>
	)
}