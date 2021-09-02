import React, { useState } from "react";
import "./Post.css";

import commentIcon from "../../assets/speech-bubble.png";
import retwittIcon from "../../assets/retweet.png";
import likeIcon from "../../assets/heart.png";
import forwardIcon from "../../assets/upload.png";

const Post = ({
	author_img,
	author_name,
	author_nickname,
	publication_date,
	publication_text,
	publication_img,
	count_like,
	count_comments,
	count_reposts,
}) => {
	const [countComments, setCountComments] = useState(count_comments);
	const [countLikes, setCountLikes] = useState(count_like);
	const [countReposts, setCountReposts] = useState(count_reposts);
	const [isClickedComments, setIsClickedComments] = useState(false);
	const [isClickedLikes, setIsClickedLikes] = useState(false);
	const [isClickedReposts, setIsClickedReposts] = useState(false);

	const onClickComment = (e) => {
		if (isClickedComments) {
			setCountComments(countComments - 1);
			setIsClickedComments(false);
		} else {
			setCountComments(countComments + 1);
			setIsClickedComments(true);
		}
	};

	const onClickLikes = (e) => {
		if (isClickedLikes) {
			setCountLikes(countLikes - 1);
			setIsClickedLikes(false);
		} else {
			setCountLikes(countLikes + 1);
			setIsClickedLikes(true);
		}
	};

	const onClickReposts = (e) => {
		if (isClickedReposts) {
			setCountReposts(countReposts - 1);
			setIsClickedReposts(false);
		} else {
			setCountReposts(countReposts + 1);
			setIsClickedReposts(true);
		}
	};

	return (
		<div className="post">
			<div className="post-body">
				<img className="author-photo" src={author_img} alt="author" />
				<div className="article">
					<div>
						<span className="author-name"> {author_name} </span>
						<span className="author-nickname"> {author_nickname} </span>
						<span className="date"> {publication_date} </span>
					</div>
					<div className="post-text"> {publication_text} </div>
					<img className="post-photo" src={publication_img} alt="post" />
				</div>
			</div>
			<div className="actions">
				<span>
					<img src={commentIcon} alt="commentIcon" onClick={onClickComment} />{" "}
					{countComments}
				</span>
				<span>
					<img src={retwittIcon} alt="retwittIcon" onClick={onClickReposts} />{" "}
					{countReposts}
				</span>
				<span>
					<img src={likeIcon} alt="likeIcon" onClick={onClickLikes} />{" "}
					{countLikes}
				</span>
				<span>
					<img src={forwardIcon} alt="forwardIcon" />
				</span>
			</div>
		</div>
	);
};

export default Post;
