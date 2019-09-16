import React from 'react';
import { Icon, makeStyles, IconButton, Popover, TextField, List, InputAdornment } from "@material-ui/core";
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles( theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		minWidth: 180
	},
	iconStyle: {
		color: theme.palette.primary.main,
		cursor: 'pointer'
	},
	listIcon: {
		marginRight: 10
	},
	menuLink: {
		textDecoration: 'none'
	},
	searchBar: {
		margin: '5px 10px 5px 10px',
		minWidth: 260
	}

}));

export default function SearchAvatar( props ) {
	const [ anchorEl, setAnchorEl ] = React.useState( null );

	const [ values, setValues ] = React.useState({
		search_input: ''
	});

	const classes = useStyles();

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	const handleChange = search_input => event => {
		setValues({ ...values, [ search_input ]: event.target.value })
	};

	function handleClose() {
		setAnchorEl(null);
	}

	const open = Boolean(anchorEl);
	const id = open ? 'user-popover' : undefined;

	return (
		<>
			<IconButton onClick={handleClick}>
				<Search aria-describedby={id} fontSize='large' variant="contained" className={ classes.iconStyle } />
			</IconButton>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<List component='div'>
					<TextField
						id='search-input'
						label='Search'
						value={ values.search_input }
						onChange={ handleChange( 'search_input' ) }
						margin='normal'
						className={ classes.searchBar }
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<Icon>search</Icon>
								</InputAdornment>
							),
						}}
					/>
				</List>
			</Popover>
		</>
	);
}