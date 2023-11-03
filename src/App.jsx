
import GlobalStyles from "../src/Admins/styles/GlobalStyles";

import { DarkModeProvider } from "./Admins/context/DarkModeContext";
import AppLayout from "./Admins/ui/AppLayout";

function App() {
	return (
		<>
			<DarkModeProvider>
				<GlobalStyles />
				<AppLayout />
			</DarkModeProvider>
		</>
	);
}

export default App;
