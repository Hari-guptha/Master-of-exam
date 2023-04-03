import { AppBar, Box, Drawer, Stack } from '@mui/material'
import React, { useState } from 'react'
//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//Style
import '../assets/css/Navbar.css'
//Images
import logo from '../assets/img/logo.png'


function Navbar() {
    const [fun, setfun] = useState(false)
    return (
        <>
            <AppBar id='appbar'>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <img id="logo" src={logo} alt="logo" />
                            <span id='navitems1'>Home</span>
                            <span id='navitems1'>About us</span>
                            <span id='navitems1'>Contact us</span>
                        </div>
                        <Stack direction={'row'}>
                            <span id="navitems2">
                                Login
                            </span>
                            <button id='navbutton'>Signup</button>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ display: { sm: "none", xs: "block" } }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <img id="logo" src={logo} alt="logo" />
                        <MenuIcon id="menuicon" onClick={e => (setfun(true))} />
                    </div>
                </Box>
            </AppBar>

            <Drawer
                anchor={'left'}
                open={true}
                onClose={e => (setfun(false))} >
                <div style={{ display: "flex" }}>
                    <img src={logo} id="rlogo" alt="logo" srcset="" />
                    <CloseIcon id="closeicon" onClick={e => (setfun(false))} />
                </div>
                <br />
                <br />
                <span id='rnavitems1'>Home</span>
                <span id='rnavitems1'>About us</span>
                <span id='rnavitems1'>Contact us</span>
                <div style={{ paddingTop: "50%" }}>
                    <Stack direction={'column'} >
                    <button id='rnavbutton'>Login</button>
                    <button id='rnavbutton'>Signup</button>
                    </Stack>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar
