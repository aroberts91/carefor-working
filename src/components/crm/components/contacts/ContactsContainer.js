import React, { useEffect, useState } from 'react';

import ContactRecord from './ContactRecord';
import AddExistingContactRecord from "./AddExistingContactRecord";
import AddNewContactRecord from "./AddNewContactRecord";

const contacts = [
	{
		id: 1,
		name: {
			name: 'Mr Testy McTestface'
		},
		relationship: 'Brother',
		contact_type: 'emergency',
		email: 'testymctest@test.com',
		telephone: {
			number: '01752123456'
		},
		mobile: {
			number: '07123456789'
		},
		living_with_user: true,
		address_1: '22 Testun Road',
		address_2: '',
		city: 'Teston',
		county: 'devon',
		postcode: 'PL36TY',
		visible: false,
		invoice: true,
		referrer: false
	},
	{
		id: 2,
		name: {
			name: 'Mrs Testina McToosy'
		},
		relationship: 'Sister',
		contact_type: 'emergency',
		email: 'testina@gmail.com',
		telephone: {
			number: '01752123456'
		},
		mobile: {
			number: '07123456789'
		},
		living_with_user: true,
		address_1: '70 Brantest Avenue',
		address_2: '',
		city: 'Teston',
		county: 'devon',
		postcode: 'PL69IU',
		visible: false,
		invoice: true,
		referrer: false
	}
];

export default function ContactsContainer({ selected_client, index, value }) {
	const [ state, setState ] = useState({
		contact_records: contacts,
		data_ready: true,
		display_data: false
	});

	if ( !state.data_ready || index !== value ) return null;

	return (
		<>
			<div style={{ marginBottom: 20 }}>
			{
				state.contact_records.map( ( contact ) => {
					return <ContactRecord key={ contact.id } contact={ contact } />
				} )
			}
			</div>
			<div style={{ marginBottom: 20 }}>
				<AddExistingContactRecord/>
			</div>
			<div>
				<AddNewContactRecord />
			</div>
		</>
	)
}