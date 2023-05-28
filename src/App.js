import { Cards } from "./components/Cards";
import { Category } from "./components/Category";
import { Hero } from "./components/Hero";
import { Item } from "./components/Item";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Item />
      <Category />
    </div>
  );
}

export default App;
