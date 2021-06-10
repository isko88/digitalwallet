import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit">
                    Digital-Wallet
                </Typography>
                {/* <Box ml={4}>
                    <Link to="/" className="menu-link">
                        Cards
                    </Link>
                </Box> */}
                <Box ml={4}>
                    <Link to="/costs" className="menu-link">
                        Costs
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;