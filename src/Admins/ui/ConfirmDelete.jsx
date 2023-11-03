import PropTypes from "prop-types";
// import styled from "styled-components";
// import Button from "./Button";
// import Heading from "./Heading";

// const StyledConfirmDelete = styled.div`
// 	width: 40rem;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 1.2rem;

// 	& p {
// 		color: var(--color-grey-500);
// 		margin-bottom: 1.2rem;
// 	}

// 	& div {
// 		display: flex;
// 		justify-content: flex-end;
// 		gap: 1.2rem;
// 	}
// `;

//  ConfirmDelete({ resourceName, onConfirm, disabled }) {

// 	return (
// 		<StyledConfirmDelete>
// 			<Heading as="h3">Delete {resourceName}</Heading>
// 			<p>
// 				Are you sure you want to delete this {resourceName} permanently? This
// 				action cannot be undone.
// 			</p>

// 			<div>
// 				<Button variation="secondary" disabled={disabled}>
// 					Cancel
// 				</Button>
// 				<Button variation="danger" disabled={disabled}>
// 					Delete
// 				</Button>
// 			</div>
// 		</StyledConfirmDelete>
// 	);
// }

import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

// eslint-disable-next-line react/prop-types
function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
	return (
		<StyledConfirmDelete>
			<Heading as="h3">Delete {resourceName}</Heading>
			<p>
				Are you sure you want to delete this {resourceName} permanently? This
				action cannot be undone.
			</p>

			<div>
				<Button
					size="large"
					variation="secondary"
					disabled={disabled}
					onClick={onCloseModal}
				>
					Cancel
				</Button>
				<Button
					size="large"
					variation="danger"
					disabled={disabled}
					onClick={onConfirm}
				>
					Delete
				</Button>
			</div>
		</StyledConfirmDelete>
	);
}



ConfirmDelete.propTypes = {
	resourceName: PropTypes.string.isRequired, // resourceName should be a string and is required
	onConfirm: PropTypes.func.isRequired, // onConfirm should be a function and is required
	
	disabled: PropTypes.bool, // disabled is optional and should be a boolean
};

export default ConfirmDelete;
