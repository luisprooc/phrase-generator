import React from 'react';
import {Typography } from '@material-ui/core';

const styles = {
    paddingTop: "10%",
    fontWeight: "bold"
}

const Title = () => (
    <Typography variant="h2" component="h2" align="center" color="error" style={styles}>
        Phrase Generator
    </Typography>
);



export default Title;
