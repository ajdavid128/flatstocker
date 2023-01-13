import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


function LandingPage({errors, setErrors, currentUser, setCurrentUser}) {
    return (
        <div>
            <h1>LANDING PAGE</h1>
            <h1>LOGIN</h1>
            <Container>
                <LoginForm 
                    setCurrentUser={setCurrentUser}
                    errors={errors}
                    setErrors={setErrors}
                />
            </Container>

            <h1>SIGN UP</h1>
            <Container>
                <Link to="/signup">
                    <Button>Signup!</Button>
                </Link>
            </Container>

            <h1>About</h1>
            <Container>
                <Link to="/about">
                    <Button>About Flatstocker</Button>
                </Link>
            </Container>
        </div>
    )
};

export default LandingPage;