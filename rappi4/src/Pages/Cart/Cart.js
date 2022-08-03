import React, {useContext} from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import GlobalContext from '../../../Global/GlobalContext'

export default function Cart() {
  const { cart } = useContext(GlobalContext)
  useProtectedPage()
  console.log(cart)
  return (
    <div>Cart</div>
  )
}
