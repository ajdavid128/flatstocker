import { Table } from "semantic-ui-react";



function InventoryTable({item_name, image_url, current_stock, minimum_stock, notes, category, item_url, brand, color, unit_type, unit_amount, updated_at}) {


    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{brand}: {item_name}</Table.Cell>
                    <Table.Cell>{color}</Table.Cell>
                    <Table.Cell>{current_stock} {unit_type}</Table.Cell>
                    <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
                    <Table.Cell>{category}</Table.Cell>
                    <Table.Cell>{updated_at}</Table.Cell>
                    <Table.Cell> Make custom method to aquire retailer name from its id</Table.Cell>
                    <Table.Cell><a href={item_url}>reorder here</a></Table.Cell>
                    <Table.Cell>{notes}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    )
};

export default InventoryTable;