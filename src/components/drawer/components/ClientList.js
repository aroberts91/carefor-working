import React, { useEffect, useState, Fragment } from 'react';
import {
	List,
	ListItem,
	ListItemAvatar,
	Divider,
	Avatar,
	ListItemText,
	Typography,
	makeStyles,
	Paper,
	IconButton,
	InputBase,
	Button
} from "@material-ui/core";
import { Search } from '@material-ui/icons';
import axios from "axios";
import _ from 'lodash';

import { LoadingSpinner } from '../../global/components/LoadingSpinner';

const useStyles = makeStyles( theme => ({
	client_list: {
		padding: 0
	},
	client_row: {
		'&:hover': {
			backgroundColor: '#EBEBEB'
		}
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


export default function ClientList() {
	const [ client_list, setClientList ] 	= useState( false );
	const [ data_ready, setDataReady ] 		= useState( false );
	const [ client_search, setSearch ] 		= useState(  '' );

	const classes = useStyles();

	useEffect( () => {
		async function getClientData() {
			if( data_ready )
				return;

			const result = await axios.get(
				'https://dev2.care-for-it.com/index.php/web_services_api/gql/15?api_key=bd6f2ca859104559120306'
			);

			setClientList( result.data.Client );
			setDataReady( true );
		}

		getClientData();
	}, []);

	async function clientSearch() {
		if( client_search.length === 0 )
			return;

		setDataReady( false );

		const result = await axios.get(
			'https://dev2.care-for-it.com/index.php/web_services_api/gql/15?api_key=bd6f2ca859104559120306'
		);

		const search_value = client_search.toLowerCase();

		let client_list = _.filter( result.data.Client, ( client ) => {
			return _.includes( client.firstname.toLowerCase(), search_value ) ||
				_.includes( client.surname.toLowerCase(), search_value );
		});

		setClientList( client_list );
		setDataReady( true );
	}

	if( !data_ready )
		return <LoadingSpinner />;

	return (
		<>
			<List className={ classes.client_list }>
				<ListItem component='div'>
					<Paper className={classes.root}>
						<InputBase
							className={classes.input}
							placeholder="Search Clients"
							inputProps={{ 'aria-label': 'Search Clients' }}
							onChange={ e => setSearch( e.target.value ) }
							onKeyPress={ e => { if( e.key === 'Enter' ) { e.preventDefault(); clientSearch() }}}
						/>
						<IconButton className={classes.iconButton} aria-label="Search" onClick={ clientSearch }>
							<Search />
						</IconButton>
					</Paper>
				</ListItem>
				{
					client_list.map( ( client, index ) => {
						return (
							<Fragment key={ index }>
								<ListItem id={ client.id } className={ classes.client_row }>
									<ListItemAvatar>
										<Avatar
											alt='client image'
											src={`https://dev2.care-for-it.com/index.php/documents/view_document/uploads/client_photo/${parseInt(client.client_ref, 10)}/${client.image_url}`}
										/>
									</ListItemAvatar>
									<ListItemText
										primary={ `${ client.firstname } ${ client.surname }` }
										secondary={
											<Fragment>
												<Typography component='span'>Next Review: { client.next_review }</Typography>
											</Fragment>
										}
									/>
								</ListItem>
								{
									( index + 1) !== client_list.length &&
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