import React, { useState } from "react";
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery } from "react-apollo-hooks";
import NotePlusPresenter from "./NotePlusPresenter";
import PropTypes from "prop-types";

const NotePlusContainer = ({ username }) => {
  return <NotePlusPresenter username="sdsd" />;
};

NotePlusContainer.propTypes = {
  username: PropTypes.string.isRequired
};

export default NotePlusContainer;
