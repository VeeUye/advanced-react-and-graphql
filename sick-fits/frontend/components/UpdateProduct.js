import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { id: $id, name: $name, description: $description, price: $price }
    ) {
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  //TODO
  // 1. We need to get the existing products

  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  console.log({ data });

  //TODO
  // 2. We need to get the mutation to update the product
  // 3. We need the form to handle the updates.
  return <p>Update {id}!</p>;
}
