import React, { useState } from 'react';
import styled from 'styled-components';
import { MuiThemeProvider } from "@material-ui/core/styles";
import {Switch, Route, Redirect} from 'react-router';
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

import './style/App.css';
import { themes } from './components/global/styles/Theme';

import Header from './components/header/Header';
import Login from './components/login/Login'
import ServiceUsers from './components/crm/ServiceUsers';
import { Cookie } from './components/global/constants/Cookie';

const AppContainer = styled.div`
	${ props => props.logged_in && `height: CALC(100% - 195px)` };
	width: 100%;
`;

export const history = createHistory();

function PrivateRoute({ component: Component, ...rest }) {
	const logged_in = Cookie.get('JWT') && localStorage.getItem( 'SYSTEMS' );
	return (
		<Route
			{ ...rest }
			render={ props => {
				return logged_in ? (
					<Component { ...props } />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				)
			}}
		/>
	);
}

function App() {
	const [ state, setState ] = useState({
		current_theme: themes['blue']
	});

	const [ logged_in, setLoggedIn ] = useState( !!Cookie.get('JWT') );

	function selectTheme( theme ) {
		setState({
			current_theme: themes[theme]
		});
	}

	function login() {
		setLoggedIn( true );
	}

	function logout() {
		setLoggedIn( false );
	}

	return (
		<MuiThemeProvider theme={state.current_theme}>
			<Router history={ history }>
				{
					logged_in && <Header logout={ logout.bind( this ) } selectTheme={ selectTheme }/>
				}
				<AppContainer logged_in={ logged_in }>
					<Switch>
						<PrivateRoute exact path='/' component={ ServiceUsers }/>
						<PrivateRoute exact path='/service_users' component={ ServiceUsers } />
						<Route exact path='/login' render={ ( props ) => <Login { ...props } logged_in={ logged_in } setLogin={ login.bind( this ) }/> } />
					</Switch>
				</AppContainer>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;