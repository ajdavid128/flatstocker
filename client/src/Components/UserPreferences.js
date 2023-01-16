import { Button } from "semantic-ui-react";
import ChangeEmail from "./ChangeEmail";
import { useState } from "react";


function UserPreferences({errors, setErrors, currentUser, setUpdateEmail, updateEmail}) {

    const [displayEmailForm, setDisplayEmailForm] = useState(false);
    const [buttonText, setButtonText] = useState(false);


    const handleChangeEmailForm = () => {
        setDisplayEmailForm(!displayEmailForm);
        setButtonText(!buttonText);
    }

    

    return (
        <div>
            <h1>USER PREFERENCES PAGE</h1>
            <Button onClick={handleChangeEmailForm}>{!buttonText ? "Change Email" : "Hide Form"}</Button>
            {displayEmailForm ? <ChangeEmail currentUser={currentUser} updateEmail={updateEmail} setUpdateEmail={setUpdateEmail} errors={errors} setErrors={setErrors}/> : null}
        </div>
    )
};

export default UserPreferences;