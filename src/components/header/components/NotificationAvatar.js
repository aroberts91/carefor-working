import React from 'react';
import { makeStyles, withStyles, Popover, Badge, IconButton, Drawer } from '@material-ui/core';
import Notifications from '@material-ui/icons/Notifications';
import { useTheme } from "@material-ui/styles";

import {ALERT_SUBSCRIPTION} from "../Querys";
import AlertList from './AlertList';
import ProcessDrawer from './ProcessDrawer';

const useStyles = makeStyles( theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		minWidth: 180
	},
	iconStyle: {
		color: theme.palette.primary.main,
		cursor: 'pointer'
	},
	listIcon: {
		marginRight: 10
	},
	menuLink: {
		textDecoration: 'none'
	},

}));

const StyledBadge = withStyles({
	badge: {
		top: '20%',
		right: '20%'
	}
})(Badge);

export default function NotificationAvatar( props ) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [ state, setState ] = React.useState({ processes_open: false });

	const theme = useTheme();


	const processes = [
		{
			id: 25435,
			name: 'Create Invoices',
			type: 'Invoice',
			icon: 'description',
			created_at: '2019-07-15 17:09',
			percent_complete: 100,
			status: 'Complete'
		},
		{
			id: 63521,
			name: 'Create Payroll',
			type: 'Payroll',
			icon: 'payment',
			created_at: '2019-07-15 19:04',
			percent_complete: 100,
			status: 'Complete'
		},
		{
			id: 43256,
			name: 'Create Payroll',
			type: 'Payroll',
			icon: 'payment',
			created_at: '2019-07-16 09:44',
			percent_complete: 72,
			status: 'Processing'
		}];


	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	function toggleProcesses( open ) {
		if( open )
			handleClose();

		setState({ ...state, processes_open: open })
	}

	function subscribeToMore(subscribeToMore) {
		subscribeToMore({
			document: ALERT_SUBSCRIPTION, //The subscription query
			updateQuery: ( prev, { subscriptionData } ) => {
				//Return previous data if nothing returned
				if( !subscriptionData.data )
					return prev

				//If ID of new alert already exists, return previous data
				const newAlert = subscriptionData.data.newLink;
				const exists = prev.alerts.find(( { id } ) => id === newAlert.id );
				if( exists )
					return prev;


				return Object.assign( {}, prev, {
					alerts: {
						alerts: [newAlert, ...prev.alerts],
						__typename: prev.alert.__typename
					}
				});
			}
		});
	}

	const open = Boolean(anchorEl);
	const id = open ? 'user-popover' : undefined;

	return (
		<>
			<IconButton edge='start'>
				<StyledBadge badgeContent={ 3 } color='secondary'>
					<Notifications fontSize='large' aria-describedby={id} variant="contained" onClick={handleClick} className={ classes.iconStyle } />
				</StyledBadge>
			</IconButton>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<AlertList
					processes={ processes.length }
					toggleProcesses={ toggleProcesses }
				/>
			</Popover>
			<ProcessDrawer processes={ processes } open={ state.processes_open } onClose={ toggleProcesses } />
		</>
	);
}