import React, { useState } from "react";
import { Box, Grid, Stack, TextField } from '@mui/material'
import forgotimg from '../assets/img/forgot.gif'
import '../assets/css/login.css'
import { display } from "@mui/system";

function Forgot() {


    const [otp, setotp] = useState(true);


    return (
        <>
            <Box id="logincard" >
                <Grid container spacing={2}>
                    <Grid item sx={8}>
                        <Box sx={{ display: { sm: "block", xs: "none" } }}>
                            <img id='cardimg' src={forgotimg} alt="img" />
                        </Box>
                    </Grid>
                    <Grid item sx={4}>
                        <h1 style={{ textAlign: "center", paddingBottom: "20px", color: "black" }}>Forgot Password</h1>
                        <Stack direction={'column'}>
                            <>{otp ? 
                            <>
                                <TextField sx={{ width: "250px" }} label="Username" placeholder='Enter your username' multiline />
                                <button id="btn" onClick={e => setotp(!otp)}>Sumbit</button>
                            </>
                                : <><TextField sx={{ width: "250px" }} label="OTP" placeholder='Enter the OTP' multiline />
                                    <button id="btn" onClick={e => setotp(!otp)}>Reset Password</button>
                                </>}
                            </>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Forgot;
