//our-domain.com/user/account
import { NextPage } from "next";
import { useState, useEffect } from "react";
import LogedIn from "../../../components/user/LogedIn";
import { useRouter } from "next/router";

import { userState } from "../../../components/store/userSlice"
import { useSelector, useDispatch } from "react-redux";
import { Login } from "@mui/icons-material";
import { getToken } from "../../api/token";
const UserAccount: NextPage = () => {
    const router = useRouter();
    const user = useSelector(userState);

    const userpath = router.query.username;
    const [validate, setValidate] = useState<boolean>(false)
    useEffect(() => {
        if (getToken()) {
            setValidate(true)

        }
        else {
            setValidate(false)
            router.push("/user/login");
        }
    }, [])
    return (<>
        {validate && <LogedIn />}
    </>)
}
export default UserAccount;