import React from "react";
import PropTypes from "prop-types";
import MyListPresenter from "./MyListPresenter";

const MyListContainer = ({ id, caption }) => {
  return <MyListPresenter id={id} caption={caption} />;
};

MyListContainer.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default MyListContainer;
