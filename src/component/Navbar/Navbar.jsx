import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import search from "../../assests/search-solid.svg";
import Avatar from "../../component/Avatar/Avatar";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";

function Navbar() {
  var user = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };
  return (
    <div className="main-nav">
      <div className="navbar">
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
          <div className="navbar-2">
            {user === null ? (
              <Link to="/Auth" className="nav-item nav-links">
                LogIn
              </Link>
            ) : (
              <>
                <Avatar
                  backgroundColor="#009dff"
                  px="10px"
                  py="7px"
                  borderRadius="50%"
                  color="white"
                >
                  <Link
                    to={`/Users/${user?.result?._id}`}
                    style={{ color: "white", textDecoration: "none " }}
                  >
                    {user.result.name.charAt(0).toUpperCase()}
                  </Link>
                </Avatar>

                <button className="nav-item nav-links" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
