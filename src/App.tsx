import "@/App.css";
import Hero from "$/hero";
import Card from "$/card";
import CardContent from "$/card/content";
import CardHeader from "$/card/header";
import CardFooter from "$/card/footer";
import Layout from "$/layout";
import { countries } from "@/info";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Card countries={countries}>
          {(country) => (
            <>
              <CardHeader />
              <CardContent country={country} />
              <CardFooter link={country.infoLink} />
            </>
          )}
        </Card>
      </Layout>
    </div>
  );
};

export default App;
