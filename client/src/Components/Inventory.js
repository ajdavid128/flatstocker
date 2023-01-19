import { Container, Table } from "semantic-ui-react";
import InventoryCard from "./InventoryCard";
import InventoryTable from "./InventoryTable";

function Inventory({inventory}) {

    // console.log(inventory);

    // let thisIsAnArray = inventory && inventory

    const inventoryArray = inventory.map((eachInv) => {
        return <InventoryTable key={eachInv.id} {...eachInv}/>
    })


    return (
        <div>
            <h1>INVENTORY PAGE</h1>
            
                <Container>
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Item</Table.HeaderCell>
                                <Table.HeaderCell>Color</Table.HeaderCell>
                                <Table.HeaderCell>Current Stock</Table.HeaderCell>
                                <Table.HeaderCell>Min. Stock</Table.HeaderCell>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                                <Table.HeaderCell>Updated On</Table.HeaderCell>
                                <Table.HeaderCell>Retailer</Table.HeaderCell>
                                <Table.HeaderCell>URL</Table.HeaderCell>
                                {/* <Table.HeaderCell>Notes</Table.HeaderCell> */}
                            </Table.Row>
                        </Table.Header>
                        {inventoryArray}
                    </Table> 
                </Container>
           
        </div>
    )
};

export default Inventory;