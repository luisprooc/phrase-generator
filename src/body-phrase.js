import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography,Button } from '@material-ui/core';
import button from './styles/button';

const BodyPhrase = () => {
    return(
        <Box component="div" m={1}>
        
            <Typography variant="h6" component="p" align="center">
                Click button to dropp a random phrase
            </Typography>
            
            <Button variant="contained" color="secondary" onClick={()=> console.log("XD")} style={button}>
                CLICK ME
            </Button>

        </Box>
    );
};

export default BodyPhrase;