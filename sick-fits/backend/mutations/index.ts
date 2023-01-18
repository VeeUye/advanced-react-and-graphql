import { graphQLSchemaExtension } from '@keystone-next/keystone/schema'
import addToCart from './addToCart'

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: ` 
  type Mutation {
  addToCart(productID: ID): CartItem
  }
  `,
  resolvers: {
    Mutation: {
      addToCart,
    },
  },
})
