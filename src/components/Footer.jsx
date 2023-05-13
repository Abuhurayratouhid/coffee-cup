import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <div style={{
            width: '100%',
            height: '7rem',
            background: '#582f0e',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem', 
            marginTop: '3rem'
        }}>
          

            <Box>
             <Typography>© 2023 Coffee-cup, All Rights Reserved</Typography>
            </Box>
            <Box>
               
             <FacebookIcon/>
             <InstagramIcon style={{marginLeft: '1rem'}}/>
             <TwitterIcon style={{marginLeft: '1rem'}}/>
             <LinkedInIcon style={{marginLeft: '1rem'}}/>
             
            </Box>

        </div>
    );
};

export default Footer;