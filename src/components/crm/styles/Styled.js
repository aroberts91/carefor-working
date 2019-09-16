import React from 'react';
import styled, { css } from 'styled-components';
import { Paper } from '@material-ui/core';

//filter out non-standard props (stops referencing error)
const UserPaper = styled(({ selected_client, ...props }) => <Paper {...props} />)`
	${ props => props.selected_client ? 
		css`
		height: 100%;
		margin-left: 0;
		width: 25%;
		z-index: 200;
	` 
	:
		css`
		width: 80%;
		margin: auto;
	`}
`;

const ServiceUsersContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`;

const UserListContainer = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
`;

const UserContainer = styled.div`
	width: ${ props => props.selected_client ? `100%` : 0 };
	overflow: scroll;
`;

const AddUserContainer = styled.div`
	width: ${ props => props.add_user ? '100%' : 0 };
	overflow: scroll;
`;

const AddContactHead = styled.div`
	padding: 0 24px;
`;

const TitleContainer = styled.div`
	margin: 12px 0; 
`;

export { UserPaper, ServiceUsersContainer, UserListContainer, UserContainer, AddContactHead, TitleContainer, AddUserContainer };
