import React from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'

export default function Cart() {
  useProtectedPage()
  return (
    <div>Cart</div>
  )
}
