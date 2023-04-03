import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'
import homeimg from '../assets/img/setexam.gif'
import '../assets/css/home.css'


function Setexam() {
    return (
        <Box>
            <Box>
                <Grid container spacing={30}>
                    <Grid item xs={5} id="main1">
                        <img src={homeimg} alt="img" id="img" />
                    </Grid>
                    <Grid item xs={7} id="main2" >
                        <Button style={{ width: "50%", height: "20%", marginLeft: "25%" }} id="btn">Schedule test</Button>
                        <Button style={{ width: "50%", height: "20%", marginLeft: "25%" }} id="btn">Start test</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Setexam
