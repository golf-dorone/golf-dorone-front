import { gql } from "@apollo/client";

export default gql`
  mutation createBlog($params: BlogAttributes!) {
    createBlog(input: { params: $params }) {
      blog {
        id
        title
      }
    }
  }
`;