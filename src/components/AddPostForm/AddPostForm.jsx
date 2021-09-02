import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddPostForm.css";
import { actionAddPost } from "../../redux-temp/actions";

const AddPostForm = () => {
	const [author, setAuthor] = useState("Leia Organa");
	const [postText, setPostText] = useState(
		"Father you lost so much time and you don`t know many things..."
	);
	const [postImgSRC, setPostImgSRC] = useState(
		"https://lumiere-a.akamaihd.net/v1/images/image_0cf9f654.jpeg?region=0%2C0%2C1920%2C1080&width=1536"
	);

	const selectAuthor = (e) => {
		setAuthor(e.target.value);
	};
	const addPostText = (e) => {
		setPostText(e.target.value);
	};
	const addPostImgSRC = (e) => {
		setPostImgSRC(e.target.value);
	};

	const dispatch = useDispatch();

	const addPostOnClick = (e) => {
		dispatch(actionAddPost(author, postText, postImgSRC));
	};

	return (
		<div className="addPostWrapper">
			<span>Select author</span>
			<select onChange={selectAuthor}>
				<option>Leia Organa</option>
				<option>Han Solo</option>
				<option>Padmé Amidala</option>
			</select>
			<span>Add post text</span>
			<textarea rows={5} value={postText} onChange={addPostText}></textarea>
			<span>Add post image</span>
			<input type="text" value={postImgSRC} onChange={addPostImgSRC} />
			<button className="btn-grad" onClick={addPostOnClick}>
				Add Post
			</button>
		</div>
	);
};

export default AddPostForm;
