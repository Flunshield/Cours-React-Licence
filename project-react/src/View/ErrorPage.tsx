import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Grid xs={6}>
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                                alt=""
                                width={500} height={250}
                            />
                        </Grid>
                        <Typography variant="h6">
                            La page que vous recherchez n'existe pas.
                        </Typography>
                        <Button variant="contained" href='/' className='btn'>Acceuil</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}