import {BrowserRouter, Switch, Route} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Meny from "./Pages/Meny";

//components
import Navbar from "./components/Navbar";
import SideIcons from "./components/SideIcons";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <SideIcons />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/meny/:location" component={Meny} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
