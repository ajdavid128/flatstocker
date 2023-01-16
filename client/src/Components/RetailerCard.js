import { Card } from "semantic-ui-react";

function RetailerCard({retailer_name, website_url, phone, email}) {


    return (
        <div>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>{retailer_name}</Card.Header>
                        <Card.Meta><a href={website_url}>website</a></Card.Meta>
                        <Card.Description>phone: {phone}</Card.Description>
                        <Card.Description>email: {email}</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
};

export default RetailerCard;