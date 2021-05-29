import './App.css';
import Header from './Component/Containers/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from './Component/Containers/ProductListing';
import ProductDetail from './Component/Containers/ProductDetail';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
     <Switch>
     <Route path="/" exact component={ProductListing} />
     <Route path="/" exact component={ProductDetail} />
     <Route>404 not Found</Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
