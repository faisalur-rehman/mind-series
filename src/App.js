import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import SignupEmail from "./components/Signup/EmailSignup/SignupEmail";
import Affirmation from "./components/Affirmation/Affirmation";
import ResetPassword from "./components/ResetPassword/ResetPassword";

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
          <Route path="/sign-up-email">
            <SignupEmail />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/affirmation">
            <Affirmation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
