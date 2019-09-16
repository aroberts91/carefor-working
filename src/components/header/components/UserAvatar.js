import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { makeStyles, Icon, List, ListItem, Link, Typography, Avatar, Popover, ListItemText, Divider, MenuItem } from '@material-ui/core';
import { withRouter } from "react-router-dom";

import { Cookie } from '../../global/constants/Cookie';

const useStyles = makeStyles({
	popover: {
		display: 'none'
	},
	root: {
		width: '100%',
		maxWidth: 360,
		minWidth: 180
	},
	dividerFullWidth: {
		margin: `5px 0 0 10px`,
		color: 'rgba(0, 0, 0, 0.54)'
	},
	dividerInset: {
		margin: `5px 0 0 0`,
	},
	avatarStyle: {
		width: 50,
		height: 50,
		margin: '3px 5px 0 5px',
		backgroundColor: '#00A9D8',
		color: '#F5F5F5',
		cursor: 'pointer'
	},
	listIcon: {
		marginRight: 10
	},
	menuLink: {
		textDecoration: 'none'
	}
});

function UserAvatar( props ) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	function logout() {
		Cookie.delete('JWT');
		props.logout();
		props.history.push('/login');
	}

	const open = Boolean(anchorEl);
	const id = open ? 'user-popover' : undefined;

	const { photo, support_id, support_pin, name } = props;

	//TODO: change url to relative paths when moved to prod URL
	return (
		<>
			{
				photo && photo.url.length > 1  ?
					<Avatar aria-describedby={id} variant="contained" onClick={handleClick} className={ classes.avatarStyle } src={ `https://dev2.care-for-it.com${props.photo.url}` }/>
					:
					<Avatar aria-describedby={id} variant="contained" onClick={handleClick} className={ classes.avatarStyle }>
						<FontAwesomeIcon icon={ faUser } />
					</Avatar>
			}
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
				<List className={ classes.root }>
					<ListItem>
						<ListItemText primary={ name.name } />
					</ListItem>
					{
						props.support_id && props.support_pin &&
						<>
							<Divider component="li" />
							<li>
								<Typography
									className={classes.dividerFullWidth}
									display="block"
									variant="caption"
								>
									Help & Support
								</Typography>
							</li>
							<ListItem>
								<ListItemText primary={ 'ID' } secondary={ support_id } />
							</ListItem>
							<ListItem>
								<ListItemText primary={ 'PIN' } secondary={ support_pin } />
							</ListItem>
							<Link style={{ textDecoration: 'none', color: 'black' }} href='http://support.care-for-it.com/' target='_blank'>
								<MenuItem>
									<Icon className={ classes.listIcon }>open_in_new</Icon>
									Visit Support
								</MenuItem>
							</Link>
						</>
					}
					<Divider component="li" />
					<Link color='inherit' style={{ textDecoration: 'none', color: 'black' }} onClick={ logout }>
						<MenuItem>
							<Icon className={ classes.listIcon }>exit_to_app</Icon>
							Logout
						</MenuItem>
					</Link>
				</List>
			</Popover>
		</>


	);
}

export default withRouter( UserAvatar );