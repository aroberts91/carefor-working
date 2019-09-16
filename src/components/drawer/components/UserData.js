import React, { Component, Fragment } from 'react';
import { Button } from "@material-ui/core";

import DrawerSelect from './DrawerSelect';
import ClientList from './ClientList';
import StaffList from './StaffList';

export default class UserData extends Component {
	state = {
		selected: 'clients'
	};

	selectList = ( selected ) => {
		this.setState({
			selected
		});
	};

	render() {
		const { selected } = this.state;
		return (
			<>
				<DrawerSelect
					selected={ selected }
					selectList={ this.selectList }
				/>
				{
					selected === 'clients' ?
						<ClientList />
						:
						<StaffList />
				}
			</>
		);
	}
}