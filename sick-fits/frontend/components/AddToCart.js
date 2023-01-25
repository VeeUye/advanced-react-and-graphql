import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { CURRENT_USER_QUERY } from './User'

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })
  return (
    <button type="button" disabled={loading} onClick={addToCart}>
      Add{loading && 'ing'} to Cart 🛒
    </button>
  )
}
