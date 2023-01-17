import { Table } from "semantic-ui-react";



function InventoryTable({item_name, image_url, current_stock, minimum_stock, notes, category, item_url, brand, color, unit_type, unit_amount, updated_date, retailer}) {

    

    return (
        <>
        <Table.Body>
            <Table.Row>
                <Table.Cell>{brand === "" ? item_name : `${brand}: ${item_name}`}</Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{current_stock} {unit_type}</Table.Cell>
                <Table.Cell>{minimum_stock} {unit_type}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{updated_date}</Table.Cell>
                <Table.Cell>{retailer.retailer_name}</Table.Cell>
                <Table.Cell><a href={item_url} target="_blank" rel="noopener noreferrer">reorder here</a></Table.Cell>
                <Table.Cell>{notes}</Table.Cell>
            </Table.Row>
        </Table.Body>
        </>
    )
};

export default InventoryTable;