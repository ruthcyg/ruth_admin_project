/* eslint-disable react/prop-types */

import { useState } from "react";

import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import Input from "../ui/Input";

function UserEditForm({ user, handleEditUser, onCloseModal }) {
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [role, setRole] = useState(user.role);

	const handleSave = () => {
		handleEditUser(user.id, "name", name);
		handleEditUser(user.id, "email", email);
		handleEditUser(user.id, "role", role);

		onCloseModal?.();
	};

	return (
		<Form key={user.id} type={onCloseModal ? "modal" : "regular"}>
			<FormRow label="Name">
				<Input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</FormRow>
			<FormRow label="Email">
				<Input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormRow>
			<FormRow label="Role">
				<Input
					type="text"
					value={role}
					onChange={(e) => setRole(e.target.value)}
				/>
			</FormRow>
			<FormRow>
				<Button
					size="large"
					variation="secondary"
					type="reset"
					onClick={() => onCloseModal?.()}
				>
					Cancel
				</Button>
				<Button type="button" size="large" onClick={handleSave}>
					Save
				</Button>
			</FormRow>
		</Form>
	);
}

export default UserEditForm;
