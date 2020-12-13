import {BrowserRouter, Switch, Route} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Meny from "./Pages/Meny";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component="Home" />
          <Route path="/meny/:location" component="Meny" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
