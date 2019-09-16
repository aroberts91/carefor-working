import axios from 'axios';
axios.defaults.withCredentials = true;

// Send a GET/POST request to the server and return the data (or true) upon completion
export async function asyncAjax( type, url, param_obj = {}, return_data = true )
{

	// Create an empty object to hold the request
	let res = {};
	const AXIOS_REQ_OBJ = axios.create( global.REQUEST_CONFIG );
	url = global.REQ_URL + url;

	// We need to use a try/catch as the request can throw
	try {
		switch( type )
		{
			case 'GET':
				// Create an empty array to hold each query string params
				let query_arr = [];

				// Loop through each of the parameters, concatenate them and add them to the query array
				Object.keys( param_obj ).forEach( key => {
					query_arr.push( key + '=' + param_obj[ key ] );
				});

				// Make the GET request by building up the URL querystring (joining all of the params from the query_arr)
				res = await AXIOS_REQ_OBJ.get( url + '?' + query_arr.join('&'), {}, global.REQUEST_CONFIG );
				break;
			case 'POST':
				// Create a new form object for the request
				let form_data = new FormData();

				// Loop through each of the paramaters that have been provided and append them to the form object
				let has_data = false;
				Object.keys( param_obj ).forEach( key => {
					has_data = true;
					form_data.append( key, param_obj[ key ] );
				});

				// Make the POST request and set the response into variable
				res = has_data ? await AXIOS_REQ_OBJ.post( url, form_data, global.REQUEST_CONFIG ) : await AXIOS_REQ_OBJ.post( url, {}, global.REQUEST_CONFIG );
				break;
			default:
				return false;
		}

		// If the calling function does not require the data, just return true as it has worked
		if( !return_data )
			return true;

		// Check that the response has data a valid JSON response
		let response_data = res.data;

		//  Return the data from the request back to the calling  function
		return await response_data;
	} catch( e ) {
		console.log( e );
	}
}