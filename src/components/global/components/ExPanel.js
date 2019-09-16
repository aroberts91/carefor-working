import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 	ExpansionPanel,
			ExpansionPanelDetails,
			ExpansionPanelSummary,
			ExpansionPanelActions,
			Typography,
			Button,
			Divider
		} from "@material-ui/core";
import { ExpandMore, Delete } from '@material-ui/icons';

//A wrapper for Material UI expansion panels. Adds functionality for a button in header and gives
// extended control over expansion feature
export default function ExPanel( props ) {
	const { initial_expanded, title, onButtonClick, button_text, button_type, button_color, children } = props;
	const [ expanded, setExpanded ] = useState( initial_expanded || false );

	function onPanelClick() {
		setExpanded( !expanded );
	}

	function onBtnClick( e ) {
		e.stopPropagation();
		onButtonClick();
	}

	function generateButton() {
		const type = button_type ? button_type.toLowerCase() : '';
		const color = button_color ? button_color : 'primary';

		switch( type ) {
			case 'delete':
				return (
					<Button
						onClick={ onBtnClick }
						style={{ color: 'red' }}
					>
						<Delete/>
					</Button>
				);
				break;
			case 'update':
				return (
					<Button
						color='primary'
						onClick={ onBtnClick }
					>
						Update
					</Button>
				);
				break;
			case 'add':
				return (
					<Button
						color='primary'
						onClick={ onBtnClick }
					>
						Add
					</Button>
				);
				break;
			default:
				return (
					<Button
						color={ color }
						onClick={ onBtnClick }
					>
						{ button_text }
					</Button>
				)
		}
	}

	return (
		<ExpansionPanel expanded={ expanded }>
			<ExpansionPanelSummary expandIcon={ <ExpandMore /> } onClick={ onPanelClick }>
				<Typography style={{ alignSelf: 'center' }}>{ title }</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				{ children }
			</ExpansionPanelDetails>
			{
				( button_type || ( button_text && button_text.length > 1 )) &&
					<>
						<Divider />
						<ExpansionPanelActions>
							{
								generateButton()
							}
						</ExpansionPanelActions>
					</>
			}
		</ExpansionPanel>
	)
}

ExPanel.propTypes = {
	title: PropTypes.string.isRequired,
	initial_expanded: PropTypes.bool,
	onButtonClick: PropTypes.func,
	button_text: PropTypes.string,
	button_type: PropTypes.string,
	button_color: PropTypes.string
};