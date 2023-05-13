import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import coffee from '../assets/img/coffee-banner.png'

export default function MenuItemCard({menu}) {
    const {title, subTitle, picture, price} = menu;
  return (
    <>
    <Box sx={{
        maxWidth: '350px',
        // height: '400px',
        // bgcolor: 'red',
        padding: '1rem',
        margin: 'auto',
        marginTop: '1rem',
        border: '1px solid #582f0e',
        borderRadius: '10px'
    }}>
        <img  
        style={{
            width: '100%',
            height: '50%'
        }}
        src={picture} alt="coffee" />
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h6' color='primary' style={{paddingTop: '0.5rem', paddingBottom: '1rem'}}>{price}</Typography>
        <Typography>{subTitle}</Typography>
    </Box>
    </>
  );
}