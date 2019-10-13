import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import HeroSection from "./components/HeroSection/HeroSection";
import ApiService from "./services/apiService";
import { UserProvider } from "./context/userContext";
import useUser from './hooks/useUser';
import ReactNotification from 'react-notifications-component'
import '../node_modules/animate.css/animate.min.css';
import 'react-notifications-component/dist/theme.css'
//Uses React, ContextAPI, Hooks, Storybook

function App() {
  const apiService = new ApiService();
  const [user, setUser, setUserPoints] = useUser({});

  useEffect(() => {
    apiService.getUser().then(({ data }) => {
      console.log(data);
      setUser(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ReactNotification />
      <UserProvider value={{ user, setUserPoints }}>
        <Header />
        <HeroSection />
        <div className="ProductGridContainer">
          <ProductGrid />
        </div>
        <div className="NoticeBar">
            <div>
              Hey Psst! Try Clicking your current credits for more coins (maybe? <span role="img" aria-label="wait what" style={{fontSize: 24}}>🤔</span>).
            </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
