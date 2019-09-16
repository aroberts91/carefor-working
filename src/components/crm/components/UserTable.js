import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import {Fab, makeStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const columns = [
	{
		name: 'id',
		label: 'id',
		options: {
			filter: false,
			sort: false,
			display: false,
		}
	},
	{
		name: 'client_ref',
		label: 'Ref',
		options: {
			filter: false,
			sort: true
		}
	},
	{
		name: 'name',
		label: 'Name',
		options: {
			filter: false,
			sort: true
		}
	},
	{
		name: 'current_staff',
		label: 'Current Carer',
		options: {
			filter: true,
			sort: false
		}
	},
	{
		name: 'review_date',
		label: 'Next Review',
		options: {
			filter: true,
			filterType: 'multiselect',
			sort: true
		}
	},
	{
		name: 'age',
		label: 'Age',
		options: {
			filter: false,
			sort: true
		}
	},
	{
		name: 'telephone',
		label: 'Telephone Number',
		options: {
			filter: false,
			sort: false
		}
	},
];

const useStyles = makeStyles( theme => ({
	fab: {
		position: 'absolute',
		bottom: 50,
		right: 50
	}
}));

export default function UserTable({ client_data, selectClient } ) {
	const [ state, setState ] = useState( { table_data: false } );
	const classes = useStyles();

	const table_options = {
		print: false,
		download: false,
		viewColumns: false,
		elevation: 0,
		responsive: 'scroll',
		onRowClick: onRowclick
	};

	function onRowclick( rowData, rowMeta ) {
		return selectClient( rowData[0], rowMeta.dataIndex );
	}

	useEffect(() => {
		let table_data = [];
		client_data.map( ({ node }) => {
			const { id, name, age, current_staff, review_date, telephone } = node;

			table_data.push({
				id,
				client_ref: id,
				name: name.name,
				age,
				current_staff: current_staff ? current_staff : '-',
				review_date,
				telephone: telephone && telephone.number ? telephone.number : '-'
			});
		});

		client_data.map( ({ node }) => {
			const { id, name, age, current_staff, review_date, telephone } = node;

			table_data.push({
				id,
				client_ref: id,
				name: name.name,
				age,
				current_staff: current_staff ? current_staff : '-',
				review_date,
				telephone: telephone && telephone.number ? telephone.number : '-'
			});
		});

		client_data.map( ({ node }) => {
			const { id, name, age, current_staff, review_date, telephone } = node;

			table_data.push({
				id,
				client_ref: id,
				name: name.name,
				age,
				current_staff: current_staff ? current_staff : '-',
				review_date,
				telephone: telephone && telephone.number ? telephone.number : '-'
			});
		});

		client_data.map( ({ node }) => {
			const { id, name, age, current_staff, review_date, telephone } = node;

			table_data.push({
				id,
				client_ref: id,
				name: name.name,
				age,
				current_staff: current_staff ? current_staff : '-',
				review_date,
				telephone: telephone && telephone.number ? telephone.number : '-'
			});
		});

		setState( { table_data } )
	}, []);

	if( !state.table_data )
		return null;

	return (
		<>
			<MUIDataTable
				title='Service Users'
				data={ state.table_data }
				columns={ columns }
				options={ table_options }
			/>
			<Fab aria-label='Add a User' className={ classes.fab } color='secondary'>
				<AddIcon />
			</Fab>
		</>
	);
}