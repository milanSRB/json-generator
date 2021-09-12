import React from 'react';
import { Box, Container, Grid, Typography } from "@material-ui/core";

function UploadPage() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Upload your desired JSON file to edit
                    </Typography>
                </Box>
            </Grid>
        </Container>
    )
}

export default UploadPage;