import { Button, Segment } from "semantic-ui-react";


function Dashboard({currentUser}) {

    console.log(currentUser)

    let itemCount = currentUser.items.length;
    let retailerCount = currentUser.unique_retailers.length;

   


    return (
        <div id="dash">
            <h1>DASHBOARD PAGE</h1>
            <Segment>
                <h2>Inventory Count:</h2>
                {itemCount} items
            </Segment>
            <Segment>
                <h2>Ordering From:</h2>
                {retailerCount} retailers
            </Segment>
            <Segment>
                Current Date/Time:
            </Segment>
            <Segment>
                Days since last full inventory of all items:
                <Button>Reset</Button>
            </Segment>

            <Segment>Current low-stock/out-of-stock</Segment>
        </div>
    )
};

export default Dashboard;