import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/original.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";


function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  

  const UserStatus = () => {
    auth.signOut();
    dispatch({ type: "SET_CURRENT_USER", payload: null });
  };


  
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => UserStatus()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
       {hidden ? <CartDropDown /> : "" } 
    </div>
  );
}
export default Header;
