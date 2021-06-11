import './App.css';
import HomePage from './Pages/HomePage';
import InformationPage from './Pages/InformationPage';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact component={HomePage} path="/"/>     
          <Route exact component={InformationPage} path="/:id"/>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;