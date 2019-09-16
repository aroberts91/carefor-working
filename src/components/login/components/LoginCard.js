import React, { useState } from 'react';
import {Card, CardContent, TextField, Button} from '@material-ui/core'

export default function LoginCard() {
	const [ username, setUsername ] = useState('' );
	const [ password, setPassword ] = useState( '' );

	function handleUsernameChange( event ) {
		setUsername( event.target.value );
	}

	function handlePasswordChange( event ) {
		setPassword( event.target.value );
	}

	function submitLogin( event ) {
		event.preventDefault();
	}

	return (
		<Card>
			<CardContent>
				<form>
					<TextField
						id='login-username'
						label='Username'
						value={ username }
						onChange={ handleUsernameChange }
						margin='normal'
					/>
					<br />
					<TextField
						id='login-username'
						label='Password'
						value={ password }
						onChange={ handlePasswordChange }
						margin='normal'
						type='password'
					/>
					<br/>
					<Button variant='contained' color='primary' onClick={ submitLogin }>Login</Button>
				</form>
			</CardContent>
		</Card>
	)
}