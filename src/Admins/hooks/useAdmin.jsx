

import { useState, useEffect } from "react";

import {getAdmin} from "../services/apiAdmin"

function useAdmin() {
	const [users, setUsers] = useState([]);
	const [selectedRows, setSelectedRows] = useState([]);
	const [search, setSearch] = useState("");
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	//const [confirmDeleteData, setConfirmDeleteData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const responseUsers = await getAdmin();
				setUsers(responseUsers);
			} catch (err) {
				setError(err);
			}
		}
		fetchData();
	}, []);

	

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleSelectRow = (userId) => {
		setSelectedRows((prevSelected) => {
			if (prevSelected.includes(userId)) {
				return prevSelected.filter((id) => id !== userId);
			} else {
				return [...prevSelected, userId];
			}
		});
	};

	const handleDeleteSelected = (updatedUsers) => {
		setUsers(updatedUsers);
		setSelectedRows([]); // Clear selected rows after deletion
	};

	const handleEditUser = (userId, property, newValue) => {
		setUsers((prevUsers) => {
			return prevUsers.map((user) => {
				if (user.id === userId) {
					return { ...user, [property]: newValue };
				}
				return user;
			});
		});
	};

	

    const handleSearch = (query) => {
			setSearch(query); // Set the search query as is
			setCurrentPage(1);
		};

		// ...

		const filteredUsers = users.filter((user) => {
			const userIdString = user.id.toString(); // Convert the user's id to a string
			return userIdString.includes(search);
		});


	return {
		users,
		filteredUsers,
		selectedRows,
		search,
		currentPage,
		handleSearch,
		handlePageChange,
		handleSelectRow,
		handleDeleteSelected,
		handleEditUser,
	};
}

export default useAdmin;




