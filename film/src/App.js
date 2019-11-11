import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesHome } from './routes';
import Navbar from './components/Navbar';
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
        <Switch>
          {showMenuHome(routesHome)} 
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
