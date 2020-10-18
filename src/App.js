import React ,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Cover from './components/cover/index';
import Portifolio from './components/portifolio/index';
import Contact from './components/contact/index'

function App() {
  useEffect(() => {
    document.title = "Orla"
 }, []);
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path= '/'><Cover/></Route>
          <Route exact path='/portifolio'><Portifolio/></Route>
          <Route exact path='/contact'><Contact/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
