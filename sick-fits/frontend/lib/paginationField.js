import { PAGINATION_QUERY } from '../components/Pagination'

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache })
      const { skip, first } = args
      // first thing it does is ask the read function for those items
      const data = cache.readQuery({ query: PAGINATION_QUERY })
      console.log(data)
      const count = data?._allProductsMeta?.count
      const page = skip / first + 1
      const pages = Math.ceil(count / first)

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x)
      // If there are items
      // AND there aren't enough items to satisfy how many were requested
      // AND we are on the last page
      // THEN just send it.
      if (items.length && items.length !== first && page === pages) {
        return items
      }
      if (items.length !== first) {
        // We don't have any items, we mist go to the network to fetch
        return false
      }

      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to Apollo`
        )
        return items
      }

      return false // fallback to network

      // If there are items, just return them from the cache, and we don't need to go to the network

      // we can either do one of two things:
      // 1. return the items as they are already in the cache
      // 2. return false (make a network request)
    },

    merge(existing, incoming, { args }) {
      const { skip, first } = args
      // this runs when the apollo client comes back from the network with our products
      console.log(`Merging items from the network ${incoming.length}`)
      const merged = existing ? existing.slice(0) : []
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip]
      }
      return merged
    },
  }
}
