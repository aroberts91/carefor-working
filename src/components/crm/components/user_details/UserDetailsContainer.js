import React, {useEffect, useState} from 'react';
import { AppBar, Button, Toolbar } from "@material-ui/core";
import PersonalDetails from './PersonalDetails';
import ReferralDetails from './ReferralDetails';
import BackgroundDetails from "./BackgroundDetails";
import { CLIENT_QUERY } from "../../Querys";
import { UPDATE_CLIENT } from "../../Mutations";
import { useApolloClient } from "@apollo/react-hooks";
import PhysicalAppearance from "./PhysicalAppearance";
import SnackBar from "../../../global/components/SnackBar";


export default function UserDetailsContainer({ selected_client, index, value }) {
	const [ snack, setSnack ] = useState({ open: false, variant: 'success', message: '' });
	const [ state, setState ] = useState({
		data_ready: false,
		client_data: false,
		form_data: false,
		mutation_keys: []
	});
	const client = useApolloClient();

	//Separate state objects for ease of use
	const {
		data_ready,
		client_data,
		form_data,
		mutation_keys
	} = state;

	useEffect(() => {
		async function getClientData() {
			if( index !== value )
				return;

			//Function will re-call when new id is selected, so set data_ready to false to show loading
			setState({ ...state, data_ready: false });

			//Send GQL query to server
			const { data } = await client.query({
				query: CLIENT_QUERY,
				variables: {
					id: selected_client.id
				}
			});

			//Pull client data into a separate object and remove it from the original
			const client_data = data.get_client;
			delete data.get_client;

			//Deconstruct any objects within client data
			const { telephone, mobile, region, religion, referred_for } = client_data;

			//Add data to state, ternaries on any objects which could be null
			setState({
				...state,
				data_ready: true,
				form_data: data,
				mutation_keys: [],
				client_data: {
					...client_data,
					telephone: telephone ? telephone : {},
					mobile: mobile ? mobile : {},
					region: region ? region : {},
					religion: religion ? religion : {},
					referred_for: referred_for ? referred_for : {},
					interpreter_required: false //TODO: return this from gql
				},
			});
		}
		getClientData();
	}, [ selected_client.id ]);

	function closeSnackBar( event, reason ) {
		if( reason === 'clickaway' )
			return;

		setSnack({ ...snack, open: false });
	}

	function displaySnackBar( message, variant = 'success' ) {
		if( !message || !variant )
			return;

		setSnack({ open: true, variant, message });

	}

	function getUpdateData() {
		const user_data = [{ id: selected_client.id }];
		const current_rec = user_data[0];

		mutation_keys.map( ( key ) => {
			if( !key.includes( '.' ) ) {
				return user_data.key = state.key;
			}

			const keys = key.split( '.' );
			current_rec[keys[0]] = {
				...current_rec[keys[0]],
				[keys[1]]: state.client_data[keys[0]][keys[1]]
			}
		});

		return user_data;
	}

	async function updateClient() {
		const data = getUpdateData();

		const mutation = await client.mutate({
			mutation: UPDATE_CLIENT,
			variables: { data },
			errorPolicy: 'all',
			refetchQueries: CLIENT_QUERY
		});

		if( mutation.errors ) {
			//TODO: error handling
		}

		const client_data = mutation.data.add_update_clients[0];

		//Deconstruct any objects within client data
		const { telephone, mobile, region, religion, referred_for } = client_data;

		displaySnackBar( 'Client Updated Successfully' );
		setState({
			...state,
			mutation_keys: [],
			client_data: {
				...client_data,
				telephone: telephone ? telephone : {},
				mobile: mobile ? mobile : {},
				region: region ? region : {},
				religion: religion ? religion : {},
				referred_for: referred_for ? referred_for : {},
				interpreter_required: false
			},
		});
	}

	function updateNested( id, value ) {
		const keys = id.split('.');
		let mutation = mutation_keys;

		if( !mutation_keys.includes(id) )
			mutation = mutation.concat(id);

		setState({
			...state,
			client_data: {
				...client_data,
				[ keys[ 0 ] ]: {
					...client_data[ keys[ 0 ] ],
					[ keys[ 1 ] ]: value
				}
			},
			mutation_keys: mutation
		});
	}

	function onInputBlur( event ) {
		const input = event.target;
		const { id, value } = input;
		let mutation = mutation_keys;

		if( id.includes('.') )
			return updateNested( id, value );

		if( !mutation_keys.includes(id) )
			mutation = mutation.concat(id);

		setState({
			...state,
			client_data: {
				...client_data,
				[ id ]: value
			},
			mutation_keys: mutation
		});
	}

	const onDateChange = id => date => {
		let mutation = mutation_keys;
		if( id.includes( '.' ) )
			return updateNested( id, name );

		if( !mutation_keys.includes(id) )
			mutation = mutation.concat(id);

		setState({
			...state,
			client_data: {
				...client_data,
				[ id ]: date
			},
			mutation_keys: mutation
		});
	};

	const onSelectChange = name => event => {
		//Update state, only for the input being edited
		let mutation = mutation_keys;
		if( name.includes('.') )
			return updateNested( name, event.target.value );

		if( !mutation_keys.includes(name) )
			mutation = mutation.concat(name);

		setState({
			...state,
			client_data: {
				...client_data,
				[name]: event.target.value
			},
			mutation_keys: mutation
		});
	};

	const onCheckChange = name => event => {
		let mutation = mutation_keys;
		if( name.includes( '.' ) )
			return updateNested( name, event.target.checked );

		if( !mutation_keys.includes(name) )
			mutation = mutation.concat(name);

		setState({
			...state,
			client_data: {
				...client_data,
				[name]: event.target.checked
			},
			mutation_keys: mutation
		});
	};

	if( !data_ready || index !== value || !client_data || !form_data )
		return null;

	//Extract GraphQL data from state object for ease of use
	const {
		get_countries,
		get_ethnicities,
		get_languages,
		get_marital_statuses,
		get_nationalities,
		get_regions,
		get_religions,
		get_sexual_orientations,
		get_service_types
	} = form_data;

	//Personal Details
	const {
		ref,
		email,
		name,
		gender,
		dob,
		nhs_number,
		telephone,
		mobile,
		region,
	} = client_data;

	//Referral Details
	const {
		referral_received,
		user_aware_of_referral,
		referred_for,
		weekly_hours,
		contract_date,
		service_start_date,
		expected_end_date,
		service_end_date,
		reason_left
	} = client_data;

	//Background Details
	const {
		country_of_birth,
		nationality,
		ni_number,
		place_of_birth,
		ethnicity,
		first_language,
		religion,
		marital_status,
		dependants,
		sexual_orientation
	} = client_data;

	//Physical Appearance
	const {
		height,
		weight,
		hair_colour,
		eye_colour
	} = client_data;

	return (
		<>
			<AppBar position='relative'>
				<Toolbar>
					<Button style={{ color: '#fff' }} onClick={ updateClient }>Save</Button>
				</Toolbar>
			</AppBar>
			<div style={{ padding: 24 }}>
				<PersonalDetails
					client_ref={ ref }
					name={ name }
					gender={ gender }
					dob={ dob }
					nhs_number={ nhs_number }
					email={ email }
					telephone={ telephone }
					mobile={ mobile }
					region={ region }
					region_list={ get_regions }
					onSelectChange={ onSelectChange }
					onInputBlur={ onInputBlur }
				/>
				<ReferralDetails
					referral_received={ referral_received }
					referred_for={ referred_for }
					user_aware_of_referral={ user_aware_of_referral }
					weekly_hours={ weekly_hours }
					contract_date={ contract_date }
					service_start_date={ service_start_date }
					expected_end_date={ expected_end_date }
					service_end_date={ service_end_date }
					reason_left={ reason_left }
					service_type_list={ get_service_types }
					onInputBlur={ onInputBlur }
					onSelectChange={ onSelectChange }
					onDateChange={ onDateChange }
				/>
				<BackgroundDetails
					country_of_birth={ country_of_birth }
					nationality={ nationality }
					ni_number={ ni_number }
					place_of_birth={ place_of_birth }
					ethnicity={ ethnicity }
					first_language={ first_language }
					religion={ religion }
					marital_status={ marital_status }
					dependants={ dependants }
					sexual_orientation={ sexual_orientation }
					countries={ get_countries }
					nationalities={ get_nationalities }
					ethnicities={ get_ethnicities }
					languages={ get_languages }
					religions={ get_religions }
					marital_statuses={ get_marital_statuses }
					sexual_orientations={ get_sexual_orientations }
					onInputBlur={ onInputBlur }
					onSelectChange={ onSelectChange }
					onCheckChange={ onCheckChange }
				/>
				<PhysicalAppearance
					height={ height }
					weight={ weight }
					hair_colour={ hair_colour }
					eye_colour={ eye_colour }
					onInputBlur={ onInputBlur }
				/>
			</div>
			<SnackBar
				open={ snack.open }
				anchor_origin={ { vertical: 'top', horizontal: 'center' } }
				variant={ snack.variant }
				message={ snack.message }
				onClose={ closeSnackBar }
			/>
		</>
	)
}