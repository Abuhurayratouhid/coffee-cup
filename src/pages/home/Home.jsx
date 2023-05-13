// import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Banner from "./Banner";
import MenuItems from "./MenuItems";


const Home = () => {
    return (
        <Box sx={{
            marginTop: '4rem'
        }}>
            <Banner/>
            <MenuItems/>
            
        </Box>
    );
};

export default Home;