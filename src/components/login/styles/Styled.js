import styled from 'styled-components'

const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	align-content: center;
	justify-content: center;
`;

const LoginBackground = styled.div`
     background-image: linear-gradient(to right bottom, rgba(28, 116, 188, 0.7), rgba(0, 136, 201, 0.7), rgba(0, 155, 209, 0.7), rgba(0, 174, 215, 0.7), rgba(17, 192, 219, 0.7)),url("https://internal.care-for-it.com/images/bg-home.jpg");
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 30px;
    z-index: -50;
`;

export { LoginContainer, LoginBackground };