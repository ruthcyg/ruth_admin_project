// apiAdmin.js
import { API_URL } from "./config"; 
import { fetchJson } from "./apiUtils"; 

export async function getAdmin() {
	try {
		const data = await fetchJson(API_URL);
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
