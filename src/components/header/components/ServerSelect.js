import React, { Component } from 'react';
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from "@material-ui/core";

export default class ServerSelect extends Component {
	render() {
		const { systems, selected_system, selectSystem } = this.props;
		return (
			<div>
				<FormControl>
				<InputLabel htmlFor="server-simple">Server</InputLabel>
				<Select
					value={ systems[ selected_system ].name }
					inputProps={{
						id: 'server-simple',
					}}
					style={{ minWidth: '160px', marginRight: '20px' }}
					onChange={ selectSystem.bind( this ) }
				>
					{
						systems.map( (system, index) => {
							return (
								<MenuItem key={ index } id={ index }  value={ system.name }>{ system.name }</MenuItem>
							)
						})
					}
				</Select>
				</FormControl>
			</div>
		);
	}
}