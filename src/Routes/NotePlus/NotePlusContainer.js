import React from "react";
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery } from "react-apollo-hooks";
import NotePlusPresenter from "./NotePlusPresenter";

export default withRouter(
  ({
    match: {
      params: { username }
    }
  }) => {
    return <NotePlusPresenter />;
  }
);
