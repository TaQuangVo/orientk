import {BrowserRouter, Switch, Route} from "react-router-dom";

//context;
import {MenyContextProvider} from "./contexts/MenyContext";
import DrinkContextProvider from "./contexts/DrinkContext";
import CartContext from "./contexts/CartContext";

//pages
import Home from "./Pages/Home";
import Meny from "./Pages/Meny";

//components
import Navbar from "./components/Navbar";
import SideIcons from "./components/SideIcons";
import Cart from "./components/Cart";
import Background from "./components/Background";


function App() {
  return (
    <div className="App">
      <MenyContextProvider>
      <DrinkContextProvider>
      <CartContext>
        <BrowserRouter>
        <Navbar />
        <SideIcons />
        <Background />
        <Cart />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/meny/:location" component={Meny} />
          </Switch>
        </BrowserRouter>
      </CartContext>
      </DrinkContextProvider>
      </MenyContextProvider>
    </div>
  );
}

export default App;
