import { gql } from "@apollo/client";

export default gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(input: { id: $id }) {
      id
    }
  }
`;