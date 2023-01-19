import { useState } from "react";
import { Card, Image, Icon, Segment, Divider, Container, Label} from "semantic-ui-react";
import Inventory from "./Inventory";

function InventoryCard({id, item_name, image_url, current_stock, minimum_stock, notes, category, item_url, brand, color, unit_type, updated_date, retailer, setUpdateInventory, updateInventory, setRerender}) {

    const [toggleEdit, setToggleEdit] = useState(false);
    const [editStock, setEditStock] = useState({

    });

    const handleEditItem = () => {
        setToggleEdit(!toggleEdit)
    };
    

    const confirmedEdit = (e) => {
        e.preventDefault();
         // fetch(`/items/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(updateInventory)
        // })
        // .then(res => {
        //     if(res.ok){
        //         res.json().then(data => {
        //             setUpdateInventory([...inventory, data])
        //             setRerender(data)
        //         })
        //     } else {
        //         res.json().then(data => setErrors(data.errors))
        //     }
        // })
    }


    const handleDeleteItem = () => {
        fetch(`/items/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setRerender(data)
                })
            } else {
                res.json().then(console.log("well dang"))
            }
        })   
    };




    return (
        <>
            {!toggleEdit ?
            <Card>
                <Label as="a" attached='bottom left' size="small" onClick={handleEditItem}>
                    <Icon name="edit"/>Edit
                </Label>
                <Label as="a" attached='bottom right' color="red" size="small" onClick={handleDeleteItem}>
                     <Icon name="trash"/>Delete
                </Label>
                <Card.Content>                    
                    <Image src={image_url}  size="medium"/>                   
                    <Card.Content>
                    
                        <Card.Header>
                            <h2>{brand === "" ? item_name : `${brand}: ${item_name}`}</h2>
                        </Card.Header>
                        <Divider></Divider>

                        <Card.Description size="large">
                            <h3>Category:</h3> {category}
                        </Card.Description>
                       
                        <Card.Description><h3>Color:</h3> {color}</Card.Description>
                       
                        <Card.Description><h3>Current Stock:</h3> {current_stock} {unit_type}</Card.Description>
                        <Card.Description><h3>Minimum Stock:</h3> {minimum_stock} {unit_type}</Card.Description>
                        <Card.Description>
                        <h3>Retailer:</h3> <a href={item_url} target="_blank" rel="noopener noreferrer">{retailer.retailer_name}</a>
                        </Card.Description>
                        <Card.Description><h3>Notes:</h3> {notes}</Card.Description>
                    </Card.Content>    
                </Card.Content>
                <Card.Content extra>
                    
                </Card.Content>
            </Card>

            :

            <Card>
                
                <Label as="a" attached='bottom left' size="small" onClick={handleEditItem}>
                    <Icon name="x"/>NEVERMIND
                </Label>
                <Label as="a" attached='bottom right' color="green" size="small" onClick={confirmedEdit}>
                     <Icon name="check"/>Confirm
                </Label>
                <Card.Content>                    
                    <Image src={image_url}  size="medium"/>                   
                    <Card.Content>
                    
                        <Card.Header>
                            <h2>{brand === "" ? item_name : `${brand}: ${item_name}`}</h2>
                        </Card.Header>
                        <Divider></Divider>

                        <Card.Description size="large">
                            <h3>Category:</h3> {category}
                        </Card.Description>
                       
                        <Card.Description><h3>Color:</h3> {color}</Card.Description>
                       
                        <Card.Description>
                            <h3>Current Stock:</h3>

                        {/* PUT THE GODDAMN FORM HERE */}
                        {/* PUT THE GODDAMN DROPDOWN HERE */}


                        </Card.Description>
                        <Card.Description>
                            <h3>Minimum Stock:</h3> {minimum_stock} {unit_type}

                        {/* PUT THE GODDAMN FORM HERE */}
                        {/* PUT THE GODDAMN DROPDOWN HERE */}

                        </Card.Description>
                        <Card.Description>
                        <h3>Retailer:</h3> <a href={item_url} target="_blank" rel="noopener noreferrer">{retailer.retailer_name}</a>
                        </Card.Description>
                        <Card.Description>
                            <h3>Notes:</h3> {notes}

                            {/* PUT THE GODDAMN FORM HERE */}


                        </Card.Description>
                    </Card.Content>    
                </Card.Content>
                <Card.Content extra>
                    
                </Card.Content>
            </Card>
            }
        </>
    )
};

export default InventoryCard;