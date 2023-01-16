import { Container, Table } from "semantic-ui-react";
import InventoryCard from "./InventoryCard";
import InventoryTable from "./InventoryTable";

function Inventory({inventory}) {

    // console.log(inventory);

    const inventoryArray = inventory.map((eachInv) => {
        return <InventoryTable key={eachInv.id} {...eachInv}/>
    })


    return (
        <div>
            <h1>INVENTORY PAGE</h1>
            <div>
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
                                <Table.HeaderCell>Notes</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    </Table>
                    {inventoryArray}
                </Container>
            </div>
        </div>
    )
};

export default Inventory;