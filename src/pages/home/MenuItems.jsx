import { Box, Grid, Typography } from "@mui/material";
import MenuItemCard from "../../components/MenuItemCard";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";




const MenuItems = () => {
    // data fetching with react query
    const { isLoading,  data: menuItems } = useQuery('coffee3', () =>
    fetch('https://server-coffee-shop.vercel.app/coffee3').then(res =>
      res.json()
    )
  )

    if(isLoading){
        return <Loading/>
    }
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
                            key={menu._id}
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