import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit">
                    MusicPlaylist-Table
                </Typography>
                <Box ml={4}>
                    <Link to="/songs" className="menu-link">
                        Songs
                    </Link>
                </Box>
                <Box ml={4}>
                    <Link to="/" className="menu-link">
                        Playlists
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;