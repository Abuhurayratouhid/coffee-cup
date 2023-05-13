import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import coffee from "../../assets/img/coffee-banner.png"
import { Box } from '@mui/material';


const Banner = () => {
    return (
        
            <Box sx={{ marginTop: '4rem', maxWidth: '1380px', margin: 'auto' }}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={6} style={{ paddingTop: '3.5rem', padding: '1rem' }}>

                        <Typography variant='h2' style={{fontWeight: 'bold'}}>Quality coffee <br /> delivered to your <br /> door</Typography>
                        <Typography style={{ paddingTop: '1rem' }}>Coffee, the aromatic elixir that has captivated the hearts and minds of people around the world for centuries. From its humble origins in ancient Ethiopia to the bustling coffeehouses of modern-day cities, coffee has become an integral part of countless cultures and daily routines.</Typography>
                        <Button style={{ color: 'white', background: '#582f0e', padding: '10px', marginTop: '2rem', border: 'none' }}>Explore More</Button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} style={{ padding: '2rem' }}>
                        <img style={{ width: '100%' }} src={coffee} alt="coffee" />
                    </Grid>

                </Grid>
            </Box>
        
    );
};

export default Banner;