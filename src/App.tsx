import './App.css';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel/carousel';
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;

