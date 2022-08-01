import TextField from '@mui/material/TextField';
import React from 'react'

export default function Feed() {
  return (
    <div>
        <form>
            <TextField id="outlined-basic" variant="outlined" required value={''} onChange={''} placeholder='Email'/>
        </form>
    </div>
  )
}
