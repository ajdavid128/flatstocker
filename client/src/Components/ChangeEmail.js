import { Container, Form, Input } from "semantic-ui-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ChangeEmail({currentUser, setUpdateEmail, updateEmail, errors, setErrors}) {

    const [newEmail, setNewEmail] = useState({
        email: ""
    });

    console.log(newEmail)

    // SENDS PATCH REQUEST FOR EMAIL UPDATE
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmail)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(data => {setUpdateEmail([...currentUser.email, data])});
                setNewEmail({email: ""})
                console.log(currentUser.email)
            } else {
                res.json().then(console.log("whoops"))
            }
        })
    }

    // UPDATES EMAIL IN STATE
    const handleEmailChange = (e) => {
        setNewEmail({
            ...newEmail, [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }


    return (
        <div>
            <Container>
                <Form onSubmit={handleEmailSubmit}>
                    <Form.Field
                        control={Input}
                        id="email"
                        name="email"
                        placeholder="Enter new email address"
                        value={newEmail.email}
                        onChange={handleEmailChange}
                    />
                    <Form.Button>Submit New Email</Form.Button>
                </Form>
            </Container>
        </div>
    )
};

export default ChangeEmail;