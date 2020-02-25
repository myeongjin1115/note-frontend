import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";

import FollowButton from "../../Components/FollowButton";
const FullName = styled(FatText)`
  font-size: 16px;
`;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;
const Username = styled.span`
  font-size: 26px;
  display: block;
`;

export default ({ username }) => {
  console.log(username);
  if (username!==undefined) {
    return (
      <Wrapper>
        <title>{"dzdzd"}</title>
      </Wrapper>
    );
  }
  return "dsds";
};
