import React, { useState } from 'react';
import clsx from 'clsx';
import {Snackbar, SnackbarContent, IconButton, makeStyles} from "@material-ui/core";
import { Close, CheckCircle, Warning, Error, Info } from "@material-ui/icons";

/*
	An extended snackbar component able to support success, warning, info and error variants.
	Snack bar will clear automatically for success/info but will remain until user dismisses
	for warning/error
 */

const variantIcon = {
	success: CheckCircle,
	warning: Warning,
	error: Error,
	info: Info
};

const useStyles = makeStyles( theme => ({
	success: {
		backgroundColor: theme.global.success.background
	},
	error: {
		backgroundColor: theme.global.error.background
	},
	info: {
		backgroundColor: theme.palette.primary.main
	},
	warning: {
		backgroundColor: theme.global.warning.background
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: 8
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	}
}));

export default function SnackBar( props ) {
	const { open, anchor_origin, className, variant, message, onClose, ...other } = props;
	const Icon 		= variantIcon[ variant ];
	const classes 	= useStyles();
	return (
		<Snackbar
			open={ props.open }
			anchorOrigin={ anchor_origin }
			autoHideDuration={ props.variant === 'success' || props.variant === 'info' ? 2000 : null }
			onClose={ onClose }
		>
			<SnackbarContent
				className={ clsx( classes[ variant ], className ) }
				message={
					<span id='snackbar_content' className={ classes.message }>
						<Icon className={ clsx(classes.icon, classes.iconVariant) } />
						{ message }
					</span>
				}
				action={[
					<IconButton key="close" aria-label="close" color="inherit" onClick={ onClose }>
						<Close className={classes.icon} />
					</IconButton>,
				]}
				{ ...other }
			/>
		</Snackbar>
	)
}