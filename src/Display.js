import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import App from './App';
import Scrollbanner from './component/framework/scrollbanner';
import NavigationBar from './component/framework/navigationBar';

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={5} width="100%" >
                    <NavigationBar />
                </Grid>
                <Grid item xs={1} width="100%" >
                    <Scrollbanner />
                </Grid>
                <Grid item xs={1} width="100%" >
                    <App />
                </Grid>
                <Grid item xs={5} width="100%" >
                    <Typography>abc</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}