import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'
import {Link} from 'react-router-dom'

function Header() {
    const about="ugfxcvb fghuytrd"
  return (
    
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"   sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="https://tse2.mm.bing.net/th/id/OIP.QGFz3Wde4xSd1o-Hw2X6MwHaHj?pid=Api&P=0&h=180" width={50} alt=""  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
        
           <Link className='text-light text-decoration-none fw-bold' to={'/'}> rBuilder</Link>
          </Typography>
          <Tooltip title={about}>
            <Button color="inherit" sx={{fontWeight:'bold'}}>About Us</Button>
  
         </Tooltip>
         </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default Header