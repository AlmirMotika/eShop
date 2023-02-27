import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'
const AdminOnlyRoutes = ({children}) => {
    const userEmail=useSelector(selectEmail);
    console.log(userEmail);
    if(userEmail === "almir_18b@hotmail.com"){
        return children
    }
    return (
        <section style={{height:"80vh"}}>
            <div className="container">
                <h2>Permission Denied</h2>
                <p>This page can only be view by Admin user.</p> 
                <br/>
                <button className="--btn">&larr;Back To Home</button>
            </div>
        </section>
    )
  
}
export const AdminOnlyLink = ({children}) => {
    const userEmail=useSelector(selectEmail);
    console.log(userEmail);
    if(userEmail === "almir_18b@hotmail.com"){
        return children
    }
    return null
  
}

export default AdminOnlyRoutes
