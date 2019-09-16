import styled from 'styled-components';
import { Icon } from "@material-ui/core";


const SelectContainer = styled.div`
	height: 5%;
	width: 100%;
	flex-direction: row;
	display: flex;
`;

const SelectTab = styled.button`
	width: 50%;
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
	color: ${ props => props.selected ? 'red' : 'blue' }
	border: none;
	border-top: 1px solid #ababab;
	
	
	&:not(:first-child) {
		border-left: 1px solid #fff;
	}
`;

const NoStaffContainer = styled.div`
	text-align: center;
	margin-top: 10px;
`;

export {
	SelectContainer,
	SelectTab,
	NoStaffContainer
};
