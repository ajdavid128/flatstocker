import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';

import NavBar from './Components/NavBar';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Inventory from './Components/Inventory';
import InventoryForm from './Components/InventoryForm';
import ItemizedInventory from './Components/ItemizedInventory';
import LandingPage from './Components/LandingPage';
import RetailerForm from './Components/RetailerForm';
import Retailers from './Components/Retailers';
import SignupForm from './Components/SignupForm';
import UserPreferences from './Components/UserPreferences';
import LoginForm from './Components/LoginForm';
import NotFound from './Components/NotFound';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])

  // STAY LOGGED IN:
  // useEffect(() =>{
  //   fetch("/me")
  //   .then(res=> {
  //     if(res.ok){
  //       res.json()
  //       .then(user => {
  //         setCurrentUser(user)
  //         console.log(user)
  //       })
  //     }
  //   });
  // }, []);

  // LOGOUT:
  const handleLogOut = () => {
    // fetch("/logout", {
    //   method: "DELETE"
    // })
    // .then(res => {
    //   if(res.ok) {
    //     setCurrentUser(null)
    //   }
    // });
  };


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={
            <NavBar 
              handleLogOut={handleLogOut}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              errors={errors}
              setErrors={setErrors}
            />}>
            <Route index element={
              <LandingPage 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                errors={errors}
                setErrors={setErrors}
              />}/>
            <Route path="about" element={<About/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="inventory" element={<Inventory/>}/>
            <Route path="inventory/itemized" element={<ItemizedInventory/>}/>
            <Route path="form/new/inventory" element={<InventoryForm/>}/>
            <Route path="retailers" element={<Retailers/>}/>
            <Route path="form/new/retailer" element={<RetailerForm/>}/>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="signup" element={<SignupForm/>}/>
            <Route path="settings" element={<UserPreferences/>}/>
            <Route path="*" element={<NotFound/>}/>
            
            {/* <h1>HERE I AM</h1>
            <Button onClick={handleLogOut}>LOGOUT</Button> */}
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
