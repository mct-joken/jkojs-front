import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const link = {
    color:'#FFF',
    textDecoration: 'none',
    marginRight: '2em',
}
export function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{height:'3em'}} style={{backgroundColor: '#1B2832'}}>
                <Toolbar sx={{display: 'flex', fontFamily: 'IBM Plex Sans'}}>
                    <Link to='/' style={link}><h1>JK-OJS</h1></Link>
                    <ul style={{listStyle: 'none', display: 'flex', paddingLeft: '2em'}}>
                        <li><Link to='/' style={link}>トップページ</Link></li>
                        <li><Link to='contests' style={link}>コンテスト一覧</Link></li>
                    </ul>
                </Toolbar>
            </AppBar>
        </Box>
    );
}