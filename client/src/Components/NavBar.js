import { Dropdown, Menu } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";


function NavBar({handleLogOut, currentUser, setCurrentUser, errors, setErrors}) {


    
    return (
        <>
            <Menu>
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
            </Menu>
            <Outlet />
        </>
    )
};

export default NavBar;