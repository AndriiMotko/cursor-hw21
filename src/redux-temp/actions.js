import { ADD_POST} from "./constans";

export const actionAddPost = (author, postText, postImgSRC) => {
	return {
		type: ADD_POST,
		author,
		postText,
		postImgSRC,
	};
};

