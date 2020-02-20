import React from "react";
import PropTypes from "prop-types";
import DoneFollowingPresenter from "./DoneFollowingPresenter";

const DoneFollowingContainer = ({ username, posts }) => {
  return <DoneFollowingPresenter username={username} posts={posts} />;
};

DoneFollowingContainer.propTypes = {
  username: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  )
};

export default DoneFollowingContainer;
