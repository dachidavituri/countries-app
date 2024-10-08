import Card from "^/home/components/card";
import CardContent from "^/home/components/card/content";
import CardHeader from "^/home/components/card/header";
import Hero from "^/home/components/hero";
const HomePageView: React.FC = () => {
  return (
    <>
      <Hero />
      <Card>
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
