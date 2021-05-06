import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/client/Home";

import Patient from "./pages/patient/patient";
import Doctor from "./pages/doctor/doctor";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/doctor/dashboard" component={Doctor} />
          <Route path="/patient/dashboard" component={Patient} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
