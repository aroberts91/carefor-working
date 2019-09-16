import gql from "graphql-tag";

const HEADER_QUERY = gql`
	query userQuery{
    current_user {
        id
        email
        name {
          name
        }
        supportID
        supportPIN
        photo(size: THUMB) {
          url
        }
      }
      system {
        name
        regions {
          name
          subregions {
            name
          }
        }
        menus {
          id
          name
          colour
          uri
          no_of_alerts
          submenu {
            id
            name
            colour
            uri
            no_of_alerts
            submenu {
              id
              name
              colour
              uri
              no_of_alerts
            }
          }
        }
  }
	}
`;

const ALERT_QUERY = gql`
	query alertQuery( $limit: Int, $forRegion: ID! ) {
		alerts(limit: $limit, forRegion: $forRegion) {
			id
			name
			region
			created
			is_read
			booking
		}
	}
`;

const ALERT_SUBSCRIPTION = gql`
	subscription alertSubscription($forRegion: ID!) {
		newAlert(forRegion: $forRegion) {
			id
			name
			region
			created
			is_read
			booking
		}
	}
`;

const SYSTEMS_QUERY = gql`
	query systemsQuery($forAppUser: ID!) {
		systems(forAppUser: $forAppUser) {
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
`;

export { HEADER_QUERY, ALERT_QUERY, ALERT_SUBSCRIPTION };