import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
<<<<<<< HEAD
    0% {
        opacity:0
    }
    50% {
        opacity:1
    }
    100% {
        opacity:0
=======
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
>>>>>>> profile
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
<<<<<<< HEAD
=======
  width: 100%;
  text-align: center;
>>>>>>> profile
`;

export default () => (
  <Loader>
    <Logo size={36} />
  </Loader>
);
