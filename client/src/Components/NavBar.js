import { Menu } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";


function NavBar({handleLogOut, currentUser, setCurrentUser, errors, setErrors}) {


    
    return (
        <>
            <Menu>
                <Menu.Item>
                    Home
                    <Menu.Menu>
                        <Link to="/dashboard">
                            <Menu.Item
                                name="Dashboard"
                            />
                        </Link>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    Inventory
                    <Menu.Menu>
                        <Link to="/inventory">
                            <Menu.Item
                                name="All Inventory"
                            />
                        </Link>
                        <Link to="/inventory/itemized">
                            <Menu.Item
                                name="Itemized Inventory"
                            />
                        </Link>
                        <Link to="/form/new/inventory">
                            <Menu.Item
                                name="Add Inventory"
                            />
                        </Link>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    Retailers
                    <Menu.Menu>
                        <Menu.Item
                            name="All Retailers"
                        />
                        <Menu.Item
                            name="Add Retailer"
                        />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    Settings
                    <Menu.Menu>
                        <Menu.Item
                            name="User Preferences"
                        />
                        <Menu.Item
                            name="Logout"
                            onClick={handleLogOut}
                        />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    About
                </Menu.Item>
            </Menu>
            <Outlet />
        </>
    )
};

export default NavBar;