import { Container, Divider, Form, Input, Segment, Select, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InventoryForm({retailers, setInventory, errors, setErrors}) {
    
    let navigate = useNavigate();

    const [newItem, setNewItem] = useState({
        item_name: "",
        brand: "",
        color: "",
        category: "",
        current_stock: 0,
        minimum_stock: 0,
        unit_type: "",
        notes: "",
        retailer_id: 0,
        item_url: "",
        image_url: ""
    });

    console.log(newItem)
    

    const handleRetailers = retailers.map((r) => {
        return (
            <option key={r.id} value={r.id} >
                {r.retailer_name}
            </option>
        )
    });


    const handleSubmitNewItem = (e) => {
        fetch("/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newItem)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setInventory(data);
                    navigate("/inventory");
                })
            } else {
                res.json().then(data => setErrors(data.errors));
            }
        })
        setNewItem({
            item_name: "",
            brand: "",
            color: "",
            category: "",
            current_stock: 0,
            minimum_stock: 0,
            unit_type: "",
            notes: "",
            retailer_id: 0,
            item_url: "",
            image_url: ""
        });
    };


    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewItem({
            ...newItem, [key]: value
        })
        console.log(e.target.value)
    };
    


    return (
        <div>
            <h1>INVENTORY FORM PAGE</h1>
            <Container>
                <Segment size="huge"><b>Add Item to Inventory:</b>
                <Divider></Divider>
                    <Form onSubmit={handleSubmitNewItem}>
                        <Form.Group>
                            <Form.Input 
                                control={Input}
                                label="Item Name:"
                                type="text"
                                name="item_name"
                                placeholder="Acrylic Screen Print Ink"
                                value={newItem.item_name}
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Brand:"
                                type="text"
                                name="brand"
                                placeholder="Speedball"
                                value={newItem.brand}
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Color:"
                                type="text"
                                name="color"
                                placeholder="Black"
                                value={newItem.color}
                                onChange={handleChange}
                            />
                             <Form.Input 
                                control={Input}
                                label="Category:"
                                type="text"
                                name="category"
                                placeholder="Ink"
                                value={newItem.category}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                        <Form.Input 
                                control={Input}
                                label="Current Stock:"
                                type="number"
                                name="current_stock"
                                // placeholder=""
                                value={newItem.current_stock}
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Minimum Stock:"
                                type="number"
                                name="minimum_stock"
                                // placeholder=""
                                value={newItem.minimum_stock}
                                onChange={handleChange}
                            />
                            <Form.Field                                 
                                control='select' 
                                label='Unit Type:'
                                name="unit_type" 
                                value={newItem.unit_type}
                                onChange={handleChange}                                
                            >
                                <option value=''>select</option>
                                <option value='oz'>ounces (oz)</option>
                                <option value='qt'>quarts (qt)</option>
                                <option value='gal'>gallons (gal)</option>
                            </Form.Field>
                        </Form.Group>
                        <Form.TextArea 
                            label='Notes about item or special ordering details:' 
                            type="text"
                            name="notes"
                            placeholder='Order multiple gallons at a time...'
                            value={newItem.notes}
                            onChange={handleChange}
                        />
                        <Form.Field                            
                            control='select'
                            label='Retailer:' 
                            name="retailer_id" 
                            value={newItem.retailer_id} 
                            onChange={handleChange} 
                            
                        >
                            <option value=''>select</option>
                            {handleRetailers}
                        </Form.Field>
                        <p >Is your Retailer not listed? <u onClick={()=> {navigate('/form/new/retailer');}}>Click here to add a new one.</u></p>
                        <Form.Group>
                            <Form.Input 
                                control={Input}
                                label="Item URL:"
                                type="url"
                                name="item_url"
                                placeholder="https://screenprinting..."
                                value={newItem.item_url}
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Image URL:"
                                type="url"
                                name="image_url"
                                placeholder="https://screenprinting..."
                                value={newItem.image_url}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <div>
                            {errors? errors.map(e => { return <p key={e}>{e}</p>}) : null}
                        </div>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Segment>
            </Container>
        </div>
    )
};

export default InventoryForm;