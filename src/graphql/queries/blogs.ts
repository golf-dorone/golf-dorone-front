import { gql } from "@apollo/client";

export default gql`
  query blogs {
    blogs {
      id
      title
    }
  }
`;