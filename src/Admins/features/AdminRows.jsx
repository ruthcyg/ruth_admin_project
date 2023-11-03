/* eslint-disable react/prop-types */

import { useState } from "react";

import { HiPencil, HiTrash } from "react-icons/hi"; // Import icons as needed

import styled from "styled-components";
import UserEditForm from "./UserEditForm";
import Table from "../ui/Table";
import Modal from "../ui/Modal";
import Menus from "../ui/Menus";
import Checkbox from "../ui/Checkbox";
import ConfirmDelete from "../ui/ConfirmDelete";
import SearchInput from "./SearchInput";

const Stacked = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	& span:first-child {
		font-weight: 400;
	}

	& span:last-child {
		color: var(--color-grey-500);
		font-size: 1.6rem;
	}
`;

//import styled from "styled-components";

// const StyledAdminRow = styled.div`
// 	background-color: ${(props) =>
// 		props.isSelected ? "red" : "transparent"};

// `;

function AdminRow({
	user,
	handleSelectRow,
	handleEditUser,
	users,
	setUsers,
	handleSearch,
	search,
}) {
	const { name, email, role, id } = user;
	const [isDeleting, setIsDeleting] = useState(false);
	//const isDeleting = false

	// const isRowSelected = selectedRows.includes(user.id);

	const handleConfirmDelete = () => {
		handleDeleteUserLocally(id);
	};

	const handleDeleteUserLocally = (userId) => {
		// Filter out the user with the specified userId
		const updatedUsers = users.filter((u) => u.id !== userId);
		setUsers(updatedUsers);
	};

	return (
		<Table.Row>
			<Checkbox
				type="checkbox"
				checked={user.selected}
				onChange={() => handleSelectRow(user.id)}
			/>

			<Stacked>
				<span>{name}</span>
			</Stacked>
			<Stacked>
				<span>{email}</span>
			</Stacked>
			<Stacked>
				<span>{role}</span>
			</Stacked>

			{/* ... other table cells */}
			<div>
				<Modal>
					<Menus.Menu>
						<Menus.Toggle id={id} />
						<Menus.List id={id}>
							<Modal.Open opens="edit">
								<Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
							</Modal.Open>
							<Modal.Open opens="delete">
								<Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
							</Modal.Open>
						</Menus.List>
						<Modal.Window name="edit">
							{/* Use edit form here */}
							<UserEditForm user={user} handleEditUser={handleEditUser} />
						</Modal.Window>
						<Modal.Window name="delete">
							<ConfirmDelete
								resourceName="users"
								disabled={isDeleting}
								onConfirm={handleConfirmDelete}
							/>
						</Modal.Window>
					</Menus.Menu>
				</Modal>
			</div>
		</Table.Row>
	);
}

export default AdminRow;
