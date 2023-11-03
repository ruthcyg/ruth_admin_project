/* eslint-disable react/prop-types */
//import React from "react";
import styled from "styled-components";

// const StyledPagination = styled.div`
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

/* eslint-disable react/prop-types */
//import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
//import { useSearchParams } from "react-router-dom";
//import styled from "styled-components";
//import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const P = styled.p`
	font-size: 1.4rem;
	margin-left: 0.8rem;

	& span {
		font-weight: 600;
	}
`;

const Buttons = styled.div`
	display: flex;
	gap: 0.6rem;
`;

const PaginationButton = styled.button`
	background-color: ${(props) =>
		props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
	color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
	border: none;
	border-radius: var(--border-radius-sm);
	font-weight: 500;
	font-size: 1.4rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
	padding: 0.6rem 1.2rem;
	transition: all 0.3s;

	&:has(span:last-child) {
		padding-left: 0.4rem;
	}

	&:has(span:first-child) {
		padding-right: 0.4rem;
	}

	& svg {
		height: 1.8rem;
		width: 1.8rem;
	}

	&:hover:not(:disabled) {
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
	}
`;

function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	showFirstLastButtons = true,
	showPreviousNextButtons = true,
}) {
	const range = (start, end) => {
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	};

	return (
		<StyledPagination>
			
				{showFirstLastButtons && (
					<PaginationButton onClick={() => onPageChange(1)}>
						<span>First</span>
					</PaginationButton>
				)}
				
					{showPreviousNextButtons && currentPage > 1 && (
						<PaginationButton
							//key={page}
							onClick={() => onPageChange(currentPage - 1)}
						>
							<span>Previous</span>
						</PaginationButton>
					)}
					{range(1, totalPages).map((page) => (
						<PaginationButton
							key={page}
							onClick={() => onPageChange(page)}
							disabled={page === currentPage}
						>
							<span>{page}</span>
						</PaginationButton>
					))}
					
					{showFirstLastButtons && (
						<PaginationButton onClick={() => onPageChange(totalPages)}>
							<span>Last</span>
						</PaginationButton>
					)}
				
			
		</StyledPagination>
	);
}

export default Pagination;
