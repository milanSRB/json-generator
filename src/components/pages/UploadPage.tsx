import React from 'react';
import { useHistory } from 'react-router-dom';
import {Box, Container, Grid, Input, Typography} from "@material-ui/core";
import { observer } from "mobx-react";
import { useStore } from "../../stores/store";

const UploadPage = observer(() => {
    const history = useHistory();
    const store = useStore();


    const handleChange = (event: Event | any) => {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = (e: ProgressEvent<FileReader> | any) => {
            store.updateData(e.target.result);
            history.push('/edit');
        };
    };
    return (
        <>
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Upload your desired JSON file to edit
                    </Typography>
                </Box>
            </Grid>
        </Container>
        <Container maxWidth="md">
            <Box my={4}>
                <Input type="file" onChange={handleChange} />
            </Box>
        </Container>
    </>
    )
})

export default UploadPage;