import { Button, styled } from '@mui/material'
import React from 'react'
const App = () => {

  //creating own component
  // const DisabledButton = styled(Button)({
  //   backgroundColor: "green",
  //   color: "#fff",
  //   "&:hover": {
  //     backgroundColor: "pink"
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //   }
  // })

  const DisabledButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: "pink"
    },
    "&:disabled": {
      backgroundColor: "gray",
    }
  }))

  return (
    <>
      <Button variant="text" color='primary'>Text</Button>
     <DisabledButton>Disable</DisabledButton>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App