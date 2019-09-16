import gql from 'graphql-tag';

const CLIENT_LIST_QUERY = gql`
query clientQuery( $filter_status: ClientStatusEnum = ACTIVE, $filter_service: ID, $filter_subregion: ID, $filter_surname: Char, $order: ClientOrderEnum, $from: Int = 0, $limit: Int = 20 ) {
    get_clients( filter_status: $filter_status, filter_service: $filter_service, filter_subregion: $filter_subregion, filter_surname: $filter_surname, order: $order, from: $from, limit: $limit ) {
        total_count
        edges {
            node {
                id
                name {
                    initial
                    title
                    firstname
                    surname
                    name
                    preferred_name
                }
                photo(size: THUMB) {
                    url
                }
                age
                review_date
                current_staff {
                    id
                    name {
                        name
                    }
                }
                telephone {
                    id
                    number
                }
            }
        }
    }
}
`;

const CLIENT_QUERY = gql`
query getClient($id: ID!) {
    get_client(id: $id) {
        id
        ref
        name {
            title
            firstname
            surname
            preferred_name
        }
        gender
        dob
        nhs_number
        email
        telephone {
            number
        }
        mobile {
            number
        }
        region {
            id
            name
        }
        referral_received
        user_aware_of_referral
        referred_for {
          id
          name
        }
        weekly_hours
        contract_date
        service_start_date
        expected_end_date
        service_end_date
        reason_left
        po_number
        accounting_ref
        country_of_birth {
            id
            name
        }
        nationality {
            id
            name
        }
        ni_number
        place_of_birth
        ethnicity {
            id
            name
        }
        first_language {
            id
            name
        }
        religion {
            id
            name
        }
        marital_status
        dependants
        sexual_orientation
        height
        weight
        hair_colour
        eye_colour
    }
    get_religions {
        id
        name
    }
    get_nationalities {
        id
        name
    }
    get_countries {
        id
        name
    }
    get_sexual_orientations
    get_genders
    get_marital_statuses
    get_languages {
        id
        name
    }
    get_ethnicities {
        id
        name
    }
    get_regions {
        id
        name
    }
    get_service_types {
        id
        name
    }
}
`;


export { CLIENT_LIST_QUERY, CLIENT_QUERY };