import { Box, Grid, Typography } from "@mui/material";
import MenuItemCard from "../../components/MenuItemCard";


const allMenu = [
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
    {
        id: 4,
        title: 'menu-4',
        subTitle: 'coffee is more than just a drink; it is a social experience that brings people together. Coffeehouses, with their warm ambiance and inviting aromas, serve as communal spaces where friends gather, conversations flow, and ideas flourish.',
        price: "$35",
        pic: 'https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598_640.jpg'
    },
    {
        id: 5,
        title: 'menu-5',
        subTitle: 'coffee is more than just a drink; it is a social experience that brings people together. Coffeehouses, with their warm ambiance and inviting aromas, serve as communal spaces where friends gather, conversations flow, and ideas flourish.',
        price: "$30",
        pic: 'https://cdn.pixabay.com/photo/2016/11/29/06/17/black-coffee-1867753_640.jpg'
    },
    {
        id: 6,
        title: 'menu-6',
        subTitle: 'coffee is more than just a drink; it is a social experience that brings people together. Coffeehouses, with their warm ambiance and inviting aromas, serve as communal spaces where friends gather, conversations flow, and ideas flourish.',
        price: "$10",
        pic: 'https://cdn.pixabay.com/photo/2016/11/19/12/54/drink-1839134_640.jpg'
    },

]

const AllMenu = () => {
    return (
        <div style={{
            maxWidth: '1380px',
            margin: 'auto',
            paddingTop: '4rem',
        }}>
           <Typography variant="h3" align="center" style={{ fontWeight: 'bold', paddingTop: '2rem', paddingBottom: '3rem'}}>Our All Menu</Typography> 



           <Box sx={{
             paddingBottom: '3rem'
           }}>
           <Grid container>
                    {
                        allMenu.map(menu => <MenuItemCard
                            key={menu.id}
                            menu={menu}
                        />)
                    }
                </Grid>
           </Box>
        </div>
    );
};

export default AllMenu;