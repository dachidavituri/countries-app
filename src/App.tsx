import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Card from "./components/card/card";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card />
    </div>
  );
};

export default App;
