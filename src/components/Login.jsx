import { Box, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import loginimg from '../assets/img/login.gif'
import '../assets/css/login.css'

function Login() {
    return (
        <>
        <Box id="logincard" >
            <Grid container spacing={2}>
            <Grid item sx={8}>
            <Box sx={{display:{sm:"block",xs:"none"}}}>
                <img id='cardimg' src={loginimg} alt="img" />
                </Box>
            </Grid>
            <Grid item sx={4}>
            <h1 style={{textAlign:"center",paddingBottom:"20px",color:"black"}}>Login</h1>
                <Stack direction={'column'}>
                    <TextField sx={{width:"250px"}}  label="Username" placeholder='Enter your username'  multiline/>
                    <br />
                    <TextField   label="Password" placeholder='Enter your Password'  multiline />
                    <a><h5 id='sub' style={{marginLeft:"60%",fontWeight:"lighter"}}>Forgot Password ?</h5></a>
                    <button id="btn">Login</button>
                    <a id='sub' style={{textAlign:"center",padding:"50px 0 0 0"}}><span>Create new account ?</span><span style={{color:"#89C4E1"}}> Signup</span></a>
                </Stack>
            </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Login
