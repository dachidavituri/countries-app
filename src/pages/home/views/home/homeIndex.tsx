import { lazy } from "react";
const Card = lazy(() => import("^/home/components/card"));
const CardContent = lazy(() => import("^/home/components/card/content"));
const CardFooter = lazy(() => import("^/home/components/card/footer"));
const CardHeader = lazy(() => import("^/home/components/card/header"));
const Hero = lazy(() => import("^/home/components/hero"));

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
            <CardFooter link={country.infoLink} />
          </>
        )}
      </Card>
    </>
  );
};
export default HomePageView;
