import React, { Component } from 'react';
import { Typography } from "@material-ui/core";
import axios from 'axios';

import { 	NavContainer,
	PillarContainer,
	PillarPrimary,
	PillarList,
	PillarItem,
	PillarTransform,
	PillarSecondary,
	MenuContainer,
	MenuList,
	MenuItem,
	MenuLink } from '../styles/Styled';


export default class NavBar extends Component {
	render() {
		const { pillar_data, menu_items, selected_pillar } = this.props;

		const selected_pillar_data = pillar_data[ selected_pillar ];

		return(
			<NavContainer>
				<PillarContainer>
					<PillarPrimary>
						<PillarList>
							{
								//TODO: remove colour changes when color implemented
								pillar_data.map( ({ name, colour, id }, index) => {
									if( name !== 'CRM' && name !== 'HR' ) {
										return (
											<PillarItem
												onClick={ this.props.selectPillar.bind( this, index ) }
												color={ `#${ colour }` }
												key={ index }
												selected={ index === selected_pillar }
											>
												<PillarTransform>
													<Typography variant='h6' component='h1'>
														{ name }
													</Typography>
												</PillarTransform>
											</PillarItem>
										)
									}
								})
							}
						</PillarList>
					</PillarPrimary>
					<PillarSecondary>
						<PillarList>
							{
								pillar_data.map( ({ name, colour, id }, index) => {
									if( name === 'CRM' || name === 'HR' ) {
										return (
											<PillarItem
												onClick={ this.props.selectPillar.bind( this, index ) }
												color={ `#${ colour }` }
												key={ index }
												selected={ index === selected_pillar }
											>
												<PillarTransform>
													<Typography variant='h6' component='h1'>
														{ name }
													</Typography>
												</PillarTransform>
											</PillarItem>
										)
									}
								})
							}
						</PillarList>
					</PillarSecondary>
				</PillarContainer>
				<MenuContainer color={ `#${selected_pillar_data.colour}` }>
					<MenuList>
						{
							menu_items.map( ({ id, name, uri }, index) => {
								if( name === 'View Service Users' )
									return <MenuItem key={ index }><MenuLink to={ '/service_users' }><Typography>{ name }</Typography></MenuLink></MenuItem>

								return <MenuItem key={ index }><MenuLink to={ uri }><Typography>{ name }</Typography></MenuLink></MenuItem>
							})
						}
					</MenuList>
				</MenuContainer>
			</NavContainer>
		)
	}
}