import TextField from '@mui/material/TextField';
import React from 'react'

export default function Feed() {
  return (
    <div>
        <form>
            <TextField required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"/>
        </form>
    </div>
  )
}
