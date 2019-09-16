import React from 'react';
import { createMuiTheme } from "@material-ui/core";

const global = {
	success: {
		background: '#43a047'
	},
	error: {
		background: '#d32f2f'
	},
	warning: {
		background: '#ffa000'
	},
};

export const themes = {
	blue: createMuiTheme({
		palette: {
			type: 		'light',
			primary: 	{ main: '#1C74BC' },
			secondary: 	{ main: '#F05E91' },
			backgroundColor: '#F5F5F5'
		},
		global
	}),
	pink: createMuiTheme({
		palette: {
			type: 		'light',
			primary: 	{ main: '#F05E91' },
			secondary: 	{ main: '#1C74BC' },
			backgroundColor: '#F5F5F5'
		},
		global
	}),
	teal: createMuiTheme({
		palette: {
			type: 		'light',
			primary: 	{ main: '#11C0DB' },
			secondary: 	{ main: '#895892' },
			backgroundColor: '#F5F5F5'
		},
		global
	}),
	purple: createMuiTheme({
		palette: {
			type: 		'light',
			primary: 	{ main: '#895892' },
			secondary: 	{ main: '#11C0DB' },
			backgroundColor: '#F5F5F5'
		},
		global
	}),
	orange: createMuiTheme({
		palette: {
			type: 		'light',
			primary: 	{ main: '#ff9800' },
			secondary: 	{ main: '#607d8b' },
			backgroundColor: '#F5F5F5'
		},
		global
	}),
	grey: createMuiTheme({
		palette: {
			type: 		'light',
			primary: 	{ main: '#607d8b' },
			secondary: 	{ main: '#ff9800' },
			backgroundColor: '#F5F5F5'
		},
		global
	})
};