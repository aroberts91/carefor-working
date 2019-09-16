import gql from 'graphql-tag';

const SYSTEM_MUTATION = gql`
	mutation changeSystem( $user_id: ID! ) {
		changeSystem( user_id: $user_id ) {
			ID
			name
			regions {
				id
				name
			}
			menus {
				id
				name
				submenus {
					id
					name
					uri
					order
					color
				}
			}
		}
	}	
`