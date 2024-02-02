import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction="row" sx={{ mt:'15px'} }>
    <Link to="/" style={{marginLeft:'60px' ,width:'70%'}}>
      <img src={Logo} alt="logo" style={{ width: '180px', height: '70px'}} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="30px"
      alignItems="center"
      justifyContent="center"
    >
      <Link to="/" className='linkStyle'>Home</Link>
      <a href="#exercises" className='linkStyle'>Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar