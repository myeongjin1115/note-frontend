import React from "react";
import PropTypes from "prop-types";
import DoneFollowingPresenter from "./DoneFollowingPresenter";

const DoneFollowingContainer = ({ username, following, posts, likes }) => {
  return (
    <DoneFollowingPresenter
      username={username}
      following={following}
      posts={posts}
      likes={likes}
    />
  );
};

DoneFollowingContainer.propTypes = {
  username: PropTypes.string.isRequired,
  following: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ),
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ),
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired
      }),
      createdAt: PropTypes.string.isRequired
    })
  )
};

export default DoneFollowingContainer;
