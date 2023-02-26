import {useState,React, useEffect} from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import {FaShoppingCart, FaTimes, FaUserCircle} from "react-icons/fa"
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { toast } from 'react-toastify';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER,REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';
import AdminOnlyRoutes from '../adminOnlyRoutes/AdminOnlyRoutes';

const activeLink=({isActive})=>
(isActive?`${styles.active}`:"")
const logo=(
<div className={styles.logo}>
          <Link to="/">
            <h2>
              AM<span>commerce</span>
            </h2>
          </Link>
        </div>

)
const cart=(
  <span className={styles.cart}>
              <NavLink to="/cart" className={activeLink}>
                Cart
                <FaShoppingCart size={20}/>
                <p>0</p>

              </NavLink>
  </span>

)

const Header = () => {
  const[showMenu,setShowMenu]=useState(false);
  const[displayName,setdisplayName]=useState("");
  const navigate=useNavigate();

  const dispatch=useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if(user.displayName==null){
          const u1=user.email.substring(0,user.email.indexOf("@"));
          const uName=u1.charAt(0).toUpperCase()+u1.slice(1);        
          setdisplayName(uName);      
        }
        else{
        setdisplayName(user.displayName);
        }
        //console.log(user);
        //const uid = user.uid;
        //console.log(user.displayName);
        dispatch(SET_ACTIVE_USER({
          email:user.email,
          userName:user.displayName?user.displayName:displayName,
          userID:user.uid,
        }));
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  },[dispatch,displayName])

  
  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  };

  const hideMenu=()=>{
    setShowMenu(false);
  }

  const logoutUser=()=>{
    signOut(auth).then(() => {
      toast.success("Logout Succeesfull");
      navigate("/");
    }).catch((error) => {
      toast.error(error.message);
    });
  }
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav 
        className={showMenu?`${styles["show-nav"]}`:
        `${styles["hide-menu"]}`}>
          
          <div 
          className={showMenu?`${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
          :`${styles["nav-wrapper"]}`} onClick={hideMenu}></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>             
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            <li>
              <AdminOnlyRoutes>
                {" "}
            <button className="--btn --btn-primary">Admin</button>
            </AdminOnlyRoutes>
            </li>
            <li>
            <NavLink to="/" className={activeLink}>
                Home
              </NavLink>              
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>           
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <ShowOnLogout>            
              <NavLink to="/Login" className={activeLink}>Login</NavLink>
              </ShowOnLogout>                           
              <ShowOnLogin>  
              <a href="#Home" style={{color:"#ff7722"}}>
                <FaUserCircle size={16}/>
                Hi,{displayName}
              </a>       
              <NavLink to="/order-history" className={activeLink}>My orders</NavLink> 
              <NavLink to="/" onClick={logoutUser}>Logout</NavLink>
              </ShowOnLogin> 
            </span>
            {cart}
          </div>
         
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  )
}

export default Header
