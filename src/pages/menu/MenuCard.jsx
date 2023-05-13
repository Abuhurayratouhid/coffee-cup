import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';


const MenuCard = ({menu}) => {
    const {title, subTitle, pic, price} = menu;
    return (
        <>
            <Box sx={{
                maxWidth: '600px',
                height: '150px',
                // bgcolor: 'red',
                margin: 'auto',
                borderRadius: '1rem',
                padding: '1rem',
                display: 'flex',
                marginTop: '1rem',
                border: '1px solid #582f0e'
            }}>
                <Box
                    sx={{ width: '30%',  height: '100%', borderRadius: '50%' }}
                >
                    <img 
                    style={{
                        width: "100%",
                        height: '100%',
                        borderRadius:'50%'
                    }} 
                    src={pic} alt="Coffee" />
                </Box>
                <Box
                    sx={{ width: '70%',  height: '100%', marginLeft: '1rem' }}
                >
                    <Typography>{title}</Typography>
                    <Typography>{price}</Typography>
                    <Typography>{subTitle}</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        paddingTop: '.5rem'
                    }}>
                        <Button variant="contained" size="small">
                            Order now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MenuCard;