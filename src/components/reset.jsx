import { Box, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import loginimg from '../assets/img/reset.gif'
import '../assets/css/login.css'

function Reset() {
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
            <h1 style={{textAlign:"center",paddingBottom:"20px",color:"black"}}>Reset Password</h1>
                <Stack direction={'column'}>
                    <TextField sx={{width:"250px"}}  label="Password" placeholder='Enter your Password'  multiline/>
                    <br />
                    <TextField   label="Confirm Password" placeholder='Enter your confirm Password'  multiline />
                    <br />
                    <br />
                    <br />
                    <button id="btn">Reset Password</button>
                </Stack>
            </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Reset
