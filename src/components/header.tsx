import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import {Avatar, IconButton, Tooltip} from "@mui/material";
import Menu from '@mui/material/Menu';
import Typography from "@mui/material/Typography";



const link = {
    color:'#FFF',
    textDecoration: 'none',
    marginRight: '2em',
}

const settings = ['ログイン']

export function Header() {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{height:'3.4em'}} style={{backgroundColor: '#1B2832', position: 'relative'}}>
                <Toolbar sx={{
                    display: 'flex',
                    fontFamily: 'IBM Plex Sans'
                }}>
                    <Link to='/' style={link}><h1>JK-OJS</h1></Link>

                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        paddingLeft: '2em',
                        flexGrow: 1
                    }}>
                        <li><Link to='/' style={link}>トップページ</Link></li>
                        <li><Link to='contests' style={link}>コンテスト一覧</Link></li>
                    </ul>


                    {/* アカウント */}
                    <Tooltip title="アカウント">
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <Avatar alt={"User Icon"} src=""/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}