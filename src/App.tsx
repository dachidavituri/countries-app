import "./App.css";
import { categories } from "./info";
import { countries } from "./info";
import travelImg from "./assets/360_F_319746107_n99b20pTyXt8xYJXQqVBI5dJVttUANFn.jpg";
function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <h1>EXPLORE THE WORLD</h1>
          <nav>
            <ul>
              {categories.map((category) => (
                <li>{category}</li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <section className="heroSection">
        <h2>Discover The World</h2>
        <p>
          ჩვენი პლატფორმა გთავაზობთ შეუზღუდავ შესაძლებლობებს მოგზაურობის
          მოყვარულთათვის!
        </p>
        <p>მოგვმართეთ დღეს და დაიწყეთ თავგადასავალი!</p>
        <img src={travelImg} />
      </section>
      <section className="countriesSection">
        {countries.map((country) => (
          <div className="country-card">
            <img src={country.img} />
            <div>
              <h2>დასახელება: {country.name}</h2>
              <h2>დედაქალაქი: {country.capitalCity}</h2>
              <h2>მოსახლეობა: {country.population}</h2>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
