import { Box, Grid, Typography } from "@mui/material";
import MenuItemCard from "../../components/MenuItemCard";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";




const AllMenu = () => {
    // data fetching with react query
    const { isLoading,  data: allMenu } = useQuery('allCoffee', () =>
    fetch('https://server-coffee-shop.vercel.app/coffee').then(res =>
      res.json()
    )
  )

    if(isLoading){
        return <Loading/>
    }
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
                            key={menu._id}
                            menu={menu}
                        />)
                    }
                </Grid>
           </Box>
        </div>
    );
};

export default AllMenu;