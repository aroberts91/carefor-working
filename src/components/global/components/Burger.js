import React from 'react';
import clsx from 'clsx';
import '../styles/Burger.css';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
	line: {
		background: theme.palette.primary.main
	},
	a: {
		color: '#95a5a6',
		'&:hover': {
			color: '#ecf0f1',
		}
	},
	open_link: {
		left: '20% !important',
		'.line-1': {
			transform: 'translateY(25px) translateX(0) rotate(45deg)'
		},
		'.line-2': {
			opacity: 0
		},
		'.line-3': {
			transform: 'translateY(-25px) translateX(0) rotate(-45deg)'
		},

	}
}));

function Burger( { theme, onClick, open, drawer_width } ) {
	const classes = useStyles()

	return (
		<a id="hamburger-icon" className={ clsx( classes.a, open && classes.open_link ) } onClick={ onClick } title="Menu">
			<span className={clsx( 'line', 'line-1', classes.line )}></span>
			<span className={clsx( 'line', 'line-2', classes.line )}></span>
			<span className={clsx( 'line', 'line-3', classes.line )}></span>
		</a>
	);
}

export const DrawerButton = ( { drawer_width, open, onClick, theme } ) => {

	return (
		<Burger
			drawer_width={ drawer_width }
			open={ open }
			onClick={ onClick }
			theme={ theme }
		/>
	)
}

