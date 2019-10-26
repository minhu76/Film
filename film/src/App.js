import React from 'react';
import './App.css';
//redux routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesHome } from './routes';
//import Pages
import Navbar from './components/Navbar';
import ListCarousels from './Pages/Carousel/ListCarousels';
import HomePage from './Pages/HomePage';
import Footer from './Pages/Footer/Footer';


function App() {

  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.component} />
        )
      })
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <ListCarousels />                    
        <Switch>
          {showMenuHome(routesHome)}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
