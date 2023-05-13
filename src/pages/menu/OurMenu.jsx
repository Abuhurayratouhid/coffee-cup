import { Box, Grid, Typography } from "@mui/material";
import MenuCard from "./MenuCard";
const menuList = [
    {
        id: 1,
        title: 'menu-1',
        subTitle: 'coffee is more than just a drink',
        price: "$25",
        pic: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_640.jpg'
    },
    {
        id: 2,
        title: 'menu-2',
        subTitle: 'coffee is more than just a drink',
        price: "$15",
        pic: 'https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_640.jpg'
    },
    {
        id: 3,
        title: 'menu-3',
        subTitle: 'coffee is more than just a drink',
        price: "$35",
        pic: 'https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_640.jpg'
    },
    {
        id: 4,
        title: 'menu-4',
        subTitle: 'coffee is more than just a drink',
        price: "$35",
        pic: 'https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598_640.jpg'
    },
    {
        id: 5,
        title: 'menu-5',
        subTitle: 'coffee is more than just a drink',
        price: "$30",
        pic: 'https://cdn.pixabay.com/photo/2016/11/29/06/17/black-coffee-1867753_640.jpg'
    },
    {
        id: 6,
        title: 'menu-6',
        subTitle: 'coffee is more than just a drink',
        price: "$10",
        pic: 'https://cdn.pixabay.com/photo/2016/11/19/12/54/drink-1839134_640.jpg'
    },

]


const OurMenu = () => {
    return (
        <div style={{
            marginTop: '2rem',
            maxWidth: '1200px',
            margin: 'auto'
        }}>
            <Typography style={{paddingTop:'2rem'}} align="center" variant="h2">Menu List</Typography>

            <Box sx={{
                paddingTop: '2rem',
                paddingBottom: '2rem'
            }}>
                <Grid container>
                    {
                        menuList.map(menu => <MenuCard
                        key={menu.id}
                        menu= {menu}
                        />)
                    }
                </Grid>
                
            </Box>
        </div>
    );
};

export default OurMenu;