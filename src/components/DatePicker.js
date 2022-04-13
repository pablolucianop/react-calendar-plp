import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

export default function DatePicker() {
  return (
    // <localizationProvider>
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="datetime-local"
        label="choose here"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
    // </localizationProvider>
  )
}
