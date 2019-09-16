import styled from "styled-components";
import {Link} from "react-router-dom";

const NavContainer = styled.header`
	height: 120px;
	//-webkit-box-shadow: 0px 1px 10px #999;
    //-moz-box-shadow: 0px 1px 10px #999;
    box-shadow: 0px 6px 8px #b4b4b4;
`;

const PillarContainer = styled.div`
  	display: flex;
  	//-webkit-box-pack: justify;
  	//-webkit-justify-content: space-between;
  	//-ms-flex-pack: justify;
  	justify-content: space-between;
  	background-color: transparent;
  	height: 50%;
  	font-weight: 400;
  	color: #fff;
`;

const MenuContainer = styled.div`
	height: 50%;
	background-color: ${ props => props.color };
	display: flex;
	transition: all .2s ease-in-out;
`;

const PillarPrimary = styled.nav`
	width: 70%;
`;

const PillarSecondary = styled.nav`
	width: 25%;
`;

const PillarList = styled.ul`
	flex: 1;
	list-style-type: none;
	display: flex;
	height: 100%;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 0;
	margin: 0;
`;

const PillarTransform = styled.span`
	position: relative;
	
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		visibility: hidden;
		//-webkit-transform: scaleX(0);
		transform: scaleX(0);
		//-webkit-transition: all .3s cubic-bezier(1,.25,0,.75) 0s;;
		transition: all .3s cubic-bezier(1,.25,0,.75) 0s;;
  	}
`;

const PillarItem = styled.li`
	height: 100%;
	display: flex;
	flex: 1;
	font-size: 1.4em;
	justify-content: center;
	align-items: center;
	background-color: ${ props => props.color };
	cursor: pointer;
	
	&:hover ${PillarTransform}:before {
		visibility: visible;
		//-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
	
`;

const MenuList = styled(PillarList)`
	
`;

const MenuLink = styled(Link)`
	position: relative;
	text-decoration: none;
	color: #fff;
	text-transform: capitalize;
	
 	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		visibility: hidden;
		//-webkit-transform: scaleX(0);
		transform: scaleX(0);
		//-webkit-transition: all .3s cubic-bezier(1,.25,0,.75) 0s;
		transition: all .3s cubic-bezier(1,.25,0,.75) 0s;;
  	}
`;
const MenuItem = styled.li`
	height: 70%;
	display: flex;
	flex: 1;
	font-size: 1.2em;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 1s ease-in-out;
	
	&:not(:last-child) {
			border-right: solid 1px #fff;
	}
	
	&:hover ${MenuLink}:before {
		visibility: visible;
		//-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
`;

const LogoImg = styled.img`
	padding: 5px;
`;

const TopBarContainer = styled.div`
	background-color: #F5F5F5;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const UserDataContainer = styled.div`
	align-items: center;
	justify-content: space-between;
	display: flex;
`;

export { 	NavContainer,
			PillarContainer,
			PillarTransform,
			MenuContainer,
			PillarPrimary,
			PillarSecondary,
			PillarList,
			PillarItem,
			MenuList,
			MenuItem,
			MenuLink,
			TopBarContainer,
 			LogoImg,
			UserDataContainer,
			 };