import CssBaseline from '@mui/material/CssBaseline';

import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './theme/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer/>
        <CssBaseline />
      </ThemeProvider>

    </>
  )
}

export default App
