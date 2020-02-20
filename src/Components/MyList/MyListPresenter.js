import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyList = styled.div`
  padding: 6px 0px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: blue;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default ({ id, caption }) => (
  <MyList>
    <Link to={`/note/${caption}`}>{caption}</Link>
  </MyList>
);
