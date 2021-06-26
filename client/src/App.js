import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path='/' exact>
          <HomeScreen/>
          </Route>
          <Route path='/cart' exact>
            <CartScreen/>
          </Route>
          <Route path='/register' exact>
            <RegisterScreen/>
          </Route>
          <Route path="/login" exact>
            <LoginScreen/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
