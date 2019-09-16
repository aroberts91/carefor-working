import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, Divider, Avatar, ListItemText, Typography, Button } from "@material-ui/core";
import axios from "axios";

import { NoStaffContainer } from '../styles/Styled';
import { LoadingSpinner } from "../../global/components/LoadingSpinner";

export default function ClientList() {
	const [ state, setState ] 	= useState({
		staff_list: false,
		data_ready: false
	});


	useEffect( () => {
		async function getClientData() {
			if( state.data_ready )
				return;
			const result = await axios.get(
				'https://dev2.care-for-it.com/index.php/web_services_api/gql/15?api_key=bd6f2ca859104559120306'
			);

			setState({
				staff_list: result.data.Staff,
				data_ready: true
			});
		}

		getClientData();
	});

	if( !state.data_ready )
		return <LoadingSpinner/>;

	if( !state.staff_list )
	{
		return (
			<NoStaffContainer>
				<Typography style={{ textAlign: 'center', marginBottom: 10 }}>You've yet to set up any staff members</Typography>
				<Button variant='contained' component={ Link } color='primary' to='#'>Add Staff</Button>
			</NoStaffContainer>
		)
	}

	return (
		<List>
			{
				state.staff_list.map( ( staff, index ) => {
					return (
						<Fragment key={ index }>
							<ListItem id={ staff.id }>
								<ListItemAvatar>
									<Avatar
										alt='client image'
										src={`https://dev2.care-for-it.com/index.php/documents/view_document/uploads/client_photo/${parseInt(staff.id, 10)}/${staff.image_url}`}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={ `${ staff.firstname } ${ staff.surname }` }
									secondary={
										<Fragment>
											<Typography component='span'>Status: { staff.status }</Typography>
										</Fragment>
									}
								/>
							</ListItem>
							{
								( index + 1) !== state.staff_list.length &&
								<Divider component='li'  />
							}
						</Fragment>
					);
				} )
			}
		</List>
	);
}