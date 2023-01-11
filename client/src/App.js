import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './Components/LandingPage';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])

  // STAY LOGGED IN:
  useEffect(() =>{
    fetch("/me")
    .then(res=> {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
          console.log(user)
        })
      }
    });
  }, []);

  // LOGOUT:


  return (
    <div>
      <h1>HERE I AM</h1>
      <LandingPage 
        setCurrentUser={setCurrentUser}
        errors={errors}
        setErrors={setErrors}
        />
    </div>
  );
}

export default App;
