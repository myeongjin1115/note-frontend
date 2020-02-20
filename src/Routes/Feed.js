import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import LikeList from "../Components/LikeList";
import MyList from "../Components/MyList";
import DoneFollowing from "../Components/DoneFollowing";

export const FEED_QUERY = gql`
  {
    me {
      likes {
        post {
          id
          caption
        }
      }

      posts {
        id
        caption
      }

      following {
        username
        posts {
          id
          caption
          createdAt
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div`
  flex-direction: column;
  background-color: ${props => props.theme.whiteBox};
  width: 350px;
  border-right: 1px solid #e1e4e8;
`;

const LeftColumn = styled.div`
  padding: 0px 24px;
`;

const LikeListBox = styled.div`
  border-bottom: 1px solid #e1e4e8;
  padding: 30px 0px;
`;

const MyListBox = styled.div`
  padding: 30px 0px;
`;

const FatText = styled.div`
  padding-bottom: 30px;
  font-size: large;
  font-weight: bold;
`;

const RightWrapper = styled.div`
  width: 100%;
  flex-direction: column;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.me) {
    const {
      me: { likes, posts, following }
    } = data;
    return (
      <Wrapper>
        <LeftWrapper>
          <LeftColumn>
            <LikeListBox>
              <FatText>LikeList</FatText>
              {likes &&
                likes.map(like => (
                  <LikeList
                    key={like.post.id}
                    id={like.post.id}
                    caption={like.post.caption}
                  />
                ))}
            </LikeListBox>
            <MyListBox>
              <FatText>MyList</FatText>
              {posts &&
                posts.map(post => (
                  <MyList key={post.id} id={post.id} caption={post.caption} />
                ))}
            </MyListBox>
          </LeftColumn>
        </LeftWrapper>
        <RightWrapper>
          {following &&
            following.map(user => (
              <DoneFollowing username={user.username} posts={user.posts} />
            ))}
        </RightWrapper>
      </Wrapper>
    );
  }
};
