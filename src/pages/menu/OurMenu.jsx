import { Box, Grid, Typography } from "@mui/material";
import MenuCard from "./MenuCard";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";



const OurMenu = () => {
    // data fetching with react query
    const { isLoading,  data: menuList } = useQuery('coffeeList', () =>
    fetch('https://server-coffee-shop.vercel.app/coffee').then(res =>
      res.json()
    )
  )

    if(isLoading){
        return <Loading/>
    }
    return (
        <div style={{
            marginTop: '2rem',
            maxWidth: '1200px',
            margin: 'auto'
        }}>
            <Typography style={{paddingTop:'2rem'}} align="center" variant="h2">Menu List</Typography>

            <Box sx={{
                paddingTop: '2rem',
                paddingBottom: '2rem',
                paddingLeft: '5px',
                paddingRight: '5px'
            }}>
                <Grid container>
                    {
                        menuList.map(menu => <MenuCard
                        key={menu._id}
                        menu= {menu}
                        />)
                    }
                </Grid>
                
            </Box>
        </div>
    );
};

export default OurMenu;