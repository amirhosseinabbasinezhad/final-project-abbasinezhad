

import { Box } from '@mui/material';
import Navbar from './Navbar';

import useMediaQuery from '@mui/material/useMediaQuery';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const phone = useMediaQuery('(max-width: 550px)');
  const tablet = useMediaQuery('(max-width: 770px)');
  return (
    <>

      <Box className='my-page' sx={{width:"100%" ,marginBottom:"0px" ,scrollbarWidth: phone ? "none" :tablet? "none" : "3px"}}>
        {props.children}
        <Navbar />
      </Box>

    </>
  );
}

export default Layout;
