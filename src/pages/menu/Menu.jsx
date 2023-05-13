import { Box, Typography } from "@mui/material";
import OurMenu from "./OurMenu";


const Menu = () => {
    return (
        <div style={{
            marginTop: '3.5rem'
        }}>
            

            <Box sx={{
                width: '100%',
                height: '20rem',
                // bgcolor: 'red',
                display: 'grid',
                placeItems: 'center',
                backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_640.jpg")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'

                
            }}>
                <Typography variant="h3" color= 'white'>Coffee-CUP</Typography>
            </Box>

            <Box>
                <OurMenu/>
            </Box>
        </div>
    );
};

export default Menu;