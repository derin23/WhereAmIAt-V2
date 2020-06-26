import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { directive } from '@babel/types';
import Home from './Components/Home/index';
class App extends React.Component{
  render(){
    return (
      <div>

        <Router>
            <div>
                <Switch>
                   
                    <Route exact path ="/" component={Home}/>

                </Switch>

            </div>

        </Router>
      </div>
    );
  }
}

export default App;
