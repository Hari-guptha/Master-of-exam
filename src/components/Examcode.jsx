import React from 'react'
import { Box, Grid, Stack, TextField } from '@mui/material'
import homeimg from '../assets/img/setexam.gif'
import '../assets/css/home.css'

function Examcode() {
    return (
        <Box>
            <Box>
                <Grid container spacing={30}>
                    <Grid item xs={5} sx={{ display: { sm: "block", xs: "none" } }} id="main1">
                        <img src={homeimg} alt="img" id="img" />
                    </Grid>
                    <Grid item xs={7} id="main3" >
                        <Box sx={{ p: "0 20px", m: "0 10%", textAlign: "center", backgroundColor: "#89C4E1", borderRadius: "10px" }}>
                            <Stack direction={"column"}>
                                <br />
                                <br />
                                <h1>Start Test</h1>
                                <TextField label="Exam Code" sx={{ margin: "50px", backgroundColor: "white" }} placeholder='Enter the exam code' multiline />
                                <button id="btn" style={{ width: "40%", backgroundColor: "white", color: "black", margin: "10px 20% 30% 30%" }} >Start Test</button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Examcode