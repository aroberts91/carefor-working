import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from "@date-io/moment";
import { Button } from "@material-ui/core";

import { CLIENT_LIST_QUERY } from "./Querys";

import { LoadingSpinner } from "../global/components/LoadingSpinner";
import { ServiceUsersContainer, UserPaper, UserListContainer, UserContainer, AddUserContainer } from "./styles/Styled";
import UserTable from './components/UserTable';
import UserList from './components/UserList';
import UserPanels from './components/UserPanels';

export default function ServiceUsers() {
	const [ state, setState ] = useState({
		selected_client: false,
		add_new: false,
		filter_status: null,
		filter_region: null,
		filter_service: null,
		filter_subregion: null,
		filter_surname: null,
		order: null,
		from: 0,
		limit: 20
	});

	const { filter_status,
			filter_region,
			filter_service,
			filter_subregion,
			filter_surname,
			from,
			limit,
			selected_client,
			add_new } = state;

	const { loading, error, data } = useQuery(CLIENT_LIST_QUERY, {
		variables: {
			filter_status,
			filter_region,
			filter_service,
			filter_subregion,
			filter_surname,
			from,
			limit
		}
	});

	function selectClient( id, index ) {
		const { selected_client } = state;

		if( selected_client.id === id && selected_client.index === index )
			return;

		setState({
			...state,
			add_new: false,
			selected_client: {
				id,
				index
			}
		});
	};

	if( loading ) return <LoadingSpinner/>;

	if( error ) {
		return null;
	}

	const client_data = data.get_clients.edges;

	return (
		<ServiceUsersContainer>
			<UserPaper elevation={ 4 } selected_client={ selected_client }>
				{
					selected_client ?
					<UserListContainer>
						<UserList
							client_data={ client_data }
							selected_client={ selected_client.id }
							selectClient={ selectClient }
						/>
						<Button
							variant='contained'
							fullWidth
							color='primary'
							style={{ marginBottom: 'auto', height: '7.5%' }}
							onClick={ () => setState({ ...state, selected_client: false }) }
						>
							View All
						</Button>
					</UserListContainer>
					:
					<UserTable
						selectClient={ selectClient }
						client_data={ client_data }
					/>

				}
			</UserPaper>
			{
				selected_client && (
					<UserContainer selected_client={ selected_client } >
						<MuiPickersUtilsProvider utils={ MomentUtils }>
							<UserPanels selected_client={ selected_client } />
						</MuiPickersUtilsProvider>
					</UserContainer>
				)
			}
			{
				add_new && (
					<AddUserContainer>

					</AddUserContainer>
				)
			}
		</ServiceUsersContainer>
	)
}
