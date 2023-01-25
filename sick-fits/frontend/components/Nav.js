import React from 'react'
import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import { useUser } from './User'
import SignOut from './SignOut'
import { useCart } from '../lib/CartState'
import CartCount from './CartCount'

export default function Nav() {
  const user = useUser()
  const { openCart } = useCart()
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
          <button type="button" onClick={openCart}>
            My Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>
        </>
      )}
      {!user && <Link href="/signin">Sign In</Link>}
    </NavStyles>
  )
}
