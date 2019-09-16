import React, { useState } from 'react';
import ExPanel from "../../../global/components/ExPanel";
import GridContainer from "../../../global/components/GridContainer";
import {Checkbox, FormControlLabel, Grid, makeStyles} from "@material-ui/core";
import {FormInput} from "../../../global/components/FormInput";

const useStyles = makeStyles({
	input: {
		color: 'black'
	}
});

export default function ContactRecord( { contact } ) {
	const classes = useStyles();
	const [ state, setState ] = useState({
		...contact
	});

	const { name,
			relationship,
			contact_type,
			email,
			telephone,
			mobile,
			living_with_user,
			address_1,
			address_2,
			city,
			county,
			postcode,
			visible,
			invoice,
			referrer,
	} = state;

	const onCheckChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	return (
		<ExPanel
			title={ `${name.name} - ${ relationship }` }
			button_type='delete'
		>
			<GridContainer spacing={ 3 }>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Name'
							id='name'
							value={ name.name }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Relationship'
							id='name'
							value={ relationship }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Contact Type'
							id='name'
							value={ contact_type }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Email Address'
							id='name'
							value={ email }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Telephone'
							id='name'
							value={ telephone.number }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Mobile'
							id='name'
							value={ mobile.number }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Address Line 1'
							id='name'
							value={ address_1 }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Address Line 2'
							id='name'
							value={ address_2 }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Town/City'
							id='name'
							value={ city }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='County'
							id='name'
							value={ county }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormInput
							label='Postcode'
							id='name'
							value={ postcode }
							fullWidth
							disabled
							inputProps={{ className: classes.input }}
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormControlLabel
							control={
								<Checkbox
									checked={ living_with_user }
									onChange={ onCheckChange( 'living_with_user' ) }
									value="living_with_user"
									color="primary"
									disabled
								/>
							}
							label='Living with Service User'
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormControlLabel
							control={
								<Checkbox
									checked={ visible }
									onChange={ onCheckChange( 'visible' ) }
									value="visible"
									color="primary"
									disabled
								/>
							}
							label="Visible to Carers"
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormControlLabel
							control={
								<Checkbox
									checked={ invoice }
									onChange={ onCheckChange( 'invoice' ) }
									value="invoice"
									color="primary"
									disabled
								/>
							}
							label="Invoice Address"
						/>
					</Grid>
				</GridContainer>
				<GridContainer spacing={ 4 }>
					<Grid item xs={ 4 }>
						<FormControlLabel
							control={
								<Checkbox
									checked={ referrer }
									onChange={ onCheckChange( 'referrer' ) }
									value="referrer"
									color="primary"
									disabled
								/>
							}
							label="Referrer"
						/>
					</Grid>
				</GridContainer>
			</GridContainer>
		</ExPanel>
	)
}