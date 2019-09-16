import React, { Component } from 'react';
import { List, ListItem, ListItemText, Divider, MenuItem } from '@material-ui/core';
import {ALERT_QUERY} from "../Querys";

class AlertList extends Component {
	//TODO: loaded state wont be needed when using GraphQL
	state = {
		loaded: false,
		alerts: false,
		processes: false
	};

	componentDidMount() {
		if( this.state.loaded )
			return;

		this.loadAlerts();
	}

	loadAlerts = async() => {
		// const result = await this.props.client.query({
		// 	query: ALERT_QUERY
		// });
	};

	loadProcesses = async() => {

	};

	render() {
		const { unread_msgs, toggleProcesses, processes } = this.props;
		return (
			<List component={'div'}>
				{
					unread_msgs && unread_msgs > 0 ?
						<>
							<ListItem>
								<ListItemText primary={ 'Alerts go here' } />
							</ListItem>
						</>
						:
						<>
							<ListItem>
								<ListItemText primary={ 'No alerts to display' } />
							</ListItem>
						</>
				}
				{
					processes > 0 &&
					<>
						<Divider component='li' />
						<MenuItem onClick={ toggleProcesses.bind( this, true ) } >{ processes } recent processes</MenuItem>
					</>
				}
			</List>
		);
	}
}

export default AlertList;