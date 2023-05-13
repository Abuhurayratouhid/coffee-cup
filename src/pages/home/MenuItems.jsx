import { Box, Grid, Typography } from "@mui/material";
import MenuItemCard from "../../components/MenuItemCard";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const menuItems = [
    {
        id: 1,
        title: 'menu-1',
        subTitle: 'coffee is more than just a drink; it is a social experience that brings people together. Coffeehouses, with their warm ambiance and inviting aromas, serve as communal spaces where friends gather, conversations flow, and ideas flourish.',
        price: "$25",
        pic: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_640.jpg'
    },
    {
        id: 2,
        title: 'menu-2',
        subTitle: 'coffee is more than just a drink; it is a social experience that brings people together. Coffeehouses, with their warm ambiance and inviting aromas, serve as communal spaces where friends gather, conversations flow, and ideas flourish.',
        price: "$15",
        pic: 'https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_640.jpg'
    },
    {
        id: 3,
        title: 'menu-3',
        subTitle: 'coffee is more than just a drink; it is a social experience that brings people together. Coffeehouses, with their warm ambiance and inviting aromas, serve as communal spaces where friends gather, conversations flow, and ideas flourish.',
        price: "$35",
        pic: 'https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_640.jpg'
    },

]


const MenuItems = () => {
    return (
        <div style={{ marginTop: '2rem', }}>
            <Box>
                <Typography variant="h3" align="center" style={{ fontWeight: 'bold' }}>Our menu Items</Typography>
            </Box>

            <Box sx={{
                paddingTop: '3rem'
            }}>
                <Grid container>
                    {
                        menuItems.map(menu => <MenuItemCard
                            key={menu.id}
                            menu={menu}
                        />)
                    }
                </Grid>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '2rem',
                paddingBottom: '2rem'
            }}>
                <Link to="/allMenu">
                    <Button variant="contained">See more</Button>
                </Link>
            </Box>
        </div>
    );
};

export default MenuItems;