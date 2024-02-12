import Avatar from '@mui/material/Avatar';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { useSelector } from 'react-redux';
import { userState } from '../store/userSlice';

import IconButton from '@mui/material/IconButton';
import SwipeableTemporaryDrawer from './Drawer';

const Header: React.FC<{ text: string }> = (props) => {
    const user = useSelector(userState)

    return (<>

        <div className="header_homepage">
           
                <SwipeableTemporaryDrawer />
            

            {props.text === "name" && <div className="nametext"> <h4>Hellow your name</h4><h5>Tehran.IRAN</h5></div>}
            {props.text === "cart" && <div className="nametext"> <h4>cart</h4></div>}
            <div className="imageframe">
                <Avatar alt="Travis Howard" src={"https://gravatar.com/avatar/76c59da51a4dc4f3f32c1b72824c7a3a?s=400&d=robohash&r=x"} />
            </div>
        </div>




    </>)
}
export default Header;