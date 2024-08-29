import "./App.css";
import { cardImages } from "./utils";
import CardGrid from "./components/cardgrid";
import Header from "./components/header";


const App = () => {
  return (
    <div className="App">
    <Header />
    <CardGrid />
    </div>
  );
};

export default App;
