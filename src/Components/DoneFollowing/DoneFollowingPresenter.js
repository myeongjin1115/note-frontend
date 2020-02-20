import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DoneFollowingWrapper = styled.div`
  margin: 20px;
`;

const DoneFollowing = styled.div`
  border-bottom: 1px solid #e1e4e8;
  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
  a:hover {
    text-decoration: none;
    color: blue;
  }
`;

const Header = styled.div`
  margin: 10px 0px;
`;

const WordBook = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 25px;
  a {
    font-size: large;
  }
`;

export default ({ username, posts }) => (
  <DoneFollowingWrapper>
    {posts.map(post => (
      <DoneFollowing>
        <Header>
          <Link to={`/user/${username}`}>{username}</Link> created wordbook{" "}
          <Link to={`/wordbook/${post.caption}`}>{post.caption}</Link>{" "}
          {post.createdAt}
        </Header>
        <WordBook>
          <Link to={`/wordbook/${post.caption}`}>{post.caption}</Link>
        </WordBook>
      </DoneFollowing>
    ))}
  </DoneFollowingWrapper>
);
