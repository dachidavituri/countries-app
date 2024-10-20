import useLangauge from "@/useLanguage";
import Card from "^/home/components/card";
import CardContent from "^/home/components/card/content";
import CardHeader from "^/home/components/card/header";
import Hero from "^/home/components/hero";
const HomePageView: React.FC = () => {
  const lang = useLangauge();
  return (
    <>
      <Hero lang={lang} />
      <Card lang={lang}>
        {(country) => (
          <>
            <CardHeader lang={lang} />
            <CardContent country={country} lang={lang} />
          </>
        )}
      </Card>
    </>
  );
};
export default HomePageView;
