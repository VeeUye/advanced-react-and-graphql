import { graphQLSchemaExtension } from '@keystone-next/keystone/schema'

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: ` 
  type Mutation {
  addToCart(produceID: ID): CartItem
  }
  `,
  resolvers: {
    Mutation: {
      addToCart() {
        // custom code goes here

        console.log('ADD TO CART!')
      },
    },
  },
})
