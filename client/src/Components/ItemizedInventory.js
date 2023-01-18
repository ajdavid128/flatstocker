import { Card, Container } from "semantic-ui-react";
import InventoryCard from "./InventoryCard";

function ItemizedInventory({inventory}) {

    const inventoryArray = inventory.map((eachInv) => {
        return <InventoryCard key={eachInv.id} {...eachInv}/>
    })

    return (
        <div>
            <h1>ITEMIZED INVENTORY PAGE</h1>
            <Container>
                <Card.Group>
                    {inventoryArray}
                </Card.Group>
            </Container>
        </div>
    )
};

export default ItemizedInventory;