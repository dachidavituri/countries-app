import Card from "^/home/components/card";
import CardContent from "^/home/components/card/content";
import CardHeader from "^/home/components/card/header";
import Hero from "^/home/components/hero";
import { countries } from "@/info";
const HomePageView: React.FC = () => {
  return (
    <>
      <Hero />
      <Card countries={countries}>
        {(country) => (
          <>
            <CardHeader />
            <CardContent country={country} />
          </>
        )}
      </Card>
    </>
  );
};
export default HomePageView;
