import React from "react";
import PropTypes from "prop-types";
import LikeListPresenter from "./LikeListPresenter";

const LikeListContainer = ({ id, caption }) => {
  return <LikeListPresenter id={id} caption={caption} />;
};

LikeListContainer.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default LikeListContainer;
