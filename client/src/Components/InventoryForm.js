import { Container, Divider, Form, Input, Segment, Select, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function InventoryForm({retailers}) {

let navigate = useNavigate();

    const handleRetailers = retailers.map((r) => {
        return (
            <option key={r.id} value={r.id} >
                {r.retailer_name}
            </option>
        )
    });

    const handleChange = (e) => {

    };


    return (
        <div>
            <h1>INVENTORY FORM PAGE</h1>
            <Container>
                <Segment size="huge"><b>Add Item to Inventory:</b>
                <Divider></Divider>
                    <Form>
                        <Form.Group>
                            <Form.Input 
                                control={Input}
                                label="Item Name:"
                                type=""
                                name=""
                                placeholder=""
                                value=""
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Brand:"
                                type=""
                                name=""
                                placeholder=""
                                value=""
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Color:"
                                type=""
                                name=""
                                placeholder="Black"
                                value=""
                                onChange={handleChange}
                            />
                             <Form.Input 
                                control={Input}
                                label="Category:"
                                type=""
                                name=""
                                placeholder="Ink"
                                value=""
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                        <Form.Input 
                                control={Input}
                                label="Current Stock:"
                                type=""
                                name=""
                                placeholder=""
                                value=""
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Minimum Stock:"
                                type=""
                                name=""
                                placeholder=""
                                value=""
                                onChange={handleChange}
                            />
                            <Form.Field label='Unit Type:' control='select' onChange={handleChange}>
                                <option value=''>select</option>
                                <option value='oz'>ounces (oz)</option>
                                <option value='qt'>quarts (qt)</option>
                                <option value='gal'>gallons (gal)</option>
                            </Form.Field>
                        </Form.Group>
                        <Form.TextArea label='Notes about item:' placeholder='Order by the case...' />
                        <Form.Field label='Retailer:' control='select' onChange={handleChange}>
                                <option value=''>select</option>
                                {handleRetailers}
                        </Form.Field>
                        <p >Is your Retailer not listed? <u onClick={()=> {navigate('/form/new/retailer');}}>Click here to add a new one.</u></p>
                        <Form.Group>
                            <Form.Input 
                                control={Input}
                                label="Item URL:"
                                type=""
                                name=""
                                placeholder=""
                                value=""
                                onChange={handleChange}
                            />
                            <Form.Input 
                                control={Input}
                                label="Image URL:"
                                type=""
                                name=""
                                placeholder=""
                                value=""
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Segment>
            </Container>
        </div>
    )
};

export default InventoryForm;