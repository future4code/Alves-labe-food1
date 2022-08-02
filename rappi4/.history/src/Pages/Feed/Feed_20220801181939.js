
import React from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import useVerifyAdress from '../../Hooks/useVerifyAdress'

export default function Feed() {
  useVerifyAdress()
  useProtectedPage()
  
  return (
<>
</>
  )
}
