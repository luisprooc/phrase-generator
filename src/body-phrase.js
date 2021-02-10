import React, { useState } from 'react';
import { Typography,Button,Box } from '@material-ui/core';
import button from './styles/button';
import author from './styles/author';

const BodyPhrase = () => {
    const [phrase,savePhrase] = useState({});

    // Ask at the API
    const seekPhrase = ()=>{
        fetch("http://localhost:5000/phrase")
            .then(res => res.json())
            .then(res => savePhrase(res))
            .catch(error => console.log(error))
    }

    return(
        <Box component="div" m={1}>
        
            <Typography variant="h6" component="p" align="center">
                Click button to dropp a random phrase
            </Typography>

            <Button variant="contained" color="secondary" style={button} onClick={() => seekPhrase()}>
                CLICK ME
            </Button>

            {/*When phrase is fill, render it*/}

            {
                phrase.ID?(
                    <Box component="blockquote" m={3}>
                        <Typography variant="subtitle1" component="p" align="justify" >"{phrase.Phrase}"</Typography>
                        <Typography variant="subtitle2" component="p" align="right" style={author}>-{phrase.Author}</Typography>
                    </Box>
                ):null
            }

        </Box>
    );
};

export default BodyPhrase;