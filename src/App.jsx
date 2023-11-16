import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import LayoutDefault from "pages/LayoutDefault/LayoutDefault";
import Post from "pages/Post/Post";

function App() {
	return (
		<BrowserRouter>
			<Menu></Menu>
			<Routes>
				<Route path="/" element={<LayoutDefault></LayoutDefault>}>
					<Route index element={<Home></Home>}></Route>
					<Route path="post/:id" element={<Post></Post>}></Route>
					<Route path="about" element={<About></About>}></Route>
				</Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
