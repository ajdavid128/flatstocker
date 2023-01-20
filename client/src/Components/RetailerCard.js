import { Card, Label, Icon } from "semantic-ui-react";
import ModalDeleteRetailer from "./ModelDeleteRetailer";
import { useState } from "react";

function RetailerCard({id, retailer_name, website_url, phone, email, errors, setErrors, setUpdateRetailer, setRerender, retailers}) {

    const [toggleEdit, setToggleEdit] = useState(false);
    const [editRetailer, setEditRetailer] = useState({
        retailer_name: retailer_name,
        website_url: website_url,
        phone: phone,
        email: email
    });

    const handleEditRetailer = () => {
        setToggleEdit(!toggleEdit)
    };

    const handleChange = (e) => {
        setEditRetailer({
            ...editRetailer,
            [e.target.name]: e.target.value
        })
    };

    const confirmedEdit = (e) => {
        e.preventDefault();
        e.preventDefault();
        fetch(`/retailers/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editRetailer)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setUpdateRetailer([...retailers, data])
                    setRerender(data)
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        setToggleEdit(!toggleEdit)
    };

    const handleDeleteRetailer = () => {
        fetch(`/retailers/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setRerender(data)
                })
            } else {
                res.json().then(console.log("oops, it's a no go"))
            }
        })
    };

    return (
        <div>
            {!toggleEdit ?
            <Card.Group>
                <Card>
                    <Label as="a" attached='bottom left' size="small" onClick={handleEditRetailer}>
                        <Icon name="edit"/>Edit
                    </Label>
                    <ModalDeleteRetailer handleDeleteRetailer={handleDeleteRetailer}/>
                    <Card.Content>
                        <Card.Header>{retailer_name}</Card.Header>
                        <Card.Meta><a href={website_url} target="_blank" rel="noopener noreferrer">website</a></Card.Meta>
                        <Card.Description>phone: {phone}</Card.Description>
                        <Card.Description>email: {email}</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>

            :
            <Card.Group>
                <Card>
                    <Label as="a" attached='bottom left' size="small" onClick={handleEditRetailer}>
                        <Icon name="x"/>NEVERMIND
                    </Label>
                    <Label as="a" attached='bottom right' color="green" size="small" onClick={confirmedEdit}>
                        <Icon name="check"/>Confirm
                    </Label>
                    <Card.Content>
                        <Card.Header>{retailer_name}</Card.Header>

                        {/* PUT FORM INPUT HERE */}

                        <Card.Meta><a href={website_url} target="_blank" rel="noopener noreferrer">website</a></Card.Meta>
                        {/* PUT FORM INPUT HERE */}

                        <Card.Description>phone: {phone}</Card.Description>
                        {/* PUT FORM INPUT HERE */}

                        <Card.Description>email: {email}</Card.Description>
                        {/* PUT FORM INPUT HERE */}
                    </Card.Content>
                </Card>
            </Card.Group>

            }
        </div>
    )
};

export default RetailerCard;