import { AppBar, Avatar, Badge, Box, InputBase, Menu, styled, Toolbar, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from '@mui/icons-material';
import AvatarImg from './im.png'
const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})


const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>

        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
          MY APP
        </Typography>
        <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder="search"/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30,height:30}} src={AvatarImg} onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width:30,height:30}} src={AvatarImg} />
          <Typography variant='span'>AMOR Zaki </Typography>
        </UserBox>


        
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose ={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar