/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// //import React from "react";

// // function SearchInput({ placeholder, onChange }) {
// // 	const handleInputChange = (e) => {
// // 		const searchText = e.target.value;
// // 		onChange(searchText);
// // 	};

// // 	return (
// // 		<input type="text" placeholder={placeholder} onChange={handleInputChange} />
// // 	);
// // }

// // export default SearchInput;
import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
`;

const StyledMessage = styled.p`
	color: #ff0000;
	font-size: 14px;
	margin-top: 4px;
`;

// import  { useState } from "react";

// function SearchInput({ placeholder, onChange }) {
// 	const [searchText, setSearchText] = useState("");

// 	const handleInputChange = (e) => {
// 		const newText = e.target.value;
// 		setSearchText(newText);
// 		onChange(newText);
// 	};

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				placeholder={placeholder}
// 				value={searchText}
// 				onChange={handleInputChange}
// 			/>
// 			{searchText && !searchText.trim()}
// 		</div>
// 	);
// }

// export default SearchInput;

// function SearchInput({ placeholder, onChange, handleSearch  }) {
// 	const [searchText, setSearchText] = useState("");

// 	const handleInputChange = (e) => {
// 		const newText = e.target.value;
// 		setSearchText(newText);
// 		onChange(newText);
// 	};

// 	return (
// 		<div>
// 			<StyledInput
// 				//type="text"
// 				//placeholder={placeholder}
// 				//value={searchText}
// 				//onChange={handleInputChange}
// 				type="text"
// 				placeholder={placeholder}
// 				value={searchText}
// 				onChange={handleSearch}
// 			/>
// 			{searchText && !searchText.trim() && (
// 				<StyledMessage>Please enter a search term.</StyledMessage>
// 			)}
// 		</div>
// 	);
// }
//  export default SearchInput;
import Input from "../ui/Input";

function SearchInput({ value, onChange }) {
	//const [searchText, setSearchText] = useState("");
	return (
		
			<Input
				type="text"
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>

		
	);
}

export default SearchInput;
