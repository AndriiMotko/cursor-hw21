import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { useSelector } from "react-redux";
import AddPostForm from "./components/AddPostForm/AddPostForm";

function App() {
	const postFromStore = useSelector((store) => store.posts);
	return (
		<div className="App">
			<AddPostForm />
			{postFromStore.map((post, index) => (
				<Post {...post} key={index} />
			))}
		</div>
	);
}

export default App;
