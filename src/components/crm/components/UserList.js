import React, {Fragment, useState} from 'react';
import {
	Avatar, Divider,
	IconButton,
	InputBase,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	makeStyles,
	Paper,
	Typography,
	Icon
} from "@material-ui/core/index";
import _ from "lodash";

const useStyles = makeStyles( theme => ({
	client_list: {
		padding: 0,
		flex: 1
	},
	client_row: {
		'&:hover': {
			backgroundColor: '#EBEBEB'
		}
	},
	selected: {
		backgroundColor: '#d0d0d0'
	},
	iconButton: {
		padding: 10,
	},
	input: {
		marginLeft: 8,
		flex: 1,
	},
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'center'
	},
}));

export default function UserList( { client_data, selected_client, selectClient } ) {
	const classes = useStyles();
	const [ search, setSearch ] = useState( { value: '', icon: 'search' } );
	const [ user_list, setUserList ] = useState( client_data );

	function clientSearch() {
		if( search.value === '' )
			return;

		const search_value = search.value.toLowerCase();
		setSearch({ ...search, icon: 'clear' });

		setUserList(
			_.filter( client_data, ( client ) => {
				return _.includes( client.firstname.toLowerCase(), search_value ) ||
					_.includes( client.surname.toLowerCase(), search_value );
			})
		);
	}

	function clearSearch() {
		setSearch({ value: '', icon: 'search' });
		setUserList( client_data );
	}

	return (
		<>
			<List className={ classes.client_list }>
				<ListItem component='div'>
					<Paper className={classes.root}>
						<InputBase
							className={classes.input}
							placeholder="Search Clients"
							inputProps={{ 'aria-label': 'Search Clients' }}
							onChange={ e => setSearch( { ...search, value: e.target.value } ) }
							onKeyPress={ e => { if( e.key === 'Enter' ) { e.preventDefault(); clientSearch() }}}
						/>
						<IconButton className={classes.iconButton} aria-label="Search" onClick={ search.icon === 'search' ? clientSearch : clearSearch }>
							<Icon>{ search.icon }</Icon>
						</IconButton>
					</Paper>
				</ListItem>
				{
					user_list.map( ( { node }, index ) => {
						const { id, photo, name, review_date } = node;
						return (
							<Fragment key={ index }>
								<ListItem
									id={ id }
									className={ selected_client === id ? classes.selected : classes.client_row }
									onClick={ selectClient.bind( this, id, index ) }
								>
									<ListItemAvatar>
										<Avatar
											alt='client image'
											src={`https://dev2.care-for-it.com${photo.url}`}
										/>
									</ListItemAvatar>
									<ListItemText
										primary={ name.name }
										secondary={
											<Fragment>
												<Typography component='span'>Next Review: { review_date }</Typography>
											</Fragment>
										}
									/>
								</ListItem>
								{
									( index + 1) !== user_list.length &&
									<Divider component='li'  />
								}
							</Fragment>
						);
					} )
				}
			</List>
		</>
	);
}