import anakinImg from "../assets/anakin.jpg";
import rayImg from "../assets/ray.jpg";
import lukeImg from "../assets/luke.jpeg";
import thinkImg from "../assets/think.jpeg";
import anonim from "../assets/anonymous.png";
import { ADD_POST } from "./constans";

const initialState = {
	posts: [
		{
			author_img: lukeImg,
			author_name: "Luke Skywalker",
			author_nickname: "@luke_skywalker",
			publication_date: "01 mar.",
			publication_text: "Think about it...",
			publication_img: thinkImg,
			count_like: 213,
			count_comments: 47,
			count_reposts: 36,
		},
		{
			author_img: anakinImg,
			author_name: "Anakin Skywalker",
			author_nickname: "@dart_vader",
			publication_date: "28 febr.",
			publication_text: "WTF? Who is Ray? Why she is a Skywalker? Luke...",
			publication_img: rayImg,
			count_like: 15,
			count_comments: 23,
			count_reposts: 18,
		},
	],
};

function postReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [
					{
						author_img: anonim,
						author_name: action.author,
						author_nickname: "@nick_name",
						publication_date: "02 mar.",
						publication_text: action.postText,
						publication_img: action.postImgSRC,
						count_like: 23,
						count_comments: 60,
						count_reposts: 23,
					},
					...state.posts,
				],
			};
		}
		default:
			return state;
	}
}

export default postReducer;
