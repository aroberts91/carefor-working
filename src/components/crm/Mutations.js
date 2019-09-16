import gql from 'graphql-tag';

const UPDATE_CLIENT = gql`
mutation updateClient( $data: [ClientInput]! ) {
    add_update_clients( data: $data ) {
        id
    }
}
`;

export { UPDATE_CLIENT };