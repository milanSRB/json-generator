import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Container, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    link: {
        marginRight: "10px",
        textDecoration: "none",
        color: "#fff",
    },
}));

const Navigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md">
                    <Link className={classes.link} to="/">UPLOAD JSON</Link>
                    <Link className={classes.link} to="/edit">EDIT JSON</Link>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;