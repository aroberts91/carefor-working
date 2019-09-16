import React, { useState } from 'react';
import { 	Button,
			CssBaseline,
			TextField,
			Link,
			Grid,
			makeStyles,
			Paper,
			Container,
			CircularProgress,
			Divider } from "@material-ui/core";
import {HeaderLogo} from "../header/components/HeaderLogo";
import { useApolloClient } from "@apollo/react-hooks";

import { asyncAjax } from '../global/functions/ajaxRequest';
import { Cookie } from '../global/constants/Cookie';
import { LoginBackground } from "./styles/Styled";

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 30
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Login( props ) {
	const classes = useStyles();
	const [ state, setState ] = useState({
		username: '',
		password: ''
	});
	const [ loading, setLoading ] = useState( false );
	const client = useApolloClient();

	function onInputChange( e ) {
		setState({ ...state, [e.target.id]: e.target.value });
	}

	async function loginRequest( e ) {
		e.preventDefault();

		const { username, password } = state;
		let { from } = props.location.state || { from: { pathname: '/' } };

		//TODO: validation of email/password
		if( username.length < 5 || password.length < 5 )
			return;

		setLoading( true );
		const res = await asyncAjax( 'POST', '/login', { username, password } );

		setLoading( false );

		if( res.status !== 200 )
			return console.log( 'ERROR' ); //TODO: add error handling

		//Store JWT and systems
		Cookie.set( 'JWT', `Bearer ${ res.token }`, { path: '/', days: 30 } );

		//Use local storage for systems as likely to be much more data
		localStorage.setItem( 'SYSTEMS', JSON.stringify( res.login.systems ) );

		//Reset ApolloClient to refresh authorization header on GQL queries
		await client.resetStore();

		//Set login status and push user to referrer
		props.setLogin();

		props.history.push( from );
	}

	return (
		<>
			<LoginBackground/>
			<Container component="main" maxWidth="xs">
				<Paper>
				<CssBaseline />
				<div className={classes.paper}>
					<HeaderLogo/>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Email Address"
							name="username"
							autoComplete="username"
							autoFocus
							onChange={ onInputChange }
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={ onInputChange }
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={ loginRequest }
						>
							{
								loading ? (
									<CircularProgress
										color='inherit'
										size={ 25 }
										style={{ color: '#FFF' }}
									/>
								) : (
									'Login'
								)
							}
						</Button>
						<Link href="#" variant="body2">
							Forgot password?
						</Link>
					</form>
				</div>
				</Paper>
			</Container>
		</>
	);
}

export default Login;