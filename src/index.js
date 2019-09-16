import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { Cookie } from './components/global/constants/Cookie';

import './style/index.css';
import './components/global/constants/Config';
import App from './App';
import * as serviceWorker from './serviceWorker';

const link = new HttpLink({
    uri: 'https://dev2.care-for-it.com/index.php/Gql/',
	credentials: 'include',
	headers: {
    	authorization: `${Cookie.get('JWT')}`,
	}
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

ReactDOM.render(
    //BrowserRouter makes use of HTML5 history API to give UI benefit (back, forward etc)
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
    document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
