import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'
import homeimg from '../assets/img/home.gif'
import '../assets/css/home.css'


function Homemain() {
    return (
        <Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Grid  container spacing={30}>
                <Grid item xs={5} id="main1">
                    <img src={homeimg} alt="img" id="img" />
                </Grid>
                <Grid item xs={7} id="main2" >
                    <h1 style={{ fontSize: "50px" }}>Welcome to Exams</h1>
                    <h4 style={{ paddingLeft: "10px" }}>Failure  is success if we learn from it.</h4>
                        <Button id="btn">Get start</Button>
                </Grid>
            </Grid>
            </Box>
            <Stack direction={'column'} sx={{ display: { sm: "none", xs: "block" } }} >
                <img src={homeimg} alt="img" id='rimg' srcset="" />
                <div id='rsub'>
                    <h1 style={{ fontSize: "50px" }}>Welcome to Exams</h1>
                    <h4 style={{ paddingLeft: "10px" }}>Failure  is success if we learn from it.</h4>
                    <Button id="rbtn">Get start</Button>
                </div>
            </Stack>
        </Box>
    )
}

export default Homemain
