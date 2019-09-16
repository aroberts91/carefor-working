import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import UserDetailsContainer from './user_details/UserDetailsContainer';
import ContactsContainer from './contacts/ContactsContainer';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box>{children}</Box>
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		margin: 'auto',
		padding: 0
	}
}));

const UserTabs = withStyles( theme => ({
	root: {
		borderBottom: '1px solid #d9d9d9',
	}
}))(Tabs);

export default function UserPanels({ selected_client } ) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<div className={classes.root}>
			<UserTabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
				aria-label="full width tabs example"
			>
				<Tab label='Service User' {...a11yProps(0)} />
				<Tab label='Care Plan' {...a11yProps(1)} />
				<Tab label='Contacts' {...a11yProps(2)} />
				<Tab label='Property' {...a11yProps(3)} />
				<Tab label='Schedule' {...a11yProps(4)} />
				<Tab label='Account' {...a11yProps(5)} />
				<Tab label='Invoices' {...a11yProps(6)} />
				<Tab label='Notes' {...a11yProps(7)} />
				<Tab label='eMAR' {...a11yProps(8)} />
			</UserTabs>
			<TabPanel value={value} index={0}>
				<UserDetailsContainer
					index={ 0 }
					value={ value }
					selected_client={ selected_client }
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				Care Plan
			</TabPanel>
			<TabPanel value={value} index={2}>
				<ContactsContainer
					index={ 2 }
					value={ value }
					selected_client={ selected_client }
				/>
			</TabPanel>
			<TabPanel value={value} index={3}>
				Property
			</TabPanel>
			<TabPanel value={value} index={4}>
				Schedule
			</TabPanel>
			<TabPanel value={value} index={5}>
				Account
			</TabPanel>
			<TabPanel value={value} index={6}>
				Invoices
			</TabPanel>
			<TabPanel value={value} index={7}>
				Notes
			</TabPanel>
			<TabPanel value={value} index={8}>
				eMAR
			</TabPanel>
		</div>
	);
}
