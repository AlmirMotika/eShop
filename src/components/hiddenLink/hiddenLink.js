import { useSelector } from 'react-redux'
import { selectIsLoggenIn } from '../../redux/slice/authSlice'

const ShowOnLogin = ({children}) => {
    const isLoggedIn =useSelector(selectIsLoggenIn);

    if(isLoggedIn){
        return children;
    }
    return null;
  
}
export const ShowOnLogout = ({children}) => {
    const isLoggedIn =useSelector(selectIsLoggenIn);

    if(!isLoggedIn){
        return children;
    }
    return null;
  
}

export default ShowOnLogin;
