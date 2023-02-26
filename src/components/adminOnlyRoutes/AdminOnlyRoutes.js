import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'
const AdminOnlyRoutes = ({children}) => {
    const userEmail=useSelector(selectEmail);
    console.log(userEmail);
    if(userEmail === "almir_18b@hotmail.com"){
        return children
    }
    return null
  
}

export default AdminOnlyRoutes
