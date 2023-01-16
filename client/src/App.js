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
import PleaseLogin from './Components/PleaseLogin';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [inventory, setInventory] = useState([])
  const [retailers, setRetailers] = useState([])

  // STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
          // console.log(user)
        })
      }
    });
  }, []);

// FETCH INVENTORY FOR USER
  useEffect(()=>{
    fetch("/items")
    .then(res => {
      if(res.ok){
        res.json()
        .then(setInventory)
      }
    })
  }, [currentUser])

  // console.log(inventory)

  // FETCH RETAILERS 
  useEffect(()=>{
    fetch("/retailers")
    .then(res => {
      if(res.ok){
        res.json()
        .then(setRetailers)
      }
    })
  }, [])
  


  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route index element={
              <LandingPage 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                errors={errors}
                setErrors={setErrors}
              />}/>
        <Route path="signup" element={
              <SignupForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                errors={errors}
                setErrors={setErrors}
              />
            }/>
        {currentUser && currentUser ? <>
          <Route path="/" element={
            <NavBar 
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              errors={errors}
              setErrors={setErrors}
            />
          }>
            <Route path="about" element={<About/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="inventory" element={<Inventory inventory={inventory}/>}/>
            <Route path="inventory/itemized" element={<ItemizedInventory/>}/>
            <Route path="form/new/inventory" element={<InventoryForm/>}/>
            <Route path="retailers" element={
              <Retailers
                retailers={retailers}
              />}/>
            <Route path="form/new/retailer" element={<RetailerForm/>}/>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="preferences" element={<UserPreferences/>}/>
            <Route path="*" element={<NotFound/>}/> 
          </Route>
          </> : 
            <Route path="/nope" element={<PleaseLogin/>}/> }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
