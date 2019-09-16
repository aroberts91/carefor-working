import React from 'react';
import {makeStyles, Drawer, IconButton} from "@material-ui/core";

import { DrawerButton } from "../global/components/Burger";
import UserData from './components/UserData';
import { useTheme } from "@material-ui/core";
const drawerWidth = '20%';

const useStyles = makeStyles( theme => ({
	drawer: {
		width: drawerWidth,
	}
}));

export default function SideDrawer( props ) {
	const [ state, setState ] = React.useState({
		open: false
	});
	const { open } = state;
	const classes = useStyles();
	const theme = useTheme();

	function openSideDrawer() {
		props.drawerHeader();
		setState({ open: true });
	};

	function closeSideDrawer() {
		props.drawerHeader();
		setState({ open: false });
	};

	return (
		<div>
			<Drawer
				variant='persistent'
				anchor='left'
				open={ open }
				classes={{
					paper: classes.drawer
				}}
			>
				<UserData />
			</Drawer>
		</div>
	);
}