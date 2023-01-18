import { Card, Image, Icon, Segment} from "semantic-ui-react";

function InventoryCard({item_name, image_url, current_stock, minimum_stock, notes, category, item_url, brand, color, unit_type, unit_amount}) {

    
    return (
        <>
            <Card fluid>
                <Card.Content>
                    <Image src={image_url} floated="left" size="small"/>
                    <Card.Content>
                        <Card.Header>{brand === "" ? item_name : `${brand}: ${item_name}`}</Card.Header>
                        <Card.Description>Category: {category}</Card.Description>
                        <Card.Description>Color: {color}</Card.Description>
                        <Card.Description>Current Stock: {current_stock} {unit_type}</Card.Description>
                        <Card.Description>Minimum Stock: {minimum_stock}</Card.Description>
                        <Card.Description></Card.Description>
                        <Card.Description></Card.Description>
                    </Card.Content>
                    <Card.Description>Notes: {notes}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        </>
    )
};

export default InventoryCard;