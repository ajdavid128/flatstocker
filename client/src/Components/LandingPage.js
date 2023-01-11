import { Container } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


function LandingPage({errors, setErrors, setCurrentUser}) {
    return (
        <div>
            <Container>
                <LoginForm 
                    setCurrentUser={setCurrentUser}
                    errors={errors}
                    setErrors={setErrors}
                />
            </Container>

            <Container>
                <SignupForm 
                    setCurrentUser={setCurrentUser}
                    errors={errors}
                    setErrors={setErrors}
                />
            </Container>
        </div>
    )
};

export default LandingPage;