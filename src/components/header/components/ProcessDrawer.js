import React, { Component } from 'react';
import {Container, Drawer, Grid, Icon, Divider, List, ListItem, Typography} from "@material-ui/core";

export default class ProcessDrawer extends Component{

	render() {
		const { open, onClose, processes } = this.props;

		return (
			<Drawer anchor='top' open={ open } onClose={ onClose.bind( this, false ) }>
				<Container>
					<List component='ul'>
					{
						processes.map( ( process, index ) => {
							return (
								<div key={ process.id }>
									<ListItem >
										<Grid container spacing={ 2 } style={{ alignItems: 'center' }}>
											<Grid item xs style={{ alignItems: 'baseline' }}>
												{
													process.percent_complete === 100 ?
														<Icon>{ process.icon }</Icon>
														:
														<Icon><img style={{ width: '100%' }} src={ require('../../../assets/images/C4IT faster.gif') }/></Icon>
												}
											</Grid>
											<Grid item xs style={{ alignItems: 'baseline' }}>
												<Typography><strong>Name: </strong>{ process.name }</Typography>
											</Grid>
											<Grid item xs style={{ alignItems: 'baseline' }}>
												<Typography><strong>Status: </strong>{ process.status }</Typography>
											</Grid>
											<Grid item xs style={{ alignItems: 'baseline' }}>
												<Typography><strong>Progress: </strong>{ process.percent_complete }%</Typography>
											</Grid>
											<Grid item xs style={{ alignItems: 'baseline' }}>
												<Typography><strong>Started: </strong>{ process.created_at }</Typography>
											</Grid>
										</Grid>
									</ListItem>
									{
										( index + 1 ) !== processes.length &&
											<Divider component='li' />
									}
								</div>
							)
						} )
					}
					</List>
				</Container>
			</Drawer>
		);
	}
}