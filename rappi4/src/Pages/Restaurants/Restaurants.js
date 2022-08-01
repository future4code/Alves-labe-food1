import React from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'

export default function Restaurants() {
  useProtectedPage()
  return (
    <div>Restaurants</div>
  )
}
