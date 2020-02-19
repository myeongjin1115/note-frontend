import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
<<<<<<< HEAD
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
=======

    //ddd
>>>>>>> 45464a84baf3e8507c3ed6b5786c8846bcf4ffaf
  }
});
