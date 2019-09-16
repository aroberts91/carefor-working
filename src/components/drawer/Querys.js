import gql from 'graphql-tag';

const SIDEBAR_CLIENT_QUERY = gql`
	query clientQuery( $limit: Int ) {
		get_clients( limit: $limit ) {
			id
			firstname
			surname
			image_url
			status
			client_ref
		}
	}
`;