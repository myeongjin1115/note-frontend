import React from "react";
import styled from "styled-components";
import { Link,withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { NotePlus, User, SeeNotes } from "./Icons";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.lightYellow};
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 90%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 45px;
  }
`;

const ME = gql`
  {
    me {
      username
    }
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const meQuery = useQuery(ME);
  console.log(meQuery);
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <img
              src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/2019-logo-maker/Custom-Logos.png"
              width="45"
              height="36"
              alt=""
            />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
        <form onSubmit={onSearchSubmit}>
            <SearchInput {...search} placeholder="Search" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/noteplus">
            <NotePlus />
          </HeaderLink>

          <HeaderLink to="/SeeNotes">
            <SeeNotes />
          </HeaderLink>

          <HeaderLink to="/username">
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});