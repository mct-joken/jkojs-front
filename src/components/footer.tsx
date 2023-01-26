import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//暫定フッター
export function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',

            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 4,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#1B2832',
                    flexDirection: 'row',
                }}
            >
                <Container sx={{alignItems:'center'}}>
                    <Typography style={{textAlign:'center'}} variant="body2" color={"#FFF"}>
                        問い合わせ先:example@email.example.com
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}