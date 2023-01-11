import { Container } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


function LandingPage() {
    return (
        <div>
            <Container>
                <LoginForm />
            </Container>
            
            <Container>
                <SignupForm />
            </Container>
        </div>
    )
};

export default LandingPage;