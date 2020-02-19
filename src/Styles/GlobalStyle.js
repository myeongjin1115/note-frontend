import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
<<<<<<< HEAD
=======
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
>>>>>>> 45464a84baf3e8507c3ed6b5786c8846bcf4ffaf
    }
`;
