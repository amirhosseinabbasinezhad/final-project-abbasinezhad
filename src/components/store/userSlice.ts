import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk} from "./index"
import axios from 'axios';
import { setToken } from '../../pages/api/token';
import { toast } from 'react-toastify';

export interface UserState {
  authState: boolean;
  emailAvailable: boolean | null;
  userInfo: {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
  };
}

const initialState: UserState = {
  authState: false,
  emailAvailable: null,
  userInfo: {
    id: 0,
    email: '',
    password: '',
    name: '',
    role: '',
    avatar: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAvailable(state, action: PayloadAction<{ available: boolean }>) {
      state.emailAvailable = action.payload.available;
    },
    loginUser(state, action: PayloadAction<{ data: any }>) {
      const { data } = action.payload;
      state.userInfo.id = data._id;
      state.userInfo.email = data.email;
      state.userInfo.password = data.password;
      state.userInfo.role = data.role;
      state.userInfo.name = data.firstName+data.lastName;
      state.userInfo.avatar = data.avatar;
      state.authState = true;
      setToken(data?.accessToken)
      localStorage.setItem('accessToken',data?.accessToken)
      localStorage.setItem('userId',data?._id)
      localStorage.setItem('name',data?.firstName)
      localStorage.setItem('email',data?.email)
    },
    logoutUser(state) {
      state.userInfo = initialState.userInfo;
      state.authState = false;
    },
  },
});

export const { setIsAvailable, loginUser, logoutUser } = userSlice.actions;

export const registerUser = (
  name: string,
  email: string,
  password: string
): AppThunk => async (dispatch: (arg0: { payload: { data: any; }; type: string; }) => void) => {
  try {
    const response = await axios.post('https://shop-api-backend-main.vercel.app/api/auth/register', {
      firstName: name,
      lastName: 'Doe',
      email,
      number: 1234567890,
      password,
      isAdmin: false,
      userIP: '192.168.0.1',
    });

    if (response.status === 201) {
      dispatch(loginUser(response));
      
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

export const checkEmailAvailable = (email: string): AppThunk => async (dispatch: (arg0: { payload: { available: boolean; }; type: string; }) => void) => {
  try {
    const response = await axios.post('https://api.escuelajs.co/api/v1/users/is-available', {
      email,
    });

    dispatch(setIsAvailable({ available: response.data.isAvailable }));
  } catch (error) {
    console.error('Error checking email availability:', error);
  }
};

export const loginUserAction = (email: string, password: string): AppThunk => async (dispatch: (arg0: { payload: { data: any; }; type: string; }) => void) => {
  try {
    const response = await axios.post('https://shop-api-backend-main.vercel.app/api/auth/login', {
      email,
      password,
    });

    if (response.status === 200) {
      dispatch(loginUser(response));
      console.log(response.data);
      
    }else{
      toast.error("can not login !")
    }
  } catch (error) {
    toast.error("Error logging in user:', error")
    
  }
};

export const userState = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
