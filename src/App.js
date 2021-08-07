import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
