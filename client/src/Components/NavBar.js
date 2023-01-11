import { Menu } from "semantic-ui-react";


function NavBar({handleLogOut}) {
    return (
        <Menu vertical>
            <Menu.Item>
                Home
                <Menu.Menu>
                    <Menu.Item
                    name="Dashboard"/>
                        
                    {/* </Menu.Item> */}
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                Home
                <Menu.Menu>
                    <Menu.Item>
                        
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>


        </Menu>
    )
};

export default NavBar;