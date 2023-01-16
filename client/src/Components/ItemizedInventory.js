import InventoryCard from "./InventoryCard";

function ItemizedInventory({inventory}) {

    const inventoryArray = inventory.map((eachInv) => {
        return <InventoryCard key={eachInv.id} {...eachInv}/>
    })

    return (
        <div>
            <h1>ITEMIZED INVENTORY PAGE</h1>
        </div>
    )
};

export default ItemizedInventory;