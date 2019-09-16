import React from 'react';

import { makeStyles } from "@material-ui/core";
import { SelectContainer, SelectTab } from "../styles/Styled";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
	button: {
		backgroundColor: theme.palette.primary.main
	}
}));

export default function DrawerSelect( props ) {
	const classes = useStyles();

	return (
		<SelectContainer>
			<SelectTab selected={ props.selected === 'clients' } onClick={ props.selectList.bind( this, 'clients' ) } className={ classes.button }>
				<Typography>Clients</Typography>
			</SelectTab>
			<SelectTab selected={ props.selected === 'staff' } onClick={ props.selectList.bind( this, 'staff' ) } className={ classes.button }>
				<Typography>Staff</Typography>
			</SelectTab>
		</SelectContainer>
	)
}