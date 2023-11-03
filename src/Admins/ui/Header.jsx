 import styled from "styled-components";
// //import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";


const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
	display: flex;
	gap: 2.4rem;
	align-items: center;
	justify-content: flex-end;
`;



function Header() {
	return (
		<StyledHeader>
			
			<HeaderMenu />
		
		</StyledHeader>
	);
}

export default Header;


// import styled from "styled-components";
// import HeaderMenu from "./HeaderMenu";

// const StyledHeader = styled.header`
// 	background-color: var(--color-grey-0);
// 	padding: 1.2rem 4.8rem;
// 	border-bottom: 1px solid var(--color-grey-100);
// 	display: flex;
// 	gap: 2.4rem;
// 	align-items: center;
// 	justify-content: flex-start; /* Change flex-start to align h2 to the left */
// `;

// function Header() {
// 	return (
// 		<StyledHeader>
// 			<HeaderMenu />
// 			<h2>Admins Details</h2>
// 		</StyledHeader>
// 	);
// }

// export default Header;



