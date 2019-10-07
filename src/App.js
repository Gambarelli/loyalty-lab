import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ProductGrid from './components/ProductGrid/ProductGrid'
import HeroSection from './components/HeroSection/HeroSection'
import ApiService from './services/apiService';
import userContext, { UserProvider } from './context/userContext'

//Uses React, ContextAPI, Hooks, Storybook


function App() {

  const apiService = new ApiService();
  const [user, setUser] = useState({});
  const {uContext, setuContext} = useContext(userContext)

  useEffect(() => {
    apiService.getUser().then(({data}) => {
        console.log(data);
        setUser(data);
    });
  },[]);

  // useEffect(() => {
  //   console.log('render loop')
  // },[user]);

  const updateUser = (val) => {
    debugger;
    user.points = val["New Points"];
    setUser(user);
 }

  return (
    
    <div className="App">
      <UserProvider value={{user: user, setUser: updateUser}}>
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="ProductGridContainer">
        <ProductGrid></ProductGrid>
      </div>
      </UserProvider>
    </div>
  );
}

export default App;
