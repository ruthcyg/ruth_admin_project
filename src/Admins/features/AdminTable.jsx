/* eslint-disable react/prop-types */

// import { useState } from "react";
// import useAdmin from "../hooks/useAdmin";
// import { ITEMS_PER_PAGE } from "../utils/constants.js";
// import SearchInput from "./SearchInput";
// import Pagination from "./Pagination";
// import AdminRow from "./AdminRows";
// import Table from "../ui/Table";
// import Menus from "../ui/Menus";
// import Button from "../ui/Button";
// import Checkbox from "../ui/Checkbox";
// import Header from "../ui/Header";
// function AdminTable() {
// 	const {
// 		users,
// 		handleSearch,
// 		filteredUsers,
// 		selectedRows,
// 		handleDeleteSelected,
// 		handleEditUser,
// 		search,
// 		handleSelectRow,
// 	} = useAdmin();

// 	const [currentPage, setCurrentPage] = useState(1);

// 	const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

// 	const handlePageChange = (page) => {
// 		setCurrentPage(page);
// 	};

// 	const adminDisplays = filteredUsers.slice(
// 		(currentPage - 1) * ITEMS_PER_PAGE,
// 		currentPage * ITEMS_PER_PAGE
// 	);

// 	// Function to handle the deletion of selected rows
// 	const handleDeleteSelectedRows = () => {
// 		// Filter out the selected rows from the 'users' state
// 		const updatedUsers = users.filter(
// 			(user) => !selectedRows.includes(user.id)
// 		);
// 		handleDeleteSelected(updatedUsers);
// 	};

// 	return (
// 		<>
// 			<SearchInput
// 				value={search}
// 				onChange={(e) => handleSearch(e.target.value)}
// 			/>

// 			<Menus>
// 				<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
// 					<Table.Header>
// 						<div>
// 							<Checkbox />
// 						</div>
// 						<div>Name</div>
// 						<div>Email</div>
// 						<div>Role</div>
// 						<div>Action</div>
// 					</Table.Header>

// 					<Table.Body
// 						data={adminDisplays}
// 						render={(user) => (
// 							<AdminRow
// 								user={user}
// 								key={user.id}
// 								handleSelectRow={handleSelectRow}
// 								handleEditUser={handleEditUser}
// 								users={users}
// 								setUsers={handleDeleteSelected}
// 							/>
// 						)}
// 					/>

// 					<Table.Footer>
// 						<Button
// 							variation="danger"
// 							size="small"
// 							onClick={handleDeleteSelectedRows}
// 						>
// 							Delete Selected
// 						</Button>
						
// 						<Pagination
// 							currentPage={handlePageChange}
// 							totalPages={totalPages}
// 							onPageChange={handlePageChange}
// 							showFirstLastButtons={true}
// 							showPreviousNextButtons={true}
// 						/>
// 					</Table.Footer>
// 				</Table>
// 			</Menus>
// 		</>
// 	);
// }

// export default AdminTable;


import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
import { ITEMS_PER_PAGE } from "../utils/constants.js";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import AdminRow from "./AdminRows";
import Table from "../ui/Table";
import Menus from "../ui/Menus";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";


function AdminTable() {
	const {
		users,
		handleSearch,
		filteredUsers,
		selectedRows,
		handleDeleteSelected,
		handleEditUser,
		search,
		handleSelectRow,
	} = useAdmin();

	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const adminDisplays = filteredUsers.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	// Function to handle the deletion of selected rows
	const handleDeleteSelectedRows = () => {
		// Filter out the selected rows from the 'users' state
		const updatedUsers = users.filter(
			(user) => !selectedRows.includes(user.id)
		);
		handleDeleteSelected(updatedUsers);
	};

	return (
		<>
			<SearchInput
				value={search}
				onChange={(e) => handleSearch(e.target.value)}
			/>

			<Menus>
				<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
					<Table.Header>
						<div>
							<Checkbox />
						</div>
						<div>Name</div>
						<div>Email</div>
						<div>Role</div>

						<div>Action</div>
					</Table.Header>

					<Table.Body
						data={adminDisplays}
						render={(user) => (
							<AdminRow
								user={user}
								key={user.id}
								handleSelectRow={handleSelectRow}
								handleEditUser={handleEditUser}
								users={users}
								setUsers={handleDeleteSelected}
							/>
						)}
					/>

					<Table.Footer>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Button
								variation="danger"
								size="small"
								onClick={handleDeleteSelectedRows}
							>
								Delete Selected
							</Button>
						</div>
						<div style={{ margin: "10px" }}></div> {/* Add space here */}
						<Pagination
							currentPage={handlePageChange}
							totalPages={totalPages}
							onPageChange={handlePageChange}
							showFirstLastButtons={true}
							showPreviousNextButtons={true}
						/>
					</Table.Footer>
				</Table>
			</Menus>
		</>
	);
}

export default AdminTable;



