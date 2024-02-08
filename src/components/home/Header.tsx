import Avatar from '@mui/material/Avatar';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { useSelector } from 'react-redux';
import { userstates } from '../store/userSlice';

import IconButton from '@mui/material/IconButton';

const Header: React.FC<{ text: string }> = (props) => {
    const user = useSelector(userstates)

    return (<>

        <div className="header_homepage">
            <div className="menubtn">
                <IconButton sx={{ p: '10px' }} aria-label="menu" >
                    <WidgetsRoundedIcon color="secondary" />
                </IconButton>
            </div>

            {props.text === "name" && <div className="nametext"> <h4>Hellow your name</h4><h5>Tehran.IRAN</h5></div>}
            {props.text === "cart" && <div className="nametext"> <h4>cart</h4></div>}
            <div className="imageframe">
                <Avatar alt="Travis Howard" src={"https://gravatar.com/avatar/76c59da51a4dc4f3f32c1b72824c7a3a?s=400&d=robohash&r=x"} />
            </div>
        </div>




    </>)
}
export default Header;