import { gql } from "@apollo/client";

export default gql`
  mutation updateBlog($id: ID!, $params: BlogAttributes!) {
    updateBlog(input: { id: $id, params: $params }) {
      blog {
        id
        title
      }
    }
  }
`;