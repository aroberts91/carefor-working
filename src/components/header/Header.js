import React, {useEffect, useState} from 'react';
import { useApolloClient } from "@apollo/react-hooks";

import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { HEADER_QUERY } from "./Querys";

export default function Header( props ) {
    const [ state, setState ] = useState({
        pillar_data: false,
        menu_items: false,
        system: false,
        selected_pillar: 0,
        selected_system: 0,
		loaded: false
    });
    const client = useApolloClient();

    useEffect( () => {
    	async function generateNavData() {
			const { data } = await client.query({
				query: HEADER_QUERY
			});

			setState({
				...state,
				system: data.system,
				pillar_data: data.system.menus,
				menu_items: data.system.menus[ state.selected_pillar ].submenu,
				user_data: data.current_user,
				loaded: true
			})
		}

		generateNavData();
	}, []);

    function selectSystem( index ) {
        if( state.selected_system === index )
            return;

        const { user_data, selected_pillar } = state;

        setState({
            ...state,
            system: user_data.systems[ index ],
            pillar_data: user_data.systems[ index ].menus,
            menu_items: user_data.systems[ index ].menus[ selected_pillar ].submenu,
            selected_system: index,
			loaded: true
        });
    }

    function selectPillar( index ) {
        const { selected_pillar, pillar_data } = state;
        const { selectTheme } = props;

        if( selected_pillar === index )
            return;

        switch( pillar_data[index].name ) {
            case 'Plan':
                selectTheme( 'blue' );
                break;
            case 'Schedule':
                selectTheme( 'pink' );
                break;
            case 'Finance':
                selectTheme( 'teal' );
                break;
            case 'Reports':
                selectTheme( 'purple' );
                break;
            case 'CRM':
                selectTheme( 'orange' );
                break;
            case 'HR':
                selectTheme( 'grey' );
                break;
        }

        setState({
            ...state,
            selected_pillar: index,
            menu_items: pillar_data[index].submenu
        })
    }

    if( !state.loaded ) return null;

    const { pillar_data, menu_items, selected_pillar, user_data, selected_system } = state;

    return (
        <div style={{ width: '100%' }}>
            <TopBar
                user_data={ user_data }
                selectSystem={ selectSystem }
                selected_system={ selected_system }
				systems={ JSON.parse( localStorage.getItem( 'SYSTEMS' )) }
                logout={ props.logout }
            />
            <NavBar
                pillar_data={ pillar_data }
                menu_items={ menu_items }
                selected_pillar={ selected_pillar }
                selectPillar={ selectPillar }
            />
        </div>
    )
}