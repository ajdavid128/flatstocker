import { Dropdown, Menu } from "semantic-ui-react";
import { Outlet, Link, useNavigate } from "react-router-dom";


function NavBar({currentUser, setCurrentUser, errors, setErrors}) {

    let navigate = useNavigate();

    // LOGOUT:
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        setCurrentUser(null);
        navigate("/");
      }
    });
  };

  const LandingNav = () => {
    return (
        <>           
            <Menu.Item name="About"/>
            <Menu.Menu position="right">
                <Menu.Item name="Login"/>
                {/* ADD LINK ROUTE TO SIGNUP PAGE/LOGIN PAGE */}
            </Menu.Menu>
        </>
    )
  }

    
    return (
        <>
            <Menu>
                {/* {currentUser && currentUser ?
                <> */}
                    <Link to="/dashboard">
                        <Menu.Item name="Dashboard"/>
                    </Link>    
                    <Dropdown item text="Inventory">
                        <Dropdown.Menu>
                            <Link to="/inventory">
                                <Dropdown.Item>All Inventory</Dropdown.Item>
                            </Link>
                            <Link to="/inventory/itemized">
                                <Dropdown.Item>Itemized Inventory</Dropdown.Item>
                            </Link>
                            <Link to="/form/new/inventory">
                                <Dropdown.Item>Add Inventory</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text="Retailers">
                        <Dropdown.Menu>
                            <Link to="/retailers">
                                <Dropdown.Item>All Retailers</Dropdown.Item>
                            </Link>
                            <Link to="form/new/retailer">
                                <Dropdown.Item>Add Retailer</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position="right">
                        <Dropdown item text="Settings">
                            <Dropdown.Menu>
                                <Link to="/preferences">
                                    <Dropdown.Item>User Preferences</Dropdown.Item>
                                </Link>
                                <Link to="/about">
                                    <Dropdown.Item>About Flatstocker</Dropdown.Item>
                                </Link>
                                {/* use Navigate to redirect the logout to the login page */}
                                <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                {/* </>
                : null } */}
            </Menu>
            <Outlet />
        </>
    )
};

export default NavBar;